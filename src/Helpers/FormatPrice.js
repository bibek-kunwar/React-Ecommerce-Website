const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("ne-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 2,
  }).format(price / 100);
};

export default FormatPrice;
