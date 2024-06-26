import { useNavigate } from "react-router-dom";

export function Topbar() {

  const navigate = useNavigate();

  return <div style={{background: "black", color: "white"}}>
    Topbar
    <br/>
    <button onClick={() => {
      navigate("/dashboard");
    }}>dashboard</button>
    <br/>
    <button onClick={() => {
        navigate('/')
    }}>landing</button>
    <br/>
  </div>
}