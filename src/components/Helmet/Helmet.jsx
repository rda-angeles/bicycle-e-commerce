const Helmet = (props) => {
  document.title = "BikeBikeBike - " + props.title;
  return <div className="w-screen">{props.children}</div>;
};

export default Helmet;
