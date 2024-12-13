export const fakeLogin = ({ email, password }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (email && password) {
        resolve({ email, password })
      } else {
        reject({ message: 'Invalid email or password' })
      }
    }, 1000)
  )
