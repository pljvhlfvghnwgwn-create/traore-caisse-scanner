# Guide d'utilisation — Traoré Caisse Scanner

Version 1.1 · novembre 2026 · conçu par Aboubacary Traoré

Traoré Caisse Scanner est la caisse de votre magasin : vous scannez les produits, l'application calcule le total, enregistre la vente, met le stock à jour et suit vos clients à crédit. Elle s'utilise sur le site **traore-caisse-scanner.pages.dev** ou avec l'application Android (APK).

## Premiers réglages

À faire une seule fois, avant la première vente.

1. Ouvrez l'onglet **Réglages**.
2. Écrivez le nom de la boutique, l'adresse et le téléphone. Ils s'impriment en haut de chaque reçu.
3. Touchez **Enregistrer**.
4. Touchez **Supprimer les produits d'exemple**, puis encore une fois pour confirmer. Le riz, l'huile et les autres produits de démonstration disparaissent.

Sur le site, vous pouvez installer la caisse comme une application : dans Chrome, menu ⋮ › **Ajouter à l'écran d'accueil**.

## Ajouter un produit et son code-barres

Onglet **Produits**, formulaire **Nouveau produit**.

1. **Code-barres** :
    - le produit a déjà un code sur son emballage → touchez **📷 Scanner** et visez le code ;
    - le produit n'en a pas (vrac, fait maison) → touchez **Générer** : l'application crée un numéro unique.
2. Écrivez le **nom du produit** et le **prix de vente**.
3. Conseillé : le **prix d'achat** (pour calculer le bénéfice), le **stock actuel** et le seuil **Alerte si stock ≤**.
4. Touchez **Enregistrer le produit**.
5. Code généré à l'étape 1 : sur la ligne du produit, touchez **Étiquette**, indiquez la quantité, puis **Préparer les étiquettes** › **Imprimer**. Collez les étiquettes sur les produits.

Pour imprimer les étiquettes de plusieurs produits à la fois, utilisez **🏷️ Imprimer des codes-barres** sous la liste. Le format « 3 étiquettes par ligne » est le plus sûr au scan.

Pour corriger un produit : **Modifier** sur sa ligne. Pour importer une liste depuis Excel : **Importer un fichier CSV**, avec les colonnes code ; nom ; prix ; prix_achat ; stock ; catégorie.

## Faire une vente

1. Ouvrez l'onglet **Caisse**.
2. Ajoutez les produits :
    - avec un lecteur de code-barres (USB ou Bluetooth) : scannez, le produit s'ajoute tout seul ;
    - avec la caméra : touchez **📷**, scannez les produits l'un après l'autre, puis **Terminer** ;
    - à la main : tapez le nom (par exemple « riz ») ou le code, puis **Ajouter**. Tapez **3*** devant un code pour en ajouter 3.
3. Ajustez avec **+** et **−**, **Changer le prix** ou **Retirer**. Le total s'affiche en bas.
4. Touchez **Encaisser**. Ajoutez une remise si besoin, en FCFA ou en %.
5. Choisissez le paiement :
    - **Espèces** : saisissez le montant reçu ou touchez un montant rapide, la monnaie à rendre s'affiche ;
    - **Mobile Money** : Orange Money, MTN MoMo, Moov Money ou Wave, avec la référence si vous voulez ;
    - **Crédit client** : choisissez le client (ou **+ Nouveau client**) et l'acompte éventuel.
6. Touchez **Valider la vente**. Le reçu s'affiche : **Partager le reçu** ou **Envoyer par WhatsApp**.

Un client attend pendant qu'un autre cherche son argent ? Touchez **Attente** : le panier est mis de côté et se reprend d'un toucher.

Un code n'est pas reconnu ? L'application propose **Créer ce produit**.

## Clients et ventes à crédit

- L'onglet **Clients** affiche en haut le total des crédits à encaisser.
- **Ajouter le client** : nom et téléphone. Un client peut aussi être créé pendant une vente à crédit.
- Touchez un client pour voir ce qu'il doit et l'historique de ses achats et versements.
- Il rembourse : saisissez le montant, puis **Encaisser**.
- **Rappel WhatsApp** prépare un message poli avec le montant dû.
- Un client ne peut être supprimé que si sa dette est à zéro.

