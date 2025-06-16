#!/bin/bash

echo "#!/bin/bash" > /tmp/cfg_profile
for arg
do echo export "$arg"=true >> /tmp/cfg_profile
done

sh -c "$(curl -fsLS get.chezmoi.io)" ;
chezmoi init https://github.com/Jularthus/dotfiles-i3.git ;
nohup chezmoi apply &
tail -f ~/nohup.out
