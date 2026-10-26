#!/usr/bin/env bash

set -u

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
failed=()

for repo in "$root_dir"/*/; do
  [[ -d "$repo/.git" ]] || continue

  name="$(basename "$repo")"
  printf '\n==> Pulling %s\n' "$name"

  if ! git -C "$repo" pull --ff-only; then
    failed+=("$name")
  fi
done

if ((${#failed[@]})); then
  printf '\nFailed to pull:\n' >&2
  printf '  %s\n' "${failed[@]}" >&2
  exit 1
fi

printf '\nAll repositories are up to date.\n'
