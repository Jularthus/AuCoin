#!/usr/bin/env bash

init() {
profile_path="/tmp/cfg_profile"
echo '#!/bin/bash' > "$profile_path"
}

add_var() {
  local varname="$1"
  echo "export $varname=true" >> "$profile_path"
}

ask_cfg() {
init
options=('Quit' 'CFG_NO_PACKAGES' 'CFG_NO_FONTS' 'CFG_NO_WALLPAPER' 'CFG_NO_OHMYZSH' 'CFG_NO_FORTUNE' 'CFG_NO_POLYBAR' 'CFG_NO_PICOM' 'CFG_NO_WS_RENAMER' 'CFG_NO_KILL_TERMINAL' 'CFG_NO_FORTUNE' 'CFG_NO_ROFI_FONTS')

echo "Select componants you do NOT want installed :"
select opt in "${options[@]}"; do
	if [[ -z "$opt" ]]; then
		continue
	fi
  if [[ "$opt" == "Quit" ]]; then
    break
  fi
  add_var $opt
  echo "Adding : $opt"
done

# add confirmation script
echo
echo "This is the config file generated: "
echo
cat /tmp/cfg_profile ;
echo
}
ask_cfg



while true; do
    read -rp "Is this configuration ok ? [y/n] " answer
    case "$answer" in
      [Yy]) break ;;   
      [Nn]) ask_cfg ;;   
      *)  ;;
    esac
  done

echo INSTALLING CHEZMOI
sh -c "$(curl -fsLS get.chezmoi.io)" ;
chezmoi init https://github.com/Jularthus/dotfiles-i3.git ;
nohup chezmoi apply
