import authService from '@/services/authService'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const user = authService.getUser()
  const isLogged = authService.isLogged()

  const login = async (userName: string, password: string) => {
    return await authService.login(userName, password)
  }

  const logOut = async () => {
    await authService.logOut()
  }
  return {
    user,
    isLogged,
    login,
    logOut,
  }
})
