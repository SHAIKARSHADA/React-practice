import {RecoilRoot,useRecoilValue, useSetRecoilState} from 'recoil';
import {countAtom} from './store/atoms/count';

function App() {
  return(
  <>
    <RecoilRoot>
     <Count/>
    </RecoilRoot>
  </>
  ) 
}

function Count() {  
  return <>
    {console.log("rerender")}
    <CountRenderer />
    <Buttons />
  </>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return (
  <>
    {count}
    <br/>
    <br/>
    <EventCountRenderer/>
  </>
  )
}

function EventCountRenderer() {
  const count = useRecoilValue(countAtom)
  return(
  <>
    {(count % 2 == 0) ? "it is even" : null}
  </>)
} 

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  console.log("hello")
  // we really do not need the count variable here we can do this
  //setCount(c => c + 1)
  // setCount(count+1);
  // setCount(function (count) {
  // count + 1})
  return(<>
  <RecoilRoot>
  <button onClick={() => {setCount(c => c + 1) }}>
    Increase
  </button>
  <button onClick={() => {setCount(c => c + 1) }}>
    Decrease
  </button>
  </RecoilRoot>
  </>)
}
export default App
