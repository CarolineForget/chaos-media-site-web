# Composante Modal

Cette composante permet d'instancier une fenêtre modale à partir d'un template lors d'un _click_ sur un élément HTML.

<br><br>

# Dépendance

Vous avez besoin du script **`Utils.js`** dans le dossier **utils**.

<br><br>

# Comment l'utiliser

## **HTML**

Afin d'utiliser la composante, ajouter le template de la fenêtre modale choisie à la fin de votre **body**.

### **Exemple**

```
    <template id="templateModaleID">
        <div class="modal">
            <div class="modal__scrim"></div>
            <div class="modal__box">
                <div class="modal__content">
                    <!-- Contenu de votre fenetre modale -->
                </div>
                 <button class="modal__close js-close"></button>
            </div>
        </div>
    </template>
</body>
```

Ensuite, ajouter l'attribut **data-component="Modal"** et **data-modal-id="templateModaleID"** sur l'élément HTML qui ouvrira une fenêtre modale lors d'un _click_.

### **Exemple**

```
<div data-component="Modal" data-modal-id="templateModaleID"></div>
```

<br><br>

# Variantes HTML

Voici les variantes préfaites pour les fenêtre modale.

<br>

## **tpl-modal-carousel**

Ce template fut créé pour un _click_ sur un slide de carousel. C'est aussi l'ID du template.

<br>

### **HTML DU TEMPLATE**

À mettre à la fin du **body**.

```
        <template id="tpl-modal-carousel">
            <div class="modal">
                <div class="modal__scrim"></div>
                <div class="modal__box">
                    <div class="modal__content" style="background-image: url({{src}})">
                        <div class="content">
                            <h3>{{title}}</h3>
                        </div>
                    </div>
                    <button class="modal__close js-close">
                        <svg class="icon icon--lg icon--stroke">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </template>
```

<br>

### **HTML POUR L'ÉLÉMENT DATA-COMPONENT**

```
<div
    data-component="Modal"
    data-modal-id="tpl-modal-carousel"
    data-modal-title="titre"
    data-modal-bg="cheminDeVotreImage"
>
    <!-- Contenu de votre élément. -->
</div>
```

<br>

### **EXPLICATIONS DES ATTRIBUTS FACULTATIFS**

| Attributs          | Description                                                                                                   |
| :----------------- | :------------------------------------------------------------------------------------------------------------ |
| `data-modal-title` | Valeur que prendra **{{title}}**. C'est le titre de la fenêtre modale.                                        |
| `data-modal-bg`    | Valeur que prendra **{{src}}**. C'est l'URL de l'image désirée comme background-image pour la _modal\_\_box_. |

<br><br>

## **tpl-modal-show**

Ce template fut créé pour un _click_ sur un élément HTML pour ajouter des explications. C'est aussi l'ID du template.

<br>

### **HTML DU TEMPLATE**

À mettre à la fin du **body**.

```
        <template id="tpl-modal-show">
            <div class="modal">
                <div class="modal__scrim"></div>
                <div class="modal__box">
                    <div class="modal__content" style="background-image: url({{src}})">
                        <div class="content">
                            <h3>{{title}}</h3>
                            <p>{{description}}</p>
                        </div>
                    </div>
                    <button class="modal__close js-close">
                        <svg class="icon icon--lg icon--stroke">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </template>
```

<br>

### **HTML POUR L'ÉLÉMENT DATA-COMPONENT**

```
<div
    data-component="Modal"
    data-modal-id="tpl-modal-show"
    data-modal-title="titre"
    data-modal-description="description"
    data-modal-bg="cheminDeVotreImage"
>
    <!-- Contenu de votre élément. -->
</div>
```

<br>

### **EXPLICATIONS DES ATTRIBUTS FACULTATIFS**

| Attributs                | Description                                                                                                   |
| :----------------------- | :------------------------------------------------------------------------------------------------------------ |
| `data-modal-title`       | Valeur que prendra **{{title}}**. C'est le titre de la fenêtre modale.                                        |
| `data-modal-description` | Valeur que prendra **{{description}}**. C'est la description qu'aura la fenêtre modale.                       |
| `data-modal-bg`          | Valeur que prendra **{{src}}**. C'est l'URL de l'image désirée comme background-image pour la _modal\_\_box_. |

<br><br>

# Classes d'état

Il y a quelques classes qui proviennent du script JavaScript du Modal.

<br>

## **modal-is-active**

S'ajoute au document HTML lors d'un _click_ sur un élément HTML ayant le **data-component="Modal"**. Cela fait apparaître la fenêtre modale. Elle se retire lorsque la fenêtre modale se ferme, soit par un _click_ sur le bouton ayant la classe **js-close**, soit par un _click_ sur l'élément HTML avec la classe **modal\_\_content**. Ce dernier détruit la fenêtre modale du HTML.

<br><br>

# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Caroline Forget](http://cforget.dectim.ca/).
