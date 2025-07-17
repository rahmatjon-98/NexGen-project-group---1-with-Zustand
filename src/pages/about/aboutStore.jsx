let api = "https://6761895446efb3732372116c.mockapi.io/users"

import { create } from "zustand"

export let storeGet = create(set => ({
  users: [],
  get: async () => {
    try {
      let response = await fetch(api)
      let user = await response.json()
      set(() => ({ users: user }))
    } catch (error) {
      console.log(error)
    }
  },

  deleteUser: async id => {
    try {
      await fetch(`${api}/${id}`, {
        method: "DELETE"
      })
      set(state => ({ users: state.users.filter(e => e.id != id) }))
    } catch (error) {
      console.log(error)
    }
  },

  addNewUser: async newUser => {
    try {
      await fetch(api, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser)
      })
      set(state => ({ users: [...state.users, newUser] }))
    } catch (error) {
      console.log(error)
    }
  },

  changeStatus: async user => {
    try {
      await fetch(`${api}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user, status: !user.status })
      })

      set(state => ({
        users: state.users.map(e => {
          if (e.id === user.id) {
            return {
              ...e,
              status: !e.status
            }
          }
          return e
        })
      }))
    } catch (error) {
      console.error(error)
    }
  }
}))