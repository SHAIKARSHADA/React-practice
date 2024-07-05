import { useEffect } from 'react';

export const useInterval = (callback,n) => {

  useEffect(() => {
    const interval = setInterval(callback,n*1000)

  return () => {
    clearInterval(interval);
  }
  
  },[])
}