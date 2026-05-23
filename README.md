# RVMC.fr

Ce dépôt contient le code source du site RVMC.fr, un site statique destiné à présenter et centraliser les liens liés au projet ReviveMC.

Site principal : [https://revivemc.fr](https://revivemc.fr)
Ce site        : [https://rvmc.fr](https://rvmc.fr)

## Objectif du projet

RVMC.fr est une site web simple permettant de regrouper et de présenter les différents liens du projet ReviveMC (Serveur discord, Instagram, Youtube, Tiktok, etc.).

Ce repo contient uniquement le code du site RVMC, distinct du site principal ReviveMC.

## Structure du projet

Le site est volontairement simple :

* HTML (structure)
* CSS (style)
* images / assets

Aucun backend.

## Installation

### 1. Installer les dépendances (optionnel, uniquement pour minifier)

```bash
npm install
```

### 2. Mode développement / build

Le projet utilise Gulp pour minifier le code.

Build production :

```bash
npm run build
```

Mode watch (développement) :

```bash
npm run watch
```

## Build output

Le site compilé est généré dans :

```plaintext
/build
```

Ce dossier contient la version optimisée et prête à être déployée.

## Hébergement

Le site est 100% statique.

Vous pouvez l'héberger simplement en servant le dossier :

```plaintext
/build
```

## Liens utiles

* Site principal ReviveMC : [https://revivemc.fr](https://revivemc.fr)
* Interface RVMC : [https://rvmc.fr](https://rvmc.fr)

## Licence

Voir le fichier LICENSE pour plus d'informations.
