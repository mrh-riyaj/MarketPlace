const productState = {}

// Set product state
export const setProductState = (name, state) => {
  productState[name] = state
  // console.log('set',productState)
}

// Get product state
export const getProductState = (name) => {
  return productState[name]
}