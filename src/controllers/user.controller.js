const model = require('../model/user.model')

const get = () => {
  const user = model.get()
  return user
}

module.exports.get = get
