import Counter from "./components/Counter";
import Hero from "./components/Hero";

const App = () => {
  const superHeros = [
    {
      heroName: "Iron Man",
      realName: "Tony Stark",
    },
    {
      heroName: "Captain America",
      realName: "Steve Rogers",
    },
    {
      heroName: "Black Widow",
      realName: "Natasha Romanoff",
    },
    {
      heroName: "ShaktiMan",
      realName: "Gangadhar",
    },
  ];
  return (
    <div>
      <h1>React Basics</h1>
      {superHeros.map((superhero) => (
        <Hero realName={superhero.realName} heroName={superhero.heroName} />
      ))}
      {/* <Counter /> */}
    </div>
  );
};

export default App;
