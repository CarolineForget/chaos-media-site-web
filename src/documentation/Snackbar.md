# Composante Snackbar

Cette composante permet d'instancier un snackbar à message unique sur une page HTML.

<br><br>

# Dépendance

## **LocalStorage**

Afin d'utiliser cette composante, vous devrez vous assurez d'avoir aussi le script Cache.js dans votre projet pour avoir accès au LocalStorage de votre navigateur.

- Voici le chemin à utiliser dans votre projet : `utils/Cache.js`

<br><br>

# Comment l'utiliser

## **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Snackbar"** sur la structure HTML de votre snackbar.
Donner aussi une valeur à l'attribut **data-id** sur la même structure. Sur la strucutre HTML du bouton pour fermer votre snackbar, ajouter la classe **js-close-snackbar** et l'attribut **data-close-snackbar="true"**.

### **HTML du snackbar**

```
<div class="snackbar" data-component="Snackbar" data-id="1">
```

### **HTML du bouton**

```
<button class="js-close-snackbar" data-close-snackbar="true">Bouton</button>
```

<details>
<summary>Exemple de snackbar</summary>

```
<!-- Snackbar main container -->
<div class="snackbar" data-component="Snackbar" data-id="1">
  <!-- Additional required wrapper -->
  <div class="wrapper">
    <!-- Contenu -->
    <div class="snackbar__content">Contenu</div>
    <button class="js-close-snackbar" data-close-snackbar="true">Bouton</button>
  </div>

</div>
```

</details>

<br><br>

## **Paramètres optionnels**

Ces paramètres sont des attributs à assigner à la structure HTML de votre snackbar.

| Attributs           | Description                                                                                                           |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| `data-auto-hide`    | Détermine si la snackbar se cache lors d'un scroll de la page. Elle rapporte une valeur **`true` ou `false`**.        |
| `data-delay`        | Délai **(en millisecondes)** avant que la snackbar apparaisse visuellement sur la page HTML.                          |
| `data-scroll-limit` | Pourcentage de scroll de la page avant que la snackbar ne se cache. Il faut utiliser des **valeurs allant de 0 à 1**. |

<br><br>

### **Exemple de snackbar avec les attributs optionnels**

```
<!-- Snackbar main container -->
<div
    class="snackbar"
    data-component="Snackbar"
    data-auto-hide="true"
    data-delay="2000"
    data-scroll-limit="0.01"
    data-id="1"
>
  <!-- Additional required wrapper -->
  <div class="wrapper">
    <!-- Contenu -->
    <div class="snackbar__content">Contenu</div>
    <button class="js-close-snackbar" data-close-snackbar="true">Bouton</button>
  </div>

</div>
```

<br><br>

# Classes d'état

Il y a quelques classes qui proviennent du script JavaScript de la Snackbar.
<br><br>

## **snackbar-is-hidden**

Ceci est une classe à mettre par défaut sur votre document HTML. Elle permet de cacher ou de faire apparaître la snackbar visuellement.

### **Lorsque la snackbar est cachée.**

```
<html lang="fr" class="snackbar-is-hidden">
```

### **Lorsque la snackbar n'est pas cachée.**

```
<html lang="fr">
```

<br><br>

## **is-scrolling-up / is-scrolling-down**

Ces deux classes définissent comment l'utilisateur scroll sur la page. Elles s'affichent sur la balise HTML. **is-scrolling-up** signifie que l'utilisateur scroll vers le haut, alors **is-scrolling-down** signigie un scroll vers le bas.

### **Lors d'un scroll vers le haut.**

```
<html lang="fr" class="is-scrolling-up">
```

### **Lors d'un scroll vers le bas.**

```
<html lang="fr" class="is-scrolling-down">
```

<br><br>

# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Caroline Forget](http://cforget.dectim.ca/).
