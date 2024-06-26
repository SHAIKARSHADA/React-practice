export function Topbar() {
  return <div style={{background: "black", color: "white"}}>
    Topbar
    <br/>
    <button onClick={() => {
      window.location.href = "/dashboard";
    }}>dashboard</button>
    <br/>
    <button onClick={() => {
      window.location.href = "/";
    }}>landing</button>
    <br/>
  </div>
}