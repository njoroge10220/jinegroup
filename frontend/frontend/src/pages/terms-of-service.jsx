
import {React} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import { Terms_of_Service } from "./arrays";

function Terms_of_ServicesPage() {
    const terms = Terms_of_Service()

    return(
        <>
           <body>
                <div> {/** navbar section */}
                    <Navbarpage />
                </div>
                <div className=" w-[80%] mx-auto text-[#aaabab] md:text-7xl text-5xl font-extrabold flex justify-center items-center md:pt-24 pt-24">
                    <h2>Terms of Services</h2>
                </div>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                <div>
                <div className="bg-[#aaabab] w-[80%] mx-auto flex flex-col rounded-lg ">
                        {terms.map((term) => (
                            <div key={term.id} className=" p-3 w-[90%] mx-auto">
                                <h3 className="p-2 font-semibold text-xl w-[80%] mx-auto ">{term.title} </h3>
                                <p className="p-2 font-medium text-xl">{term.content} </p>
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

export default Terms_of_ServicesPage