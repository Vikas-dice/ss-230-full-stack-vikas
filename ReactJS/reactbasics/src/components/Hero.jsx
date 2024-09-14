const Hero = (props) => {
  console.log(props);
  //   props.heroName = "Black Widow";
  return (
    <div>
      <h1>
        Hello My name is {props.heroName} a.k.a {props.realName}
      </h1>
      <img
        src="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Hero;
