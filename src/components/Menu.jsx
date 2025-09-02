import menu1 from '../assets/menu1.jpg'
import whatshot from '../assets/whatshot.jpg'
import itemTitle from '../assets/itemTitle.png'
import himg1 from '../assets/himg1.jpg'
import himg2 from '../assets/himg2.jpg'
import himg3 from '../assets/himg3.jpeg'
import himg4 from '../assets/himg4.jpg'
import himg5 from '../assets/himg5.jpg'
import footer from '../assets/footer.png'
import footer2 from '../assets/footer2.png'
import menudivide from '../assets/menudivide.png'
import { Link,useLocation } from 'react-router-dom'

let Menu=()=>{

const location = useLocation();

  const brr = [
    {
      img:<img src={himg4} alt="Menu Item 1" />,
      title: <img src={itemTitle} alt="Menu Item 1" />,
      item: "Place holder",
      price: "Place holder $0.00"
    },
    {
      img:<img src={himg1} alt="Menu Item 2" />,
      title: <img src={itemTitle} alt="Menu Item 2" />,
      item: "Place holder",
      price: "Place holder $0.00"
    },
    {
      img:<img src={himg2} alt="Menu Item 3" />,
      title: <img src={itemTitle} alt="Menu Item 3" />,
      item: "Place holder",
      price: "Place holder $0.00"
    },
    {
      img:<img src={himg3} alt="Menu Item 4" />,
      title: <img src={itemTitle} alt="Menu Item 4" />,
      item: "Place holder",
      price: "Place holder $0.00"
    },
    {
      img:<img src={himg4} alt="Menu Item 5" />,
      title: <img src={itemTitle} alt="Menu Item 5" />,
      item: "Place holder",
      price: "Place holder $0.00"
    },
    {
      img:<img src={himg5} alt="Menu Item 6" />,
      title: <img src={itemTitle} alt="Menu Item 6" />,
      item: "Place holder",
      price: "Place holder $0.00"
    },
    {
        img:<img src={himg4} alt="Menu Item 7" />,
        title: <img src={itemTitle} alt="Menu Item 7" />,
        item: "Place holder",
        price: "Place holder $0.00"
    },
    {
        img:<img src={himg3} alt="Menu Item 8" />,
        title: <img src={itemTitle} alt="Menu Item 8" />,
        item: "Place holder",
        price: "Place holder $0.00"
    },
    {
        img:<img src={himg2} alt="Menu Item 9" />,
        title: <img src={itemTitle} alt="Menu Item 9" />,
        item: "Place holder",
        price: "Place holder $0.00"
    }
  ]
    return(
        <>
        <div className='relative z-50'>
        <img src={menu1} alt="check img" className='h-[213px] w-[940px] mt-[-1216px] ml-[290px] relative z-10'  />
        <h1 className='text-[#dade7d] h-[45px] w-[573px] text-[#F9B94B] text-[45px] font-["UltraRegular"] font-black ml-[350px] mt-[-120px] leading-[47px] relative z-20' style={{textShadow: '1px 5px #605012'}}>This is just a place holder.</h1>
        </div>
        <div className=' mt-[65px] ml-[290px]'>
            <img src={whatshot} alt="" className='m relative z-10'/>
        </div>

        <div className='h-[1020px] w-[940px] grid grid-cols-3 ml-[-10px] mt-[-350px] h-[320px] w-[220px] relative  px-45 py-45'>
            {brr.map((item,index) => (
                <div key={index} className='ml-[400px] mt-[-70px] h-[320px] w-[220px] py-15 text-center items-center'>

                    <div className='h-[100px] w-[150px]' alt="ckeckimg" >{item.img}</div>
                    <div className='h-[57px] ml-[40px] mt-[55px] w-[142px]'>{item.title}</div>
                    <p className='h-[30px] text-md text-[#BFCB75] ml-[40px] font-["UltraRegular"] font-bold w-[142px] mt-[-55px]'>{item.item}</p>
                    <p className='h-[20px] text-[13px] ml-[40px] w-[142px]'>{item.price}</p>
                </div>
            ))}
        </div>

           {/* footer */}
                  <div className='h-[155px] mt-[-19vh] w-[940px] ml-[290px] relative '>
                    <img src={menudivide} className='mt-[-2.5vh] pt-[50px] z-40 relative' alt=""/>
                     <ul className='text-[16px] gap-3 align-center flex h-[15px] text-[10px] font-["UltraRegular"] font-bold w-[655px] mt-[50px] ml-[200px]'>
                           <li ><Link className={`${location.pathname === "/" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[51.91px] `} to={"/"}>Home |</Link></li>
                           <li ><Link className={`${location.pathname === "/menu" ? "text-[#BECB73] border-b-3 border-[#e8e7cb]" : "text-[#e0ceab]"} h-[15px] w-[62.84px]`} to={"/menu"}>Menu |</Link></li>
                           <li ><Link className={`${location.pathname === "/locations" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[54.28px]`} to={"/locations"}>Locations |</Link></li>
                           <li ><Link className={`${location.pathname === "/blog" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[92.04px]`} to={"/blog"}>Blog |</Link></li>
                           <li ><Link className={`${location.pathname === "/about" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[84.73px] `} to={"/about"}>About us</Link></li>
                       </ul>
         
                     <img src={footer} alt="check image" className='h-[100px] w-[150px] ml-[20px] mt-[-10px]' />
                     <img src={footer2} alt="check image" className='h-[50px] w-[170px] ml-[750px] mt-[-120px]' />
                     <p className='h-[39px] text-[#b98d6c] mt-[-5px] ml-[200px] text-xs w-[655px]'>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
                 </div>
      </>
    )
}
export default Menu
