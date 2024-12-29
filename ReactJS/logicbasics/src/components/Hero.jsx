import Universe from "./Universe";

const Hero = ({ heroName, realName, uname }) => {
  return (
    <div>
      <h1>
        Hello my name is {heroName} a.k.a {realName}
      </h1>
    </div>
  );
};

export default Hero;
