# Composante Form

Cette composante permet d'instancier un formulaire sur un élément HTML.

<br><br>

# Dépendance

_Il n'y a pas de dépendance._

<br><br>

# Comment l'utiliser

## **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Form"** sur l'élément HTML qui contient votre formulaire.

```
<form action="" class="form" autocomplete="off" data-component="Form">
```

<details>
<summary>Exemple complet</summary>

```
<!-- Form container -->
<form action="" class="form" autocomplete="off" data-component="Form">
    <div class="form__body">
        <fieldset class="grid">
             <!-- Inputs -->
        </fieldset>
    </div>
</form>
```

</details>

<br><br>

# Variantes d'input

Voici les différents input que vous pouvez utiliser dans votre formulaire. Il faut les insérer dans la balise **fieldset**.

### **Exemple**

```
        <fieldset class="grid">
             <!-- Inputs -->
             <div class="input"></div>
        </fieldset>
```

<br>

### **Explications des attributs**

| Attributs     | Description                                                                                           |
| :------------ | :---------------------------------------------------------------------------------------------------- |
| `type`        | Type d'input.                                                                                         |
| `placeholder` | Texte temporaire de l'input.                                                                          |
| `required`    | Indique si le champ est obligatoire ou non. À écrire uniquement si l'Input est obligatoire à remplir. |
| `name`        | Nom de l'input.                                                                                       |
| `id`          | ID de l'input.                                                                                        |
| `for`         | Associe un Label à un l'input selon l'attribut ID de ce dernier.                                      |
| `patterns`    | Indique un pattern à respecter pour l'écriture dans le Input.                                         |
| `hidden`      | Cache le choix dans une liste déroulante.                                                             |
| `maxlength`   | Nombre de caractères maximaux dans un Input.                                                          |

<br>

\*\* _Pour les attributs `name`, `id` et `for`, il est recommandé d'avoir le même nom, soit celui de l'`ID`._

<br>

## **INPUT DE TEXTE**

Sert à écrire du texte.

### **Exemple**

```
<div class="input">
    <label class="form__label" for="labelID">Nom pour le label</label>
        <input
            class="input__element"
            type="text"
            name="labelID"
            id="labelID"
            placeholder="Placeholder"
            required
    />
    <label class="form__error" for="labelID">Message d'erreur.</label>
</div>
```

<br>

## **INPUT D'ADRESSE COURRIEL**

Sert à écrire une adresse courriel.

### **Exemple**

```
<div class="input">
    <label class="form__label" for="labelID">Nom pour le label</label>
        <input
            class="input__element"
            type="email"
            name="labelID"
            id="labelID"
            placeholder="Placeholder"
            required
    />
    <label class="form__error" for="labelID">Message d'erreur.</label>
</div>
```

<br>

## **INPUT DE TÉLÉPHONE**

Sert à écrire un numéro de téléphone.

### **Exemple**

```
<div class="input">
    <label class="form__label" for="labelID">Nom pour le label</label>
        <input
            class="input__element"
            type="tel"
            name="labelID"
            id="labelID"
            placeholder="Placeholder"
            patterns="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
            required
    />
    <label class="form__error" for="labelID">Message d'erreur.</label>
</div>
```

<br>

## **INPUT AVEC CHOIX DE SÉLECTION**

Sert à faire une liste déroulante.

### **Exemple**

```
<div class="input select">
    <label class="form__label" for="labelID">Nom pour le label</label>
    <select class="input__element" name="day" id="day" required>
        <option value="" hidden>Placeholder</option>
        <option value="option1">Option 1</option>
        <option value="option">Option 1</option>
        <!-- Autres options -->
    </select>
    <label class="form__error" for="labelID">Message d'erreur.</label>
</div>
```

<br>

## **INPUT À BOUTONS RADIO**

Sert à faire une liste de boutons radio.

### **Exemple**

```
<p>Question</p>
<div class="form__list" data-input-container>
    <div class="input radio">
        <input
            class="input__element"
            type="radio"
            name="inputArray[]"
            id="inputID"
            value="inputValue"
            required
        />
        <label class="form__label" for="inputID">inputValue</label>
    </div>
    <label class="form__error" for="inputArray[]">Message d'erreur.</label>

    <!-- Autres options -->
</div>
```

<br>

## **INPUT POUR COMMENTER**

Sert à écrire un commentaire.

### **Exemple**

```
<div class="input textarea u-grid-fullwidth">
    <label class="form__label" for="inputID">Nom pour le label</label>
    <textarea
        class="input__element"
        name="inputID"
        id="inputID"
        maxlength="nombreMaximumDeCaracteres"
        required
    ></textarea>
    <label class="form__error" for="inputID">Message d'erreur.</label>
</div>
```

<br>

## **INPUT POUR CHECKBOX**

Sert à faire un checkbox.

### **Exemple**

```
<div class="input checkbox">
    <input
        class="input__element"
        type="checkbox"
        name="optin[]"
        id="optin"
        value="true"
    />
    <label class="form__label" for="optin">Option.</label>
</div>
```

<br>

\* Si le champ ne nécessite pas l'attribut **required** et n'a pas besoin d'un **pattern** spécifique, vous pouvez retirer le **label** avec la classe **form\_\_error**.

<br><br>

# Classes d'état

Il y a quelques classes qui proviennent du script JavaScript du Form.

<br>

## **error**

S'ajoute aux éléments HTML de la balise Input lorsque le champ est invalide pour en modifier leur visuel (SCSS). Fait apparaître aussi le message d'erreur associé à l'Input.
Se retire lorsque le champ est valide.

<br><br>

# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Caroline Forget](http://cforget.dectim.ca/).
