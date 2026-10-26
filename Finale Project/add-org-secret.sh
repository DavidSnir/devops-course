#!/usr/bin/env bash

set -euo pipefail

usage() {
  printf 'Usage: %s <organization> <secret-name>\n' "${0##*/}" >&2
  printf 'Provide the secret through stdin, or enter it securely when prompted.\n' >&2
}

if [[ $# -ne 2 ]]; then
  usage
  exit 2
fi

if ! command -v gh >/dev/null 2>&1; then
  printf 'Error: GitHub CLI (gh) is required.\n' >&2
  exit 1
fi

organization=$1
secret_name=$2

if [[ ! $secret_name =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]]; then
  printf 'Error: secret name must contain only letters, numbers, and underscores, and cannot start with a number.\n' >&2
  exit 2
fi

gh auth status >/dev/null

if [[ -t 0 ]]; then
  read -r -s -p "Secret value: " secret_value
  printf '\n' >&2

  if [[ -z $secret_value ]]; then
    printf 'Error: secret value cannot be empty.\n' >&2
    exit 2
  fi

  printf '%s' "$secret_value" | gh secret set "$secret_name" \
    --org "$organization" \
    --visibility all
  unset secret_value
else
  gh secret set "$secret_name" \
    --org "$organization" \
    --visibility all
fi

printf 'Secret %s is available to every repository in %s.\n' "$secret_name" "$organization"
