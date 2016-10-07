# CLIENT

## Pré-requis :
* [sass](http://sass-lang.com/install)
* [sass-json-vars](https://github.com/vigetlabs/sass-json-vars)
* [node-js](https://nodejs.org/en/)
* [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
* [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [docker](https://www.docker.com/products/overview)
* [docker-compose](https://docs.docker.com/compose/install/)
* [live-reload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=fr)

## Documentations officielles
* [ReactJS](https://facebook.github.io/react/docs/getting-started.html)
* [Material-UI](http://www.material-ui.com#/)

## Commandes
* `npm install` : récupère toutes les librairies nécessaires au projet
* `gulp build` ou `gulp` : compile l'ensemble du projet
* `gulp minify` : minifie les fichiers
* `gulp prod` : compile et minifie l'ensemble du projet
* `gulp watch` : auto-compilation et rafraichissement de la page web sur le navigateur (**ctrl-c** pour quitter)
* `docker-compose build` : création de l'image docker utilisée
* `docker-compose up` : lancement du serveur web sur le **port 8000** (**ctrl-c** pour quitter)

## Utilisation
* Executer la commande `npm install`
* Executer la commande `docker-compose build`
* Executer la commande `gulp build`
* Executer dans un nouveau terminal la commande `docker-compose up`
* Executer dans un nouveau terminal la commande `gulp watch` (penser à activer l'extension *live-reload* sur le navigateur)
