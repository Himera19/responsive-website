import type { IUserModel } from '@/models/todo-model'

const StorageKeys = {
  USER: 'user',
  ISLOGGED: 'isLogged',
}
class AuthService {
  login(userName: string, password: string): Promise<boolean> {
    if (userName == 'himera19' && password == '123') {
      const user: IUserModel = {
        id: 1,
        name: 'Yunus Emre',
      }

      localStorage.setItem(StorageKeys.USER, JSON.stringify(user))
      localStorage.setItem(StorageKeys.ISLOGGED, JSON.stringify(true))

      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  }

  logOut(): Promise<boolean> {
    localStorage.removeItem(StorageKeys.USER)
    localStorage.removeItem(StorageKeys.ISLOGGED)
    return Promise.resolve(true)
  }

  getUser(): Promise<IUserModel | null> {
    const user = localStorage.getItem(StorageKeys.USER)
    if (user) {
      return JSON.parse(user)
    } else {
      return Promise.resolve(null)
    }
  }

  isLogged(): boolean {
    return JSON.parse(localStorage.getItem(StorageKeys.ISLOGGED) || 'false')
  }
}

export default new AuthService()
