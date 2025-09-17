const IngredientList = ({ availableIngredients, handleClick }) => {
  return <ul>
    { availableIngredients.map((ingredient, idx) => 
    <li
    key={idx} 
    style={{backgroundColor: `${ingredient.color}`}}>
        {ingredient.name}
        <button name="add" onClick={() => handleClick(event, ingredient)}>+</button>
    </li> )}
    </ul>;
};

export default IngredientList;