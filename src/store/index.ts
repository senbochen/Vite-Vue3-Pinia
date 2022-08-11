import { defineStore } from 'pinia'


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
      // for initially empty lists
      userList: [] as UserInfo[],
      // for data that is not yet loaded
      user: null as UserInfo | null,
    }
  },
})
