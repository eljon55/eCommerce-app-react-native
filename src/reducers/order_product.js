const productsOrderReducers = (products = [], action) => {
  console.log('ACTION', action)
  switch (action.type) {
    case 'FETCH_PRODUCTS_ORDER_SUCCEEDED': 
      return action.order_products
    default:
      return products
  }
}

export default productsOrderReducers