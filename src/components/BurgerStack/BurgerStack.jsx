const BurgerStack = ({ ingredients, handleClick }) => {
  return <ul>
    { ingredients.map((ingredient) => 
    <li 
    style={{backgroundColor: `${ingredient.color}`}}>
        {ingredient.name}
        <button name="remove" onClick={() => handleClick(event, ingredient)} >X</button>
    </li> )}
  </ul>;
};

export default BurgerStack;