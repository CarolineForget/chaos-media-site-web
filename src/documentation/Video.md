# Composante Video

Cette composante permet d'instancier une vidéo YouTube sur un élément HTML.
Elle permet aussi de gérer plusieurs vidéos sur une même page HTML.

<br><br>

# Dépendance

Elle utilise la librairie JavaScript de Youtube. Il n'y a pas de commandes ou de lignes de code à ajouter ni dans le HTML ni dans le main.scss.

<br><br>

# Comment l'utiliser

## **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Video"** et **data-video-id="VideoID"** sur la structure HTML respectant celle de la librairie YouTube. Ajouter aussi la classe **js-video** sur le conteneur de la vidéo selon la structure HTML.

### **Exemple**

```
<!-- Slider main container -->
<div class="video" data-component="Video" data-video-id="VideoID">
    <div class="video__media js-video"></div>
</div>
```

Pour voir l'exemple complet, visitez la [libraire YouTube](https://developers.google.com/youtube/v3).
<br><br>

## **Paramètres optionnels**

Ces paramètres sont des attributs optionnels à assigner à la structure HTML.

| Attributs            | Description                                                                                                              |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| `data-show-controls` | Cache ou montre les contrôles de YouTube sur la vidéo. Pour cacher, écrire **`false`**. Pour montrer, écrire **`true`**. |

### **Exemple**

```
<!-- Slider main container -->
<div class="video" data-component="Video" data-video-id="VideoID" data-show-controls="false">
    <div class="video__media js-video"></div>
</div>
```

<br><br>

## **Balises HTML optionnelles**

Ces balises sont à ajouter de façon optionnelle dans le conteneur de la vidéo.

### **Img**

Sert à modifier l'image de thumbnail par défaut de la vidéo YouTube. Doit absolument avoir la classe **js-poster**.

```
<img class="poster js-poster" src="cheminDeVotreImage" alt="" />
```

### **Svg**

Sert à modifier le bouton pour jouer de la vidéo YouTube. **Il faut les fichiers `Icons.js` et `icon.scss` pour pouvoir l'utiliser.** Il faut aussi que votre icône soit un **SVG** qui se trouve à la fin de ce chemin dans vos dossiers: **`assets/icons`**.

```
<svg class="icon">
    <use xlink:href="#icon-iconName"></use>
</svg>
```

#### **Classes optionnelles**

Classes optionnelles à ajouter à la balise SVG.

| Attributs      | Description                                                    |
| :------------- | :------------------------------------------------------------- |
| `icon--stroke` | Ajoute un contour à l'icône SVG.                               |
| `icon--xs`     | Grandeur de 75% par rapport à la font-size du conteneur HTML.  |
| `icon--sm`     | Grandeur de 80% par rapport à la font-size du conteneur HTML.  |
| `icon--md`     | Grandeur de 125% par rapport à la font-size du conteneur HTML. |
| `icon--lg`     | Grandeur de 175% par rapport à la font-size du conteneur HTML. |
| `icon--xl`     | Grandeur de 700% par rapport à la font-size du conteneur HTML. |

<br><br>

<details>
<summary>Exemple complet de la balise Vidéo</summary>

```
<div
    class="video"
    data-component="Video"
    data-video-id="videoID"
    data-show-controls="false"
>
    <div class="video__media js-video">
        <img
            class="poster js-poster"
            src="cheminDeVotreImage"
            alt=""
        />
        <svg class="icon icon--xl">
            <use xlink:href="#icon-iconName"></use>
        </svg>
    </div>
</div>
```

</details>

<br><br>

# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Caroline Forget](http://cforget.dectim.ca/).
