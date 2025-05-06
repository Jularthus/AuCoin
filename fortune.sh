#!/bin/bash

if [ -e "$HOME/.fortune" ]; then
  file="$HOME/.config/fortune/fortune.txt"

  if [[ ! -s "$file" ]]; then
    # shuf -n 1 "$HOME/.config/fortune/fixedFortune.txt"
    echo ""
    exit 0
  fi

  IFS= read -r line <"$file"
  echo "$line"
  tail -n 2 "$file" >"$file.tmp" && mv "$file.tmp" "$file"
fi
