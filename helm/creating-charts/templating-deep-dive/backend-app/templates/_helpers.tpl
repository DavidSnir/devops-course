{{- default "template.name" -}}
{{- printf .Release.Name .Chart.Name -}}
{{- end -}}