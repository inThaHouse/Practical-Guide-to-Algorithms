// return sorted list without duplicates

const uniqueSort = (list) => {
  const cache = {}

  const byUniqueItem = (item) => {
    if (!cache[item]) {
      cache[item] = item
      return true
    } else {
      return false
    }
  }

  const uniqueElements = list.filter(byUniqueItem)

  return uniqueElements.sort((a, b) => a - b)
}

console.log(uniqueSort([1, 5, 2, 1]))
console.log(uniqueSort([4, 2, 2, 3, 2, 2, 2]))
