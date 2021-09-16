const cache = {}

const times10 = (num) => {
  return num * 10
}

const addToCache = (cache, value) => {
  cache[value] = times10(value) // an example of memoization.
}

const memoTimes10 = (number) => {
  if (cache[number]) {
    console.log('already calculated', cache[number])
    return cache[number]
  } else {
    return addToCache(cache, number)
  }
}

console.log(memoTimes10(9))
console.log(memoTimes10(9))
