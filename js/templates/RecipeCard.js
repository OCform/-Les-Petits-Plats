class RecipeCard {
    constructor(recipe) {
        this._recipe = recipe;
        
        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('movie-card-wrapper')
    }

    get recipe() {
        return this._recipe;
    }

    

    createRecipeCard() {
        const recipeCard = `
            
        `;
        
        this.$wrapper.innerHTML = recipeCard;
        
        return this.$wrapper;
    }
}
