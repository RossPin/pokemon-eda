import request from 'superagent'

const rootUrl = '/api/pokemon'

export function getTypes () {
  return request.get(rootUrl + '/types')
    .then(res => {
      return res.body.types
    })
}

export function getByType (type) {
  return request.get(rootUrl + '/types/'+type)
    .then(res => {
      return res.body
    })
}
