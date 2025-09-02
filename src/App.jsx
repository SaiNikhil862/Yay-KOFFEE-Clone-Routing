import { BrowserRouter,Routes,Route } from "react-router-dom"
import Mainpage from "./components/Mainpage"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Locations from "./components/Locations"
import Blog from "./components/Blog"
import AboutUs from "./components/AboutUs"

let App=()=>{
  return (
    <>
      <BrowserRouter>
       <Mainpage />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/menu" element={<Menu/>} />
         <Route path="/locations" element={<Locations />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/about" element={<AboutUs />} />
       </Routes>
    </BrowserRouter>
  </>
  )
}
export default App
