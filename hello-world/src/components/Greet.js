// function Greet() {
//   return <h1>Hello Pramod </h1>;
// }
// export default Greet;

export const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

//export default Greet;
