

import {React} from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";
import FaqCard from "./faqCard";
import {Terms_of_Service} from './getArrays'

import { CgEditStraight } from "react-icons/cg";

function Terms_of_ServicesPage() {

    const ToSs = Terms_of_Service()

    return(
        <>
           <div>
                <div>
                    <MultiNavBar pageTitle={'Terms of Service'} />
                </div>
                <div className="my-20 w-[80%] mx-auto ">
                    <div className='grid md:grid-cols-2 grid-cols-1 w-[98%] mx-auto py-4 '>
                        <div className=' flex flex-col justify-start' data-aos='fade-right'>
                            <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]'>
                                <CgEditStraight size={25} /> <h3> ToS </h3>
                            </div>
                            <div>
                            <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' > Understanding Our Service Agreement</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                       {ToSs.map((ToS) => (
                        <FaqCard key={ToS.id} question={ToS.title} answer={ToS.content}  />
                       ))}
                    </div>
                </div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </div>
        </>
    )
}

export default Terms_of_ServicesPage