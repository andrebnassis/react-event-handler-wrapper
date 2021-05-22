function parseToKebabCase(input){
    const arr = input.split(/(?=[A-Z])/);
    return arr.map(word => word.trim().toLowerCase()).join("-");
}

function parseToPascalCase(input){
    const value = input.trim();
    return value.charAt(0).toUpperCase() + value.slice(1);
}

module.exports = {
    parseToKebabCase,
    parseToPascalCase
}