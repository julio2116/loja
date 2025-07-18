    function formatText(text, splitTitle){
        const wordsTitle = splitTitle ? text.toString().split(' ') :  text.toString();
        if(!Array.isArray(wordsTitle)) return [wordsTitle]
        switch(splitTitle){
            case 'firstword':
                return [wordsTitle[0], wordsTitle.slice(1).join(' ')];
            case 'allwords':
                return wordsTitle
            default:
                throw new Error(`Valor ${splitTitle} inválido, escolha`)
        }
    }

    export {
        formatText
    }