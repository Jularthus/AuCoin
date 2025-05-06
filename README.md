# AuCoin

L'appli qui te permet de recevoir des messages de la part de tout le monde !

## Comment ça marche?

Tu peux lancer le serveur avec `node index.js`, il se lance sur le port 45678
par défaut.

## Environment Variables

Pour ce projet, il faut configurer le fichier `.env` :

`PASSWORD` -> Le mot de passe pour envoyer les messages (impossible à désactiver
pour des raisons de sécurité)

## Et après?

Une fois le serveur lancé, tu peux commencer à recevoir des messages, ils seront
stockés sur `./fortune/fortune.txt`

Tu trouveras aussi une backup de tous les messages (puisqu'ils sont supprimés
après lecture) dans `./fortune/allFortunes.txt`
