function filterArray(numbers, value) {
  const result = [];

  for (const num of numbers) {
    if (num > value) {
      result.push(num);
    }
  }

  return result;
}

// Перевірка
console.log(filterArray([1, 2, 3, 4, 5], 3));
