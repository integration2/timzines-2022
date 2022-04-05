# Grille d’évaluation TIMZINE
*Le projet compte pour 20 % de la session*  
Travailler en amélioration progressive.  
Versionner avec GIT et Github **(travailler sur votre branche)**    
```git checkout nomUsagerGithub```      
Vérifier régulièrement en vous servant de    
`git status`  

## Étapes de travail (sprints) & livrables
### 1. HTML sémantique, valide et accessible (Semaine 10 - Échéance 8 avril - 20%) 
- [ ] Intégrer les contenus en vous souciant uniquement de la structure, de la sémantique et de la fonctionnalité. 
- [ ] Mettre en place les mécanismes d'une navigation accessible. Le logo de TimZines doit permettre le retour à la page d'accueil "../index.html"
- [ ] Publier un commit "html sémantique"

### 2. Analyse, élaboration des stratégies d’intégration (Semaine 10 - Échéance 13 avril - 20%)
#### À partir des maquettes :
- [ ] __Esquisser quelques grilles css__  
Les colonnes et les rangées doivent être apparents par des pointillés prolongeant les lignes.
Les zones doivent être définies par un petit nom court et descriptif ou simplement par des lettres comme dans les premiers démos.
Un possible point de départ est une grille de 4 colonnes `2fr 1fr 1fr 2fr`. 
Les esquisses de grilles peuvent être faites en ajoutant un calque dans Figma puis en exportant en png ou pdf. 
Alternativement, on peut ajouter un calque de blanc légèrement transparent et imprimer les maquettes ainsi *blanchies* pour ensuite tracer par-dessus la grille et les zones.
- [ ] Publier les meilleures esquisses dans le [fil de discussion](https://github.com/integration2/timzines-2022/discussions) du projet.
Partager réflexion, questionnements. Demander des commentaires. 
- [ ]__Identifier les défis d'intégration, chercher des solutions.__
Documenter le défi par une description et un visuel (capture-écran, détail de la maquette).
- [ ] Publier mes défis d'intégration, partager mes solutions anticipées, demander d'autres avis ou de l'aide pour préciser une solution.
- [ ] Commenter un défi d'au moins une autre personne.

#### À partir du HTML structurel et sémantique :
- [ ] Identifier les conteneurs sémantiques pouvant servir de contexte de mise en forme (grid ou flexbox)
- [ ] Ajouter des conteneurs de grille ou de flexbox et des conteneurs d'item selon les besoins définis par les grilles css à implémenter
- [ ] Valider le code HTML. S'il y a des erreurs, les corriger. Si on arrive pas à en corriger une, demander de l'aide dans le [fil de discussion](https://github.com/integration2/timzines-2022/discussions) du projet
- [ ] Faire une capture-écran des résultats dans le validateur après corrections. 
- [ ] Déposer cette capture-écran dans le dossier images en la nommant *html-ok*

### 3. Intégrer les styles CSS (Semaine 11-12 - Échéance 22 avril - 40%)
#### Penser et intégrer « Mobile First » 
- [ ] Coder à la suite de chaque sélecteur les requêtes media des variantes pour écrans plus larges.
- [ ] Aucun fichier source n’est fourni, à vous de structurer vos fichiers à l'instar de ceux du cadriciel.
- [ ] La zone de contenu principal est intégrée à l’aide d’une grille définie par un `grid-template-areas`.
- [ ] D’autres techniques de positionnement (flottants, flexbox, propriété position) peuvent être utilisés au besoin.
- [ ] Développer la feuille de styles principale (styles.css) avec un grand souci des détails.

#### Mettre en application la ou les techniques complémentaires choisies parmi :
- [ ] [images réactives](http://usecases.responsiveimages.org/#art-direction)
- [ ] [multi-colonnes](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
- [ ] [animations CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [ ] [multiple images d’arrière-plan et/ou bordures](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders)

### 4. Finition (Semaine 12-13 - Échéance 27 avril - 20%)
- [ ] Ajouter des métadonnées dans le `<head>
- [ ] Concevoir, réaliser et intégrer un favicon adapté au sujet
#### Contrôle de qualité, tests et révision de code
- [ ] Déclarer un bogue ou une difficulté
- [ ] Aider à résoudre un bogue ou une difficulté
- [ ] Demander une révision de code 
- [ ] Offrir une révision de code 
##### Vérifier la performance
- [ ] Optimiser le code
- [ ] Minifier les fichiers
- [ ] Ajouter une page pour les erreurs 404
- [ ] Vérifier les *checklists* du Guide de développement Web.
#### Mise en ligne 
- [ ] Bien tester et faire tester (sur différents appareils) l'affichage et la fonctionnalité après avoir fait les dernières corrections et améliorations.