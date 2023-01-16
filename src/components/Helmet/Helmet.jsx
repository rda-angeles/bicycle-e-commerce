const Helmet = (props) => {
  document.title = "Pedal Deck - " + props.title;
  return <div className="">{props.children}</div>;
};

export default Helmet;
