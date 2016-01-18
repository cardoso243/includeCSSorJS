# includeCSSorJS
Incluir css ou js na pagina com ajuda da Promise

## Valores Defaults:
Nome | valor padrão
:-----:| :-----:
tagCss | head
tagJs  | body

### Como usar

incluir os arquivos dos diretório libs e js na index.* 
```js
<script src="assets/libs/includeCssOrJs.js"></script>
<script src="assets/js/config-include.js"></script>
```
Criar um aquivo js com as seguintes configurações.
```js
 var pathFile = {
    css: {
        0: 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.min.css',
        1: 'http://fonts.googleapis.com/css?family=Open+Sans:700,600,300,400',
        2: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
        3: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
    },
    js: {
       0: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js',
       1: 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.j'
    }
 };
 var elemAppend = {
   tagJs: 'footer' //passando ou valor para tagJs
 };
 includeCssOrJS(pathFile,elemAppend);
```
