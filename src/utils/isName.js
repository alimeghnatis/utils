const validate = (name) => {
  const expression = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
  return expression.test(String(name))
}
export default validate

