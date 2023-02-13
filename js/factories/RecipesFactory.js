class RecipesFactory {
    constructor(data, type) {    
        if (type === 'recipeApi') {
            return new Recipe(data);
        } else {
            throw new Error('Unknown type format');
        }
    }
}