## Gérer le stock

- Chaque vente retire les quantités du stock. Une vente annulée les remet.
- Dans **Produits**, une pastille donne l'état : verte (en stock), orange (stock bas), rouge (rupture). Le chiffre rouge sur l'onglet **Produits** indique combien de produits sont à réapprovisionner.
- Les filtres **Stock bas** et **Rupture** donnent la liste des achats à faire.
- Marchandise reçue : touchez **+ Stock** sur la ligne du produit, saisissez la quantité reçue (et le nouveau prix d'achat s'il a changé), puis **Ajouter**.
- La valeur du stock, au prix d'achat, s'affiche au-dessus de la liste.

## Rapports, dépenses et caisse du soir

Onglet **Rapports**. Choisissez la période : Aujourd'hui, Hier, 7 jours, Ce mois ou Tout.

- **Chiffres** : chiffre d'affaires, bénéfice brut, bénéfice net (après dépenses), nombre de ventes, panier moyen, répartition par mode de paiement, meilleures ventes. Le bénéfice n'est exact que si les prix d'achat sont renseignés.
- **Dépenses** : notez le transport, l'électricité, les sachets… (motif et montant, puis **Ajouter**).
- **Caisse du jour** : le montant qui doit être dans le tiroir le soir, soit ventes en espèces + versements des clients − dépenses. Comptez la caisse et comparez, sans le fond de caisse.
- **Historique des ventes** : **Voir le reçu** ou **Annuler la vente**. Le stock et la dette du client sont corrigés automatiquement.
- **Exporter (CSV)** ouvre les ventes de la période dans Excel ou Google Sheets.

## Sauvegarder et restaurer ses données

Vos données sont enregistrées sur l'appareil, pas sur internet. Si le téléphone est perdu ou cassé, ou si l'application est désinstallée, seule une sauvegarde permet de tout récupérer.

1. Touchez **💾 Sauvegarder**, en haut de l'écran. Un fichier ZIP est créé avec les produits, le stock, les ventes, les clients, les dettes, les dépenses, les réglages et des tableaux Excel.
    - Application Android : le fichier va dans **Mes fichiers › Documents › Traore Caisse**. Une sauvegarde automatique est aussi faite chaque jour dans **Traore Caisse › auto** (les 7 dernières sont gardées).
    - Site web : le fichier arrive dans **Téléchargements**. Un rappel orange s'affiche si vous n'avez pas sauvegardé depuis 7 jours.
2. Au moins une fois par semaine, envoyez une copie hors du téléphone : WhatsApp à vous-même ou Google Drive.
3. Pour restaurer (nouveau téléphone, réinstallation) : **Réglages › Restaurer une sauvegarde**, choisissez le ZIP, vérifiez le résumé, puis **Remplacer mes données**.

Attention : la restauration remplace toutes les données présentes sur l'appareil.

Le site et l'application Android ne partagent pas leurs données. Utilisez l'un des deux au magasin, ou passez de l'un à l'autre avec une sauvegarde.

## Problèmes fréquents

| Problème | Solution |
| --- | --- |
| La caméra ne s'ouvre pas sur le site | Autorisez la caméra : touchez le cadenas à gauche de l'adresse › Autorisations, puis réessayez. Sinon, l'application propose de photographier le code. |
| Application Android : « Installation du scanner en cours » | Le premier scan télécharge le module Google. Restez connecté à internet une minute et réessayez. |
| Un code-barres n'est pas lu | Bonne lumière, code bien à plat, à 10–20 cm. Sinon, tapez le numéro écrit sous les barres. |
| « Code inconnu » | Le produit n'est pas dans le catalogue : touchez **Créer ce produit**. |
| Le bénéfice paraît trop élevé | Ajoutez le prix d'achat des produits (Produits › Modifier). |
| Une vente est fausse | Rapports › Historique › **Annuler la vente**, puis refaites-la. |
| Message « mémoire pleine » | Faites tout de suite une sauvegarde ZIP, puis libérez de l'espace sur le téléphone. |
| Nouveau téléphone | Installez l'application, puis Réglages › **Restaurer une sauvegarde**. |
