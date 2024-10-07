import {useState , createContext } from "react"
import Nav from "./components/nav"

export const DataContext=createContext(null)
const App = () => {
  const [data,setdata]=useState("this is your data")

  return (
    <DataContext.Provider value={[data,setdata]}>
      <h1>hii</h1>
      <Nav/>
    </DataContext.Provider>
  )
}

export default App