
import {React} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import { About_us } from "./arrays";

function AboutUsPage() {

    const about_us = About_us()

    return(
        <>
           <body>
                <div> {/** navbar section */}
                    <Navbarpage />
                </div>
                <div className="  text-[#aaabab] md:text-7xl text-5xl font-extrabold flex justify-center items-center md:pt-24 pt-20">
                    <h2>About Us</h2>
                </div>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                <div className="bg-[#aaabab] rounded-lg p-3 flex w-[80%] mx-auto ">
                    {about_us.map((ab_us) => (
                        <div key={ab_us.id}>
                            <div className="p-2 flex flex-col w-[90%] mx-auto ">
                                <h3 className=" font-semibold text-2xl py-2 w-full flex mx-auto">About Us</h3>
                                <p className="text-xl" >{ab_us.company_description} </p>
                            </div>
                            <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                            <div className="p-2 flex flex-col w-[90%] mx-auto ">
                                <h3 className=" font-semibold text-2xl py-2 w-full flex mx-auto">Our Vision</h3>
                                <p className="text-xl" >{ab_us.company_vision} </p>
                            </div>
                            <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                            <div className="p-2 flex flex-col w-[90%] mx-auto ">
                                <h3 className=" font-semibold text-2xl py-2 w-full flex mx-auto">Our Mission</h3>
                                <p className= "text-xl" >{ab_us.company_mission} </p>
                            </div>
                        </div>                       
                    ))}
                </div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </body>
        </>
    )
}

export default AboutUsPage
