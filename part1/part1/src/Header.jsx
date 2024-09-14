const Header = (props) => {
  // const course = "Half Stack application development";
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
export default Header;
