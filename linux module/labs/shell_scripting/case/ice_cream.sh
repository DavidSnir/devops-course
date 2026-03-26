#!/bin/bash

# echo "The user ordered $ORDER"
msg="The User Ordered "

column -t -s ',' <<EOF
#,Type,Price ₪
1,Vanilla,5
2,Chocolate,5
3,Salted Caramel,7
4,Straberry,6
5,Pistachio,8
-,-,-
EOF


FLAVOR="none"

while FLAVOR="none"; do
    read -p "What do you want to order? (Number) " ORDER
    case $ORDER in
        '1')
            FLAVOR='Vanilla';COST=5;;
        '2')
            FLAVOR='Chocolate';COST=5;;
        '3')
            FLAVOR='Salted Caramel';COST=7;;
        '4')
            FLAVOR='Stabbery';COST=6;;
        '5')
            FLAVOR='Pistachio';COST=8;;
        *)
            echo "Sorry we don't have that in the menu."
    esac
done

if [ $FLAVOR != 'none' ]; then
    echo the user ordered $FLAVOR at $COST
fi

# if [ $ORDER = "Vanilla" ]; then
#     eche "The user ordered $ORDER - 5nis"
# elif [ $ORDER = "Chocolate" ]; then
#     eche "The user ordered $ORDER - 7nis"