// This is a continuation of basicMemoization.js

const times10 = (num) => {
  return num * 10
}

const cacheResult = (cache, value) => {
  cache[value] = times10(value)
}

//move cache inside function
const memoizedClosureTimes10 = () => {
  const cache = {}

  return (n) => {
    if (cache[n]) {
      console.log('already calculated', cache[n])
      cache[n]
    } else {
      console.log('calculating')
      cacheResult(cache, n)
    }

    return cache
  }
}

const memoClosureTimes10 = memoizedClosureTimes10()

try {
  console.log(memoClosureTimes10(9))
  console.log(memoClosureTimes10(9))
} catch (e) {
  console.error(e)
}
