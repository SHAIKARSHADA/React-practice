import { RecoilRoot,  useRecoilState,  useRecoilValue } from "recoil";
import { networkAtom, totalNotificationSelector } from "./store/atoms/atom2"




export default function App() {
  return(
    <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </>
  )
  
}

export  function MainApp() {
  const  [networkCount,setNetworkCount] = useRecoilState(networkAtom);
  const totalNotificationsCount = useRecoilValue(totalNotificationSelector);

  return(
    <>
      <button>Home</button>
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Me</button>
      <button> totalNotifications {totalNotificationsCount}</button>
    </>
  )
}