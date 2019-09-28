import items from '../../data/static/items' // import static data

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchItems () {
    return fetch(items, 1000) // wait 1s before returning items
  }
}