#!/bin/bash
read -p "Commit message: "
echo $REPLY
echo \"$REPLY\"
git add --all
git commit -m $(echo \"$REPLY\")
git push
