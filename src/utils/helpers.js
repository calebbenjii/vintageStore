// helpers function

export const featuredProduct = (data) => {
  return data.filter(item => {
    return item.featured === true;
  })
}