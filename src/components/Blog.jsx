import blog from '../assets/blog.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.png'
import menudivide from '../assets/menudivide.png'
import footer from '../assets/footer.png'
import footer2 from '../assets/footer2.png'
import { Link,useLocation } from 'react-router-dom'




let Blog=()=>{

    const location = useLocation();

    const err=[
        {
            date:"Dec 2011",
            day:"02",
            question:"We Have More Templates for You",
            answer:"This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. Want an easier solution for a Free Website? Head straight to Wix and immediately start customizing your website!",
            img:<img src={blog3} alt="Blog" />,
            last:"Read more"
        },
        {
            date:"Nov 2011",
            day:"30",
            question:"We Have More Templates for You",
            answer:"Wix is an online website builder with a simple drag & drop interface, meaning you do the work online and instantly publish to the web. Nothing to download, nothing to upload. All Wix templates are fully customizable and free to use. Just pick one you like, click Edit, and enter the online editor. Change, add, and remove items as you like.",
            img:<img src={blog3} alt="Blog" />,
            last:"Read more"
        },
        {
            date:"Oct 2011",
            day:"29",
            question:"We Have More Templates for You",
            answer:"Wix also offers a ton of free design elements right inside the editor, like images, icons, animation files, and interactive widgets. Publish your Free Website in minutes!",
            last:"Read more"
        }

    ]

    const frr=[
        {
            que:"Free Website Templates",
            dat:"02 Dec 2011",
            ans:"You can remove any link to our website from this website template, you're free to use this website template without linking back to us.",
            last1:"Read more"
        },
        {
            que:"Free Website Templates",
            dat:"02 Dec 2011",
            ans:"If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.",
            last1:"Read more"
        },
        {
            que:"Free Website Templates",
            dat:"02 Dec 2011",
            ans:"This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like.",
            last1:"Read more"
        }
    ]
    return(
        <>
        <div className='relative z-50'>
                               <img src={blog} alt="check img" className='h-[213px] w-[940px] mt-[-1216px] ml-[290px] relative z-10'  />
                        </div>
                         <div className='ml-[290px]'>
                                    <img src={blog2} alt="" className='m relative z-10'/>
                         </div>
        
        <div className='h-[650px] ml-[550px] mt-[-180px] w-[660px]'>
            {err.map((item,index)=>(
                <div key={index} className='ml-[-20px] h-[204px] w-[460px]'>
                        <h3 className='h-[22px] font-bold text-[10px] mt-[40px] text-[#dc9f29] w-[47px]'>{item.date} </h3>
                        <div className='h-[22px] font-bold w-[42.79px] mt-[-10px] text-[28px] text-[#dc9f29]'>{item.day}</div>
                        <h4 className='h-[33px] font-["UltraRegular"] mt-[-22px] ml-[40px] text-[#858F48] text-[#858f48] font-bold text-2xl w-[375px]'>{item.question}</h4>
                    <p className='h-[100px] text-sm mt-[20px] text-[#D5B084] mt-[10px] w-[460px]'>{item.answer}</p>
                    <u className='h-[29px] text-xs font-bold font-["UltraRegular"] text-[#bcc680] ml-[380px] w-[69.15px]'>{item.last}</u>
                    <p className='h-[22px] mt-[-5px] text-[#D5B084] w-[471px]'>{item.img}</p>
                </div>
            ))}


            <div className='bg-[#F9F6EF] mt-[-680px] ml-[455px] h-[619px] z-40 relative w-[210px] py-4 px-3'>
                {frr.map((item,index)=>(
                    <div key={index} className='h-[173px] w-[210px]'>
                        <h4 className='h-[15.2px] font-["UltraRegular"] text-[#858F48] font-bold text-[16px] w-[186.39px]'>{item.que}</h4>
                        <h3 className='h-[38px] font-["UltraRegular"] font-bold text-[15px] text-[#dc9f29] w-[190px]'>{item.dat} </h3>
                        <p className='h-[90px] text-xs text-[#D5B084] w-[190px]'>{item.ans}</p>
                        <u className='h-[29px] text-xs text-[#bcc680] font-["UltraRegular"] font-bold ml-[120px] w-[69.15px]'>{item.last1}</u>
                    </div>
                ))}
            </div>
        </div>

                                     



          {/* footer */}
                  <div className='h-[155px] mt-[8vh] w-[940px] ml-[290px] relative '>
                    <img src={menudivide} className='mt-[-2.5vh] pt-[50px] z-40 relative' alt=""/>
                     <ul className='text-[16px] gap-3 flex h-[15px] text-[10px] font-["UltraRegular"] font-bold w-[655px] mt-[50px] ml-[200px]'>
                         <li ><Link className={`${location.pathname === "/" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[51.91px] `} to={"/"}>Home |</Link></li>
                           <li ><Link className={`${location.pathname === "/menu" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[62.84px]`} to={"/menu"}>Menu |</Link></li>
                           <li ><Link className={`${location.pathname === "/locations" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[54.28px]`} to={"/locations"}>Locations |</Link></li>
                           <li ><Link className={`${location.pathname === "/blog" ? "text-[#BECB73] border-b-2 border-[#e8e7cb]" : "text-[#e0ceab]"} h-[15px] w-[92.04px]`} to={"/blog"}>Blog |</Link></li>
                           <li ><Link className={`${location.pathname === "/about" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[84.73px] `} to={"/about"}>About us</Link></li>
                        </ul>
         
                     <img src={footer} alt="check image" className='h-[100px] w-[150px] ml-[20px] mt-[-10px]' />
                     <img src={footer2} alt="check image" className='h-[50px] w-[170px] ml-[750px] mt-[-120px]' />
                     <p className='h-[39px] text-[#b98d6c] mt-[-5px] ml-[200px] text-xs w-[655px]'>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
                 </div>
        </>
    )
}
export default Blog
