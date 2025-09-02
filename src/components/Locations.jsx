import locationYay from  '../assets/locationYay.jpg'
import locationYay2 from '../assets/locationYay2.jpg'
import footer from '../assets/footer.png'
import footer2 from '../assets/footer2.png'
import menudivide from '../assets/menudivide.png'
import { Link,useLocation } from 'react-router-dom'


let Locations=()=>{
    const location = useLocation();
    const crr=[
        {
            item:"Yay!KOFFEE",
            about:"This is just a place holder.",
            about1:"This is just a place holder.",
            about2:"This is just a place holder.",
            about3:"This is just a place holder."
        },
        {
            item:"Yay!KOFFEE",
            about:"This is just a place holder.",
            about1:"This is just a place holder.",
            about2:"This is just a place holder.",
            about3:"This is just a place holder."
        },
        {
            item:"Yay!KOFFEE",
            about:"This is just a place holder.",
            about1:"This is just a place holder.",
            about2:"This is just a place holder.",
            about3:"This is just a place holder."
        },
        {
            item:"Yay!KOFFEE",
            about:"This is just a place holder.",
            about1:"This is just a place holder.",
            about2:"This is just a place holder.",
            about3:"This is just a place holder."   
        },
        {
            item:"Yay!KOFFEE",
            about:"This is just a place holder.",
            about1:"This is just a place holder.",
            about2:"This is just a place holder.",
            about3:"This is just a place holder."
        },
        {
            item:"Yay!KOFFEE",
            about:"This is just a place holder.",
            about1:"This is just a place holder.",
            about2:"This is just a place holder.",
            about3:"This is just a place holder."
        },
        {
            item:"Yay!KOFFEE",
            about:"This is just a place holder.",
            about1:"This is just a place holder.",
            about2:"This is just a place holder.",
            about3:"This is just a place holder."
        },
        {
            item:"Yay!KOFFEE",
            about:"This is just a place holder.",
            about1:"This is just a place holder.",
            about2:"This is just a place holder.",
            about3:"This is just a place holder."
        },
        {
            item:"Yay!KOFFEE",
            about:"This is just a place holder.",
            about1:"This is just a place holder.",
            about2:"This is just a place holder.",
            about3:"This is just a place holder."
        },
        {
            item:"Yay!KOFFEE",
            about:"This is just a place holder.",
            about1:"This is just a place holder.",
            about2:"This is just a place holder.",
            about3:"This is just a place holder."
        }

    ]
    return(
        <>
       <div className='relative z-50'>
               <img src={locationYay2} alt="check img" className='h-[213px] w-[940px] mt-[-1216px] ml-[290px] relative z-10'  />
        </div>
         <div className='ml-[290px]'>
                    <img src={locationYay} alt="" className='m relative z-10'/>
         </div>

        <div className='h-[730px] w-[660px] mt-[-135px] ml-[530px] grid grid-cols-2 gap-3'>
         {crr.map((item, index) => (
           <div key={index}>
             <h2 className='h-[20px] font-["UltraRegular"] font-bold w-[330px] text-md text-[#A2B83D]'>{item.item}</h2>
             <p className='h-[20px] w-[330px] text-sm text-[#D5B084]'>{item.about}</p>
             <p className='h-[20px] w-[330px] text-sm text-[#D5B084]'>{item.about1}</p>
             <p className='h-[20px] w-[330px] text-sm text-[#D5B084]'>{item.about2}</p>
             <p className='h-[20px] w-[330px] text-sm text-[#D5B084]'>{item.about3}</p>
           </div>
         ))}
        </div>

        

         {/* footer */}
         <div className='h-[155px] mt-[-4vh] w-[940px] ml-[290px] relative '>
            <img src={menudivide} className='mt-[30px] z-40 relative' alt=""/>  
            <ul className='text-[16px] gap-3 align-center flex h-[15px] text-[10px] font-["UltraRegular"] font-bold w-[655px] mt-[50px] ml-[200px]'>
                           <li ><Link className={`${location.pathname === "/" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[51.91px] `} to={"/"}>Home |</Link></li>
                           <li ><Link className={`${location.pathname === "/menu" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[62.84px]`} to={"/menu"}>Menu |</Link></li>
                           <li ><Link className={`${location.pathname === "/locations" ? "text-[#BECB73] border-b-2 border-[#e8e7cb]" : "text-[#e0ceab]"} h-[15px] w-[54.28px]`} to={"/locations"}>Locations |</Link></li>
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
export default Locations