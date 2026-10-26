.PHONY: create delete

create:
	eksctl create cluster -f eks.yaml

delete:
	eksctl delete cluster -f eks.yaml

.DEFAULT_GOAL := create
