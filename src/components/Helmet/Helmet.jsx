const Helmet = (props) => {
  document.title = "BikeBikeBike - " + props.title;
  return <div className="">{props.children}</div>;
};

export default Helmet;
