#!/bin/bash

# Carrega variáveis do .env
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi
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
git config user.name "amarkes"
git config user.email "tmowna@gmail.com"
git add .
git commit -m "$COMMIT_MESSAGE"
git push "$REPO" HEAD:main


# for publish
# bash push.sh --commit="fix: ajusta layout mobile"