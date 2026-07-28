#!/bin/bash
echo "Wifi IONIS - Script de mise en route"

read -p "Votre login EPITA (prenom.nom): " login
read -s -p 'Votre mot de passe EPITA (pas celui du CRI celui de 8 characteres pour Microsoft): ' password

nmcli con add type wifi ifname wlan0 con-name IONIS ssid IONIS

echo "set ipv4.method auto
set 802-1x.eap peap
set 802-1x.phase2-auth mschapv2
set wifi-sec.key-mgmt wpa-eap
set 802-1x.identity $login@epita.fr
set 802-1x.password $password
save
activate" | nmcli con edit id IONIS
