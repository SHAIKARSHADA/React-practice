import { useEffect, useState } from "react";

export function useIsOnline() {
  const [isOnline,setIsOnline] = useState(window.navigator.onLine);

  useEffect(
    () => {
      window.addEventListener("offline",() => {
        setIsOnline(false);
      })
      window.addEventListener("online",() => {
        setIsOnline(true);
    })
})

return isOnline;
}