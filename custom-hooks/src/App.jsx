import { useState, useEffect } from 'react';

export default function App() {

  const [ render, setRender ] = useState(true); 
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    },10000)
  },[])

  return(
    <>
  {render?  <Component/> : <div></div> }
    </>
  )
}

function Component() {
  useEffect(() => {
  console.log("component mounted")
  
  return () => {
     console.log("component unmounted");
  }
  },[render])

  return<div>
  return div from inside my component
</div>
}





// // class based components design used in 2018 ish 
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + `1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// functional based component design 

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }
