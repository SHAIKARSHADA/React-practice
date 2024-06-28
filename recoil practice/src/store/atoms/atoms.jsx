

import { atom, selector } from 'recoil';

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
})

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
})

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
})

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 0,
})

export const totalNotificationsSelector = selector({
  key: "totalNotificationsSelector",
  get: ({get}) => {
      const networkAtomCount = get(networkAtom);
      const jobsNotificationsCount = get(jobsAtom);
      const messagingNotificationsCount = get(messagingAtom);
      const notificationCount = get(notificationsAtom);
      return networkAtomCount + jobsNotificationsCount + messagingNotificationsCount + notificationCount
    }
})