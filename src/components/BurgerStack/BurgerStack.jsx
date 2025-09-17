import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ingredientList, handleClick}) => {

  return <ul>
    { ingredientList.length > 0? ingredientList.map((ingredient, idx) => (
        <Ingredient ingredient={ingredient} handleClick={handleClick} idx={idx} button={'remove'} />
    )) : <li>No Ingredients</li> }
  </ul>
  
};

export default BurgerStack;