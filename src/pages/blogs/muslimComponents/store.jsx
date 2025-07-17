import { create } from "zustand";
import axios from "axios";

const api = "http://localhost:3000/data";

export const useToDoAsyncStore = create((set) => ({
  data: [],
  get: async () => {
    try {
      let { data } = await axios.get(api);
      set(() => ({ data: data }));
    } catch (error) {
      console.error(error);
    }
  },

  deleteUser: async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      set((state) => ({ data: state.data.filter((e) => e.id != id) }));
    } catch (error) {
      console.error(error);
    }
  },

  addNewUser: async (newUser) => {
    try {
      await axios.post(api, newUser);
      set(() => ({ data: [...data, newUser] }));
    } catch (error) {
      console.error(error);
    }
  },

  editUser: async (idx, updated) => {
    try {
      await axios.put(`${api}/${idx}`, {
        img: updated.img,
        name: updated.name,
        description: updated.description,
        status: updated.status,
      });
      set((state) => ({
        data: state.data.map((e) => {
          if (e.id === idx) {
            return {
              ...e,
              img: e.img,
              name: e.name,
              description: e.description,
              status: e.status == "active" ? true : false,
            };
          }
          return e;
        }),
      }));
    } catch (error) {
      console.error(error);
    }
  },

  changeStatus: async (e) => {
    try {
      await axios.put(`${api}/${e.id}`, {
        ...e,
        status: !e.status,
      });
      set((state) => ({
        data: state.data.map((el) => {
          if (el.id == e.id) {
            return {
              ...el,
              status: !el.status,
            };
          }
          return el;
        }),
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));
