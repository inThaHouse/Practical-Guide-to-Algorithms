const times10 = (num) => {
  return num * 10
}

const memoize = (cb) => {
  const cache = {}

  return (number) => {
    if (cache[number]) {
      console.log('already calculated', cache[number])
    } else {
      console.log('calculating...')
      cache[number] = cb(number)
    }

    return cache
  }
}

const memoizedTimes10 = memoize(times10)

try {
  console.log(memoizedTimes10(9))
  console.log(memoizedTimes10(9))
} catch (e) {
  console.error(e)
}
