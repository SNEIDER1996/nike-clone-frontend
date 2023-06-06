export const getDiscountedPricePercentage = (originalPrice, discountedPrice)  => {
  const discount = originalPrice - discountedPrice;
  const discountPercentage = (discount / originalPrice) * 100;
  return discountPercentage.toFixed(2);
}

export const formatearDinero  = (cantidad) => {
  return cantidad.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP'
  })
}