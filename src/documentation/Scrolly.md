# Composante Scrolly

Cette composante permet de faire des animations uniques sur un élément HTML lors du scroll d'une page.

<br><br>

# Dépendance

Il n'y a pas de dépendance. Vous avez simplement besoin du fichier **scrolly.scss** pour les animations.

<br><br>

# Comment l'utiliser

## **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Scrolly"** sur l'élément HTML qui contient votre contenu.

```
<div class="site-container" data-component="Scrolly">
```

Ensuite, mettre l'attribut **data-scrolly="nomAnimation"** sur l'élément HTML que vous désirez animer lors d'un scroll.

```
<div class="scrolly__element" data-scrolly="nomAnimation">
```

<details>
<summary>Exemple complet</summary>

```
<!-- Conteneur HTML -->
<div class="site-container" data-component="Scrolly">
    <!-- Votre élément animé -->
    <div class="scrolly__element" data-scrolly="nomAnimation">
        <!-- Votre contenu -->
    </div>
</div>
```

</details>

<br><br>

# Variantes (Animations SCSS)

Voici la liste d'animations disponibles pour l'attribut **data-scrolly** à mettre sur l'élément HTML à animer.

| Attributs        | Description                                                |
| :--------------- | :--------------------------------------------------------- |
| `flipFromBottom` | L'élément HTML fait un flip à partir du bas.               |
| `flipFromRight`  | L'élément HTML fait un flip à partir de la droite.         |
| `fromBottom`     | L'élément fait une transition du bas vers le haut.         |
| `fromLeft`       | L'élément fait une transition de la gauche vers la droite. |
| `fromRight`      | L'élément fait une transition de la droite vers la gauche. |

<br>

### **Exemple**

```
    <div class="scrolly__element" data-scrolly="flipFromBottom">
        <!-- Votre contenu -->
    </div>
```

<br>

## **Comment créer de nouvelles animations**

Pour créer de nouvelles animations, aller dans le fichier **scrolly.scss**. Indenter ceci à la classe **has-js** :

```
    [data-scrolly='nomDeVotreNouvelleAnimation'] {
        /* Propriétés CSS que vous désirez modifiés */
        /* Avant la transition */

        transition: /*propriétés animés*/;

        &.is-active {
            /* Propriétés CSS que vous désirez modifiés */
            /* Après la transition -- Affichage final */
        }
    }
```

<details>
<summary>Exemple complet</summary>

```
.has-js {
    [data-scrolly='flipFromBottom'] {
        opacity: 0;
        transform: rotateX(-180deg) translateY(200px);

        transition: all 1.2s ease;

        &.is-active {
            opacity: 1;
            transform: rotateX(0) translateY(0);
        }
    }
}
```

</details>

<br>

Donnez un nom **significatif** à votre animation. Ensuite, utiliser ce nom comme valeur à l'attribut **data-scrolly** de l'élément HTML désiré.

```
<div class="scrolly__element" data-scrolly="nomDeVotreNouvelleAnimation">
```

<br>

## **Types de transition disponibles**

La liste des transitions disponibles se trouve dans le fichier **easing.scss** du dossier **settings**. Ce sont des variables commençant par **$**.

### **Exemple**

```
transition: all 1.2s $ease-out-expo;
```

Dans cette exemple, la transition est : `$ease-out-expo`.

<br><br>

# Classes d'état

Il y a quelques classes qui proviennent du script JavaScript du Scrolly.

<br>

## **is-active**

S'ajoute à l'élément HTML avec l'attribut **data-scrolly** qui entre dans la vue de l'utilisateur. Met en action l'animation de cet élément HTML.

<br><br>

# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Caroline Forget](http://cforget.dectim.ca/).
