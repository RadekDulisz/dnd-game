const api = {
  get (url: string, body = {}) {
    const options = createOptions('GET', body)
    return fetch(createUrl(url), options).then(res => res.json())
  },
  post(url: string, body = {}) {
    const options = createOptions('POST', body)
    return fetch(createUrl(url), options).then(res => res.json())
  },
  put(url: string, body = {}) {
    const options = createOptions('PUT', body)
    return fetch(createUrl(url), options).then(res => res.json())
  },
  delete(url: string, body = {}) {
    const options = createOptions('DELETE', body)
    return fetch(createUrl(url), options).then(res => res.json())
  },
}

function createOptions(method: string, body: any) {
  const common = {
    method,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    },
  }

  switch (method) {
    case 'GET':
      return common
    default:
      return { ...common, body: JSON.stringify(body) }
  }
}

function createUrl (path: string) {
  return `${import.meta.env.VITE_API_URL}${path}`
}

export default api

export function getCharacters () {
  return api.get('/api/characters')
}
