import { DataContext } from "../App"
import { useContext } from "react"


const Nav = () => {
 
 const [data,setdata]= useContext(DataContext)

  return (
    <h1>{data}</h1>
  )

}

export default Nav