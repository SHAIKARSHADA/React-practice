import { atom, selector } from "recoil";
import axios from "axios";


export const networkAtom = atom({
  key: "networkAtom",
  default : selector({
    key: "networkAtomDefault",
    get: async () => {
      await new Promise(r => setTimeout(r, 5000))
      const res = await axios.get("https://sum-server.100xdevs.com/notifications")
      return res.data
    }
  })
})

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({get}) => {
    const allNotifications = get(networkAtom);
    return allNotifications.network + 
    allNotifications.jobs +
    allNotifications.messaging +
    allNotifications.notifications 
  }
})