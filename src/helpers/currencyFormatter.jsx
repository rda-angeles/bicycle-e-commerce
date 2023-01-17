const CurrencyFormatter = ({ price }) => {
  const formatPrice = new Intl.NumberFormat().format(price);
  return <>{formatPrice}php</>;
};

export default CurrencyFormatter;
