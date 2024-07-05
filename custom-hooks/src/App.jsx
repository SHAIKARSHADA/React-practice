import { useIsOnline } from "./hooks/useIsOnline"

export default function App() {
  
  const value = useIsOnline()
  
  return (
    <>
    {value}
    <div>
     {value ? "online, YaY!!!!" : "offline, YaY!!!!!"}
    </div>
    </>
  )
}
