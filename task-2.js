function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);

  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  return newArray;
}

// Перевірка
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));