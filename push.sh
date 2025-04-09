#!/bin/bash

# Default message
COMMIT_MESSAGE="update"

# Parse argumentos
for arg in "$@"; do
  case $arg in
    --commit=*)
      COMMIT_MESSAGE="${arg#*=}"
      shift
      ;;
    *)
      ;;
  esac
done
REPO="https://$GH_TOKEN@github.com/amarkes/truff.git"

# Commit e push
git add .
git commit -m "$COMMIT_MESSAGE"
git push "$REPO" HEAD:main


# for publish
# bash push.sh --commit="fix: ajusta layout mobile"