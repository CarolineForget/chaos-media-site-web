# Composante Header

Cette composante permet d'instancier un header avec navigation sur un élément HTML.

<br><br>

# Dépendance

_Il n'y a pas de dépendance._

<br><br>

# Comment l'utiliser

## **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Header"** sur l'élément HTML qui contient votre Header.

```
<header data-component="Header">
```

<details>
<summary>Voir un exemple</summary>

```
<!-- Conteneur du Header -->
<header data-component="Header">
    <div class="nav">
        <!-- Navigation -->
        <nav class="nav-primary">
            <ul>
                <li>
                    <a href="#" class="nav-primary__item">Lien 1</a>
                </li>
                <li>
                    <a href="#" class="nav-primary__item">Lien 2</a>
                </li>
                <!-- Autres lien de navigation -->
            </ul>
        </nav>
    </div>

    <!-- Bouton pour la version mobile -->
    <div class="button">
        <button class="header__toggle js-toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</header>
```

</details>

<br>

## **Paramètres optionnels**

Ces paramètres sont des attributs facultatifs à assigner à l'élément HTML qui contient votre Header.

| Attributs           | Description                                                                                                         |
| :------------------ | :------------------------------------------------------------------------------------------------------------------ |
| `data-auto-hide`    | Détermine si le header se cache lors d'un scroll de la page. Elle rapporte une valeur **`true` ou `false`**.        |
| `data-scroll-limit` | Pourcentage de scroll de la page avant que le header ne se cache. Il faut utiliser des **valeurs allant de 0 à 1**. |

<br>

### **Exemple avec attributs**

```
<header class="wrapper" data-component="Header" data-scroll-limit="0.1" data-auto-hide="false">
```

<br><br>

# Classes d'état

Il y a quelques classes qui proviennent du script JavaScript du Header.

<br>

## **header-is-hidden**

S'ajoute au document HTML si le Header se cache automatiquement et que l'utilisateur scroll vers le bas, ce qui fait cacher le Header. Il se retire lorsque l'utilisateur scroll vers le haut de la page, ce qui fait réapparaître le Header.

<br>

## **is-scrolling-up / is-scrolling-down**

Ces deux classes définissent comment l'utilisateur scroll sur la page. Elles s'affichent sur la balise HTML. **is-scrolling-up** signifie que l'utilisateur scroll vers le haut, alors **is-scrolling-down** signigie un scroll vers le bas.

<br>

## **nav-is-active**

S'ajoute à la balise HTML si l'utilisateur est en version mobile et ouvre la navigation avec le bouton ayant la classe **js-toggle**. Cela fait apparaître le menu en version mobile. Se retire lorsque l'utilisateur ferme le menu mobile, ce qui le fait disparaître.

## **active**

S'ajoute au bouton ayant la classe **js-toggle** lorsque l'utilisateur ouvre le menu mobile. Fait l'animation de l'icône de menu à l'icône pour fermer. Se retire quand l'utilisateur ferme le menu mobile, ce qui fait l'animation de l'icône fermer à l'icône pour ouvrir le menu.

<br><br>

# Comment modifier l'animation du Header

Aller dans le fichier **header.scss** du dossier **components**. Modifier les paramètres que vous désirez animer pour le `header` (le avant et le après) et ajouter la propriété `transition`. Vous pouvez aussi modifier l'animation pour le menu mobile en allant dans le fichier **nav.scss** et en respectant les mêmes consignes.

<br><br>

# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Caroline Forget](http://cforget.dectim.ca/).
