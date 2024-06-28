import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsSelector } from "./store/atoms/atoms"


function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </>
  )
}


export function MainApp() {
  const networkNotificationsCount = useRecoilValue(networkAtom);
  const jobsNotificationsCount = useRecoilValue(jobsAtom);
  const messagingNotificationsCount = useRecoilValue(messagingAtom);
  const [notificationCount,setNotificationCount] = useRecoilState(notificationsAtom);
  const totalNotificationsCount = useRecoilValue(totalNotificationsSelector)
  return(
    <>
      <button>Home</button>
      <button>My network ({networkNotificationsCount >= 100 ? "99+" : networkNotificationsCount})</button>
      <button>Jobs ({jobsNotificationsCount})</button>
      <button>Messaging ({messagingNotificationsCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button>Me</button>
      <button onClick={() => setNotificationCount(c => c + 1)}>update Notifications</button>
      <button>{totalNotificationsCount}</button>
    </>
  )
} 

export default App
