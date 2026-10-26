{{/*
Expand the name of the chart.
*/}}
{{- define "movie-chart.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "movie-chart.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "movie-chart.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "movie-chart.labels" -}}
app: {{ include "movie-chart.name" . }}
release: {{ .Release.Name }}
chart: {{ printf "%s-%s" .Chart.Name .Chart.Version }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "movie-chart.selectorLabels" -}}
app: {{ include "movie-chart.name" . }}
release: {{ .Release.Name }}
{{- end }}

{{/*
Mongo name
*/}}
{{- define "movie-chart.mongoName" -}}
{{- printf "%s-mongo" .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "movie-chart.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "movie-chart.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}
