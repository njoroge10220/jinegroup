
import {React} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import { Privacy_Policy } from "./arrays";

function Privacy_policyPage() {

    const policies = Privacy_Policy()

    return(
        <>
           <body>
                <div> {/** navbar section */}
                    <Navbarpage />
                </div>
                <div className="  text-[#aaabab] md:text-7xl text-5xl font-extrabold flex justify-center items-center md:pt-24 pt-24">
                    <h2>Privacy Policy</h2>
                </div>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                <div>
                    <div className="bg-[#aaabab] w-[80%] mx-auto flex flex-col rounded-lg ">
                        {policies.map((policy) => (
                            <div key={policy.id} className=" p-3 w-[90%] mx-auto">
                                <h3 className="p-2 font-semibold text-xl w-[80%] mx-auto ">{policy.title} </h3>
                                <p className="p-2 font-medium text-xl">{policy.content} </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </body>
        </>
    )
}

export default Privacy_policyPage