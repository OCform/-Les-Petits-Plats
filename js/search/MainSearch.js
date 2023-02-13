class Search {
    constructor(Recipes) {
        this.Recipes = Recipes;
    }

    search(query) {
        return this.filterRecipes(query);
    }
}


class RecipeTitleSearch extends Search {
    constructor(Recipes) {
        super(Recipes);
    }

    filterRecipes(query) {
        return this.Movies.filter(Recipe =>
            Recipe.title.toLowerCase().includes(query.toLowerCase())
        );
    }
}


class IngredientNameSearch extends Search {
    constructor(Recipes) {
        super(Recipes);
    }

    filterMovies(query) {
        return this.Movies.filter(Movie =>
            Movie.actor.toLowerCase().includes(query.toLowerCase())
        )
    }
}