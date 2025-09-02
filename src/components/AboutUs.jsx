import about from "../assets/about.jpg";
import about2 from "../assets/about2.jpg";
import menudivide from "../assets/menudivide.png";
import footer from "../assets/footer.png";
import footer2 from "../assets/footer2.png";
import { Link,useLocation } from 'react-router-dom'

let AboutUs = () => {

  const location = useLocation();

  const drr = [
    {
      title: "We Have Free Templates for Everyone",
      content:
        "Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to.",
    },
    {
      title: "We Have More Templates for You",
      content:
        "Looking for more templates? Just browse through all our Free Website Templates and find what you're looking for. But if you don't find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.",
    },
    {
      title: "Be Part of Our Community",
      content:
        "If you're experiencing issues and concerns about this website template, join the discussion on our forum and meet other people in the community who share the same interests with you.",
    },
    {
      title: "Template Details",
      content:
        "Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to.",
    },
  ];
  return (
    <>
      <div className="relative z-50">
        <img
          src={about}
          alt="check img"
          className="h-[213px] w-[940px] mt-[-1216px] ml-[290px] relative z-10"
        />
        <h1
          className='text-[#dade7d] h-[45px] w-[573px] text-[#F9B94B] text-[45px] font-["UltraRegular"] font-black ml-[350px] mt-[-120px] leading-[47px] relative z-20'
          style={{ textShadow: "1px 5px #605012" }}
        >
          This is just a place holder.
        </h1>
      </div>
      <div className="ml-[290px] mt-[90px]">
        <img src={about2} alt="" className="m relative z-10" />
      </div>

      <div className="h-[650px] ml-[550px] mt-[-180px] w-[660px]">
        {drr.map((item, index) => (
          <div key={index}>
            <h3 className='h-[20px] font-["UltraRegular"] mt-[20px] text-[#858f48] font-bold text-2xl w-[660px]'>
              {item.title}
            </h3>
            <p className="h-[80px] text-sm mt-[20px] text-[#D5B084] w-[660px]">
              {item.content}
            </p>
          </div>
        ))}
      </div>

      {/* footer */}
                  <div className='h-[155px] mt-[8vh] w-[940px] ml-[290px] relative '>
                    <img src={menudivide} className='mt-[-2.5vh] pt-[50px] z-40 relative' alt=""/>
                     <ul className='text-[16px] gap-3 align-center flex h-[15px] text-[10px] font-["UltraRegular"] font-bold w-[655px] mt-[50px] ml-[200px]'>
                           <li ><Link className={`${location.pathname === "/" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[51.91px] `} to={"/"}>Home |</Link></li>
                           <li ><Link className={`${location.pathname === "/menu" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[62.84px] `} to={"/menu"}>Menu |</Link></li>
                           <li ><Link className={`${location.pathname === "/locations" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[54.28px] `} to={"/locations"}>Locations |</Link></li>
                           <li ><Link className={`${location.pathname === "/blog" ? "text-[#BECB73]" : "text-[#e0ceab]"} h-[15px] w-[92.04px] `} to={"/blog"}>Blog |</Link></li>
                           <li ><Link className={`${location.pathname === "/about" ? "text-[#BECB73] border-b-2 border-[#e8e7cb]" : "text-[#e0ceab]"} h-[15px] w-[84.73px] `} to={"/about"}>About us</Link></li>
                       </ul>
         
                     <img src={footer} alt="check image" className='h-[100px] w-[150px] ml-[20px] mt-[-10px]' />
                     <img src={footer2} alt="check image" className='h-[50px] w-[170px] ml-[750px] mt-[-120px]' />
                     <p className='h-[39px] text-[#b98d6c] mt-[-5px] ml-[200px] text-xs w-[655px]'>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
                 </div>
    </>
  );
};
export default AboutUs;
