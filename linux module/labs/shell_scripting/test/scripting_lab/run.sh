#!/bin/bash

MESSAGE='Lab complete'
print_message(){
	echo "Message: $1"
}
for i in {1..3}; do
	print_message "$MESSAGE"
done
echo Done. Ran 3 times,