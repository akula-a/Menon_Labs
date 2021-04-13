import Ingredients from './Ingredients.svg';
import IngredientsList from './ingredient_list.svg'

// creates hash for ingredients to search on the home page
const IngredientsHash = () => {
    var ingredients_hash = Array(0);
    var icons = Ingredients.getElementsByTagName("path");
    var ingredient_names = IngredientsList.getElementsById("d").split(" ");

    for (var i=0; i < icons.length; i++) {
        var new_val = { name: ingredient_names[i], icon: icons[i] };
        ingredients_hash.concat(new_val);
    };

    return ingredients_hash;

}

export default IngredientsHash;