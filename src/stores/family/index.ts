import { defineStore } from 'pinia'

import { mande } from 'mande'

const api = mande('/api/users')
interface UserInfo {
  name: string
  age: number
}


interface State {
  userList: UserInfo[],
  user: UserInfo | null
}

const useStore = defineStore('family', {
  state: (): State => {
    return {
      userList: [{
        name: 'Tom',
        age: 1
      },
      {
        name: 'Gim',
        age: 10
      },
      {
        name: 'Go',
        age: 12
      }] as UserInfo[],
      user: null as UserInfo | null,
    }
  },
  getters: {
    nameList: (state): string[] => {
      return state.userList.map((res) => res.name)
    }
  },
  actions: {
    async registerUser(login: string, password: string) {
      try {
        this.userList = await api.post({ login, password })

      } catch (error) {

        return error
      }
    },
  }
})

export default useStore
