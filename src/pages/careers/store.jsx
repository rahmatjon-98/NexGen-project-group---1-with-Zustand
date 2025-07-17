import { create } from "zustand";
import axios from "axios";

let api = "http://localhost:3000/data";

export let useTodoStore = create((set) => ({
  users: [],

  get: async () => {
    try {
      let { data } = await axios.get(api);

      set(() => ({ users: data }));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  },

  delUser: async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      set((state) => ({ users: state.users.filter((e) => e.id != id) }));
    } catch (error) {
      console.error(error);
    }
  },

  addUser: async (newUser) => {
    try {
      let { data } = await axios.post(api, newUser);
      set((state) => ({ users: [...state.users, data] }));
    } catch (error) {
      console.error(error);
    }
  },

  editUser: async (newUser) => {
    try {
      let { data } = await axios.put(`${api}/${newUser.id}`, newUser);
      set((state) => ({
        users: state.users.map((e) => (e.id == newUser.id ? newUser : e)),
      }));
    } catch (error) {
      console.error(error);
    }
  },

  checkStatus: async (e) => {
    try {
      let { data } = await axios.put(`${api}/${e.id}`, {
        ...e,
        status: !e.status,
      });
      set((state) => ({
        users: state.users.map((e) =>
          e.id == e.id ? { ...e, status: !e.status } : e
        ),
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));
