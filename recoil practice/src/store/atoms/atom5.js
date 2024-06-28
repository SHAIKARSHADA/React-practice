import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";


export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://sm-server.100xdevs.com/todo?id=${id}`)
      return res.data.todo;
    }
  })
})