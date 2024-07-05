import { useEffect, useState } from 'react';

export const useMouselocation = () => {

  const [ position, setPosition ] = useState({x: 0,y: 0});

  const mouseHandle = (e) => {
    setPosition({x: e.clientX, y:e.clientY})
  }

 useEffect(() => {
  window.addEventListener("mousemove",mouseHandle);

  return () => {
    window.removeEventListener("mousemove",mouseHandle);
  }
 },[])

  return position;
}