function toCamelCase(text) {
    let array = text.split(" ");
    let newArray = array.map((word) => {
        const newWord = word[0].toUpperCase() + word.slice(1);
        return newWord;
    });
    return newArray.join(" ");
}

function formatText(text, letterCase) {
    switch (letterCase) {
        case "uppercase":
            return text.toUpperCase();
        case "lowercase":
            return text.toLowerCase();
        case "camelcase":
            return toCamelCase(text);
        default:
            throw new Error(
                `Opção ${letterCase}, inválida, utilize uma das opções: 'uppercase, lowercase, Pascalcase'`
            );
    }
}
export {
    formatText
}