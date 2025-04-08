
import {React} from "react";

import { CgEditStraight } from "react-icons/cg";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";
import FaqCard from "./faqCard";
import {Privacy_Policy} from './getArrays'


function Privacy_policyPage() {

    const PrivacyPolicy = Privacy_Policy()

    return(
        <>
           <div>
                <div>
                    <MultiNavBar pageTitle={'Privacy Policy'} />
                </div>
                <div className="my-20 w-[80%] mx-auto ">
                    <div className='grid md:grid-cols-2 grid-cols-1 w-[98%] mx-auto py-4 '>
                        <div className=' flex flex-col justify-start' data-aos='fade-right'>
                            <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]'>
                                <CgEditStraight size={25} /> <h3> Privacy Policy </h3>
                            </div>
                            <div>
                            <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' > Our Commitment to Your Privacy </h1>
                            </div>
                        </div>
                    </div>
                    <div>
                       {PrivacyPolicy.map((policy) => (
                        <FaqCard key={policy.id} question={policy.title} answer={policy.content}  />
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

export default Privacy_policyPage