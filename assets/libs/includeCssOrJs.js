/*Author: Adenilson C. S.
 * Version: 0.0.1
 * Data: 17/01/2016
 */
function includeCssOrJS(pathFiles, options) {
    var elemAppend = {//valores defaults
        tagCss: 'head',
        tagJs: 'body'
    };
    new Promise(function (fulfill) {
        document.addEventListener('DOMContentLoaded', fulfill);// promise aguarda o carregamento do DOM
    }).then(function () {
        return extend(elemAppend, options); // para criar um novo objeto que contém nome/valor-padrão devidamente sobrescritos
    }).then(function (settings) {           // pelos pares nome/valor do objeto options
        for (var index in pathFiles['css']) {
            if (pathFiles['css'][index].length === 0 || pathFiles['css'][index].trim() === '') //caso valor seja vasio volta para for
                continue;
            console.log(index);
            var linkCss = document.createElement('link');
            linkCss.type = 'text/css';
            linkCss.rel = 'styleSheet';
            linkCss.href = pathFiles['css'][index];
            document.getElementsByTagName('' + settings.tagCss + '')[0].appendChild(linkCss);
        }
        return settings;
    }).then(function (settings) {
        for (var index in pathFiles['js']) {
            if (pathFiles['js'][index].length === 0 || pathFiles['js'][index].trim() === '')
                continue;
            var linkJs = document.createElement('script');
            linkJs.type = 'text/javascript';
            linkJs.src = pathFiles['js'][index];
            document.getElementsByTagName('' + settings.tagJs + '')[0].appendChild(linkJs);
            console.log(pathFiles['js'][index]);
        }
    });
    var extend = function (elemAppend, options) {
        if (options === undefined)
            return elemAppend;
        console.log(elemAppend);
        for (var propri in elemAppend) {
            elemAppend[propri] = (options[propri] !== undefined ? options[propri] : elemAppend[propri]);
        }
        return elemAppend;
    };

}

