export default (number, pattern) => {
  let finalString = ''
  const numberToSpace = String(number)

  let patPointer = 0
  let numberPointer = 0

  while (numberPointer < number.length) {
    const currentDigit = numberToSpace[numberPointer]
    const currentChar = pattern[patPointer]

    if (currentChar === undefined) {
      finalString += currentDigit
      numberPointer ++
    }
    else if (currentChar === 'N') {
      finalString += currentDigit
      numberPointer ++
    }
    else {
      finalString += currentChar
    }
    patPointer ++
  }
  return finalString
}
