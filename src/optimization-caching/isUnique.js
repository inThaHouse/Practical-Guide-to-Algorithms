// Breadcrumb method (not official term.)
// Keep track of what you already looped on by caching them and the next time you need to refer back to those values,
// You can do a property look up which is an inexpensive operation.
// This is a good technique to check unique values in a list.

const isListUnique = (list) => {
  const breadCrumbs = {}
  let isUnique = true

  for (let index = 0; index < list.length; index++) {
    if (breadCrumbs[list[index]]) {
      isUnique = false
    } else {
      breadCrumbs[list[index]] = true
    }
  }

  return isUnique
}

console.log(isListUnique([1, 2, 3])) // true
console.log(isListUnique([1, 3, 3])) // false
