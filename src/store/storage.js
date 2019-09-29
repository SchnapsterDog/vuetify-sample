import Cookies from 'js-cookie'

export default  {
  getItem: key => Cookies.get(key),
  setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: false }),
  removeItem: key => Cookies.remove(key)
}