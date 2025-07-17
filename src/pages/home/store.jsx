import { create } from 'zustand'
let API = 'http://localhost:3000/muhammad'
export let useTodoStore = create((set) => ({
    users: [],
    get: async () => {
        try {
            let response = await fetch(API)
            let data = await response.json()
            set(() => ({ users: data }))
        } catch (error) {
            console.error(error);
        }
    },
    deleteUser: async (id) => {
        try {
            await fetch(`${API}/${id}`, {
                method: 'DELETE'
            })
            set((state) => ({ users: state.users.filter((e) => e.id != id) }))
        } catch (error) {
            console.error(error);
        }
    },
    addUser: async (newUser) => {
        try {
            await fetch(API, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(newUser)
            })
            set((state) => ({ users: [...state.users, newUser] }))
        } catch (error) {
            console.error(error);
        }
    },
    editUser: async (idx, update) => {
        try {
            await fetch(`${API}/${idx}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(update)
            })
            set((state) => ({
                users: state.users.map((e) => {
                    if (e.id == idx) {
                        return update
                    }
                    return e;
                })
            }))
        } catch (error) {
            console.error(error);
        }
    }
}))