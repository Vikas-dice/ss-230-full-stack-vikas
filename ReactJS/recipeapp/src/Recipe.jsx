import Styles from "./recipe.module.css";
const Recipe = ({ img, name, cal, ing }) => {
  return (
    <div className={Styles.recipe}>
      <h1>{name}</h1>
      <ul>
        {ing.map((item, idx) => (
          <li key={idx}>{item.text}</li>
        ))}
      </ul>
      <p>{Math.round(+cal)} k/cal</p>
      <img src={img} alt="" className={Styles.image} />
    </div>
  );
};

export default Recipe;
