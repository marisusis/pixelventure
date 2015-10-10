#!/bin/bash
read -p "Commit message: "
echo $REPLY
echo \"$REPLY\"
git add --all
$(echo git commit -m \"$REPLY\")
git push
