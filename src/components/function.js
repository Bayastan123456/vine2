export const calcTotalPrice = (products) => {
  return products.reduce((acc, curr) => {
    return (acc += curr.subPrice);
  }, 0);
};
export const calcSubPrice = (product) => +product.count * product.item.price;
