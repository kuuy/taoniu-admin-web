
export function getToken(key) {
  return window.localStorage.getItem(key)
}

export function setToken(key, token) {
  return window.localStorage.setItem(key, token)
}

export function removeToken() {
  // window.localStorage.setItem('ACCESS_TOKEN', '')
  // window.localStorage.setItem('REFRESH_TOKEN', '')
}
