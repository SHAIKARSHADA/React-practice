import { useIsOnline } from "./hooks/useIsOnline"
import { useMouselocation } from "./useMouselocation"

export default function App() {
  
  const value = useIsOnline()
  const mousevalue = useMouselocation();
  return (
    <>
    {value}
    <div>
     {value ? "online, YaY!!!!" : "offline, YaY!!!!!"}
     {"your mouse location is x axis : " + mousevalue.x+ "y axis : " + mousevalue.y}
    </div>
    </>
  )
}
