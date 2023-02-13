class App {
    constructor() {
        this.$recipesWrapper = document.querySelector('.recipes-wrapper');
                
        this.recipesApi = new RecipeApi('/data/recipes.js');

        // recipes
        this.Recipes = [];
    }

    async fetchRecipes() {
        const recipesData = await this.recipesApi.get();
    
        const Recipes = recipesData.map(recipe => new MoviesFactory(recipe, 'recipeApi'));
        this.AllRecipes = [Recipes];
    }

    async main() {
        await this.fetchRecipes();        

        const Search = new SearchForm(this.AllRecipes);
        Search.render();

        this.AllRecipes.forEach(recipe => {
                const Template = new MovieCard(recipe);
                
                this.$recipesWrapper.appendChild(
                    Template.createRecipeCard()
                );
        });
    }
}

const app = new App();
app.main();
