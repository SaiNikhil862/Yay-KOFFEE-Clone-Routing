import home_girl from '../assets/home_girl.jpg'
import whatshot from '../assets/whatshot.jpg'
import himg1 from '../assets/himg1.jpg'
import himg2 from '../assets/himg2.jpg'
import himg3 from '../assets/himg3.jpeg'
import bag from '../assets/bag.jpg'
import beans from '../assets/beans.jpg'
import chocolate from '../assets/chocolate.jpg'
import separator from '../assets/separator.jpg'
import recentblog from '../assets/recentblog.jpg'
import divide1 from '../assets/divide1.jpg'
import divide2 from '../assets/divide2.jpg'
import footer from '../assets/footer.png'
import footer2 from '../assets/footer2.png'
import rightarrow from '../assets/rightarrow.png'
import { Link,useLocation } from 'react-router-dom'

let Home=()=>{

    const location = useLocation();

    const arr=[
        {
            img:<img src={bag} alt="Bag" />,
            title:"Placeholder",
            content:"This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like.",
            readMore:"Read more",
            img1:<img src={rightarrow} alt="Image 1" />
        },
        {
            img:<img src={beans} alt="Beans" />,
            title:"Placeholder",
            content:"This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like.",
            readMore:"Read more",
            img1:<img src={rightarrow} alt="Image 1" />
        },
        {
            img:<img src={chocolate} alt="Chocolate" />,
            title:"Placeholder",
            content:"This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like.",
            readMore:"Read more",
            img1:<img src={rightarrow} alt="Image 1" />
        },
    ]

    return( <>
        <div className='relative z-50'>
            <img src={home_girl} alt="Home Girl" className='h-[394px] w-[941px] mt-[-1216px] ml-[290px] relative z-10' />
            <h1 className='text-[#3E2723] h-[135px] w-[590px] text-[#F9B94B] text-[60px] font-["UltraRegular"] font-black ml-[350px] mt-[-290px] leading-[47px] relative z-20' style={{textShadow: '1px 5px 0px #824622, 2px 2px 0px #b24622'}}>This is just a place <br /> holder. This is just a <br /> place holder.</h1>
            <div className='bg-[#a8d65a70] h-[30px] w-[133px] mt-[-25px] ml-[690px] flex items-center justify-center px-3 border-[#7bb83e] relative z-30 cursor-pointer'>
                <h4 className='text-[#a8d65a70] text-[16px] text-[#f6f1e7] font-["UltraRegular"] font-bold'>Find out why.</h4>
            </div> 
        </div>

        <div className='flex justify-center items-center mt-[130px] ml-[275px] h-[221px] w-[940px] gap-1 relative z-40'>
            <img src={whatshot} alt="checkimg" className='h-[189px] w-[237px]'/>
            <img src={himg1} alt="checkimg" className='h-[208px] w-[220px]'/>
            <img src={himg2} alt="checkimg" className='h-[208px] w-[220px]'/>
            <img src={himg3} alt="checkimg" className='h-[208px] w-[220px]'/>
        </div>

        <img src={separator} alt="check img" className=' mt-[-10px] ml-[290px]' />

        <div className='grid grid-cols-3 bg-[#3C200B] ml-[290px] h-[408px] w-[940px] relative z-40 gap-0 px-36 py-4'>
            {arr.map((item, index)=>
                <div key={index} className='mt-[12px] ml-[-110px] h-[349px] w-[200px] mx-1'>
                    <div className='h-[198.8px] w-[198.8px] border-3 border-[#f7f0e6]'>{item.img}</div> 
                    <h2 className='text-[#899148] h-[26px] w-[151.32px] mt-[5px] text-2xl font-["UltraRegular"] font-bold'>{item.title}</h2>
                    <p className='h-[80px] text-[#b98d6c] mt-[10px] text-xs w-[190px]'>{item.content}</p>
                    <u className='text-[#899148] ml-[17vh] w-[190px] mt-[10px] text-xs'>{item.readMore}</u>
                    <div className='mt-[-2.3vh] ml-[14.7vh]'>  {item.img1}</div>
                </div>
            )}
         <img src={recentblog} alt="check image" className='mt-[-372px] ml-[550px]' />

         <img src={divide1} alt="checkimg" className='mt-[-282px] ml-[333px]' />
         <h1 className='text-[#899148] h-[26px] w-[151.32px] mt-[-270px] ml-[132px] text-xl font-["UltraRegular"] font-bold'>Place holder</h1>
         <h3 className='text-[#CBCA75] h-[26px] w-[151.32px] mt-[-270px] ml-[565px] text-sm font-["UltraRegular"] font-bold'>28 November 2011</h3>
         <p className='h-[80px] text-[#b98d6c] mt-[-250px] ml-[348px] text-xs w-[190px]'>This is just a place holder, so <br />
         you can see what the site would <br />look like. This is just a place <br />
         holder, so you can see what the <br />site would look like.</p>


         <img src={divide2} alt="checkimg" className='mt-[-150px] ml-[116px]' />
            <h1 className='text-[#899148] h-[26px] w-[151.32px] mt-[-150px] ml-[570px] text-xl font-["UltraRegular"] font-bold'>Place holder</h1>
            <h3 className='text-[#CBCA75] h-[26px] w-[151.32px] mt-[-125px] ml-[350px] text-sm font-["UltraRegular"] font-bold'>28 November 2011</h3>
            <p className='h-[80px] text-[#b98d6c] mt-[-105px] ml-[135px] text-xs w-[190px]'>This is just a place holder. <br />This is just a place holder.</p>
        </div>

            {/* footer */}
         <div className='h-[155px] mt-[-3vh] w-[940px] ml-[290px] relative '>

            <ul className='text-[16px] gap-3 align-center flex h-[15px] text-[10px] font-["UltraRegular"] font-bold w-[655px] mt-[50px] ml-[200px]'>
                           <li ><Link className={`${location.pathname === "/" ? "text-[#BECB73] border-b-2 border-[#e8e7cb]" : "text-[#e0ceab]"} h-[15px] w-[51.91px] `} to={"/"}>Home |</Link></li>
                           <li ><Link className={`${location.pathname === "/menu" ? "text-[#BECB73] border-b-2 border-[#e8e7cb]" : "text-[#e0ceab]"} h-[15px] w-[62.84px]`} to={"/menu"}>Menu |</Link></li>
                           <li ><Link className={`${location.pathname === "/locations" ? "text-[#BECB73] border-b-2 border-[#e8e7cb]" : "text-[#e0ceab]"} h-[15px] w-[54.28px]`} to={"/locations"}>Locations |</Link></li>
                           <li ><Link className={`${location.pathname === "/blog" ? "text-[#BECB73] border-b-2 border-[#e8e7cb]" : "text-[#e0ceab]"} h-[15px] w-[92.04px]`} to={"/blog"}>Blog |</Link></li>
                           <li ><Link className={`${location.pathname === "/about" ? "text-[#BECB73] border-b-2 border-[#e8e7cb]" : "text-[#e0ceab]"} h-[15px] w-[84.73px] `} to={"/about"}>About us</Link></li>
                        </ul>

            <img src={footer} alt="check image" className='h-[100px] w-[150px] ml-[20px] mt-[-10px]' />
            <img src={footer2} alt="check image" className='h-[50px] w-[170px] ml-[750px] mt-[-120px]' />
            <p className='h-[39px] text-[#b98d6c] mt-[-5px] ml-[200px] text-xs w-[655px]'>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
        </div>
        </>
    )
}
export default Home