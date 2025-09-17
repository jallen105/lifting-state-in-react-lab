const Ingredient = ({ingredient, handleClick, idx, button }) => {

  return <li
    key={idx}
    id={idx}
    style={{backgroundColor: `${ingredient.color}`}}>
        {ingredient.name}
        <button name={button} onClick={() => handleClick(event, ingredient)}>{button === 'remove' ? 'X' : '+'}</button>
    </li>

};

export default Ingredient;