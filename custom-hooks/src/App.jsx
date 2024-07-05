import { useState } from "react";
import { useIsOnline } from "./hooks/useIsOnline"
import { useInterval } from "./hooks/useInterval";
import { useMouselocation } from "./useMouselocation"


export default function App() {
  
  const value = useIsOnline()
  const mousevalue = useMouselocation();


  const [value1,setValue] = useState(0);

  useInterval(() => {setValue(value1 => value1+1)},1)
  return (
    <>
    {"timer is " + value1}
    {value}
    <div>
     {value ? "online, YaY!!!!" : "offline, YaY!!!!!"}
     {"your mouse location is x axis : " + mousevalue.x+ "y axis : " + mousevalue.y}
    </div>
    </>
  )
}
