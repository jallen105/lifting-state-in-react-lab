import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ ingredientList, handleClick }) => {

  return <ul>
    { ingredientList.map((ingredient, idx) => (
        <Ingredient ingredient={ingredient} handleClick={handleClick} idx={idx} button={'add'} />
    ))}
  </ul>
};

export default IngredientList;