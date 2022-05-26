let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
// 用try...catch的原因是为了防止有的浏览器抛出异常

export default {
  city: defaultCity
}
