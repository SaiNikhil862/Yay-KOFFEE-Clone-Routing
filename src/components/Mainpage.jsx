import mainbg from '../assets/mainbg.jpg'
import {Link, useLocation} from "react-router-dom"
import mainBgPng from '../assets/mainBgPng.png'
import yayCoffeePng from '../assets/yayCoffeePng.png'
import circle from '../assets/circle.jpg'

let Mainpage = () => {
  const location = useLocation();
  
  return (
   <>
    <section>
                    {/* mainBg */}
      <div className='w-[1520.8px] h-[1399.8px] bg-repeat bg-center bg-top flex items-center justify-center' style={{backgroundImage: `url(${mainbg})`}}>    
                     {/* transparentbg */}
        <div className='h-[1314.4px] w-[960px] bg-repeat p-[10px]' style={{backgroundImage: `url(${mainBgPng})`}}>
                     
                     {/* whitebg to keep content */}
         <div className='h-[1294.4px] w-[940px] bg-[#F5F1E6]'>
          <div>
          <img src={circle} alt="check image" />
          <img src={yayCoffeePng} alt="check image" className='h-[98px] w-[280px] m-[30px] mt-[-203px]' />

              <ul className='text-[#db9e29] text-xl flex gap-13 h-[25.6px] text-xl font-["UltraRegular"] font-bold mt-[-80px] ml-[412px] w-[550px] font-["UltraRegular"]'>
                
                  <li><Link className={`hover:border-b-5 hover:border-[#a2b83c] ${location.pathname === "/" ? "border-b-4 border-[#a2b83c]" : ""}`} to={"/"}>Home</Link></li>
                  <li><Link className={`hover:border-b-5 hover:border-[#a2b83c] ${location.pathname === "/menu" ? "border-b-4 border-[#a2b83c]" : ""}`} to={"/menu"}>Menu</Link></li>
                  <li><Link className={`hover:border-b-5 hover:border-[#a2b83c] ${location.pathname === "/locations" ? "border-b-4 border-[#a2b83c]" : ""}`} to={"/locations"}>Locations</Link></li>
                  <li><Link className={`hover:border-b-5 hover:border-[#a2b83c] ${location.pathname === "/blog" ? "border-b-4 border-[#a2b83c]" : ""}`} to={"/blog"}>Blog</Link></li>
                  <li><Link className={`hover:border-b-5 hover:border-[#a2b83c] ${location.pathname === "/aboutus" ? "border-b-4 border-[#a2b83c]" : ""}`}to={"/about"}>About us</Link></li>
              </ul>
          </div>
         </div>
      </div>
      </div>
    </section>
   </>
  )
}
export default Mainpage
