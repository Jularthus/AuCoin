file="$HOME/.config/fortune/newFortune.txt"

if [[ ! -s "$file" ]]; then
  shuf -n 1 "$HOME/.config/fortune/fixedFortune.txt"
  exit 0
fi

IFS= read -r line < "$file"
echo "$line"
tail -n +2 "$file" > "$file.tmp" && mv "$file.tmp" "$file"
