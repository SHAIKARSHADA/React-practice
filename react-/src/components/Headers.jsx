import { memo } from "react"

const Headers = memo(function Headers({title}) {

  return(
    <>
      <div>{title}</div>
    </>
  )

})



export default Headers