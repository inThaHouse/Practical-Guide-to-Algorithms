const cache = {}

const times10 = (num) => {
  return num * 10
}

const cacheResult = (cache, value) => {
  return (cache[value] = times10(value)) // an example of memoization.
}

const memoTimes10 = (n) => {
  if (cache[n]) {
    console.log('already calculated', cache[n])
    return cache[n]
  } else {
    return cacheResult(cache, n)
  }
}

console.log(memoTimes10(9))
console.log(memoTimes10(9))
