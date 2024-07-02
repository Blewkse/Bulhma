# Bulhma

Le projet utilise docker pour le développement et tous les tests.

## Variables d'environnement

Pour permettre au projet de se lancer correctement en développement, il vous faudra un fichier nommé 'env' à la racine du projet.
Copiez le fichier env.example et renommez le env puis adaptez le si vous le souhaitez.

## Lancer le projet pour le développement

Vérifiez que votre port 80 est disponnible car nous utilisons nginx pour avoir un environnement de développement similaire à celui qu'on aurait en production.
Le port 4000 et 5173 sont aussi utilisés.

```sh
build_dev.sh
start_dev.sh
```

## Lancer les tests fonctionnel (API)

```sh
build_test.sh
start_test.sh
```

## Lancer les tests de performance (API)

```sh
build_perf_test.sh
start_perf_test.sh
```

## Lancer les tests end to end

```sh
build_e2e_test.sh
start_e2e_test.sh
```
