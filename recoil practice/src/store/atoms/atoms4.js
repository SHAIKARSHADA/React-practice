import axios from "axios";
import { atomFamily, selector } from "recoil";


export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selector({
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://sun-server.100xdevs.com/todo?id=${id}`)
      return res.data.todo;
    }
  })
})