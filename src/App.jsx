import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"

const App =()=>{
  return(
    <div >
     <Navbar />
     <div className="flex">
      <Sidebar/>
      <Body/>
     </div>
     
    </div>
  )
}

export default App;