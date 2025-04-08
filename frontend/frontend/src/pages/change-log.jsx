

import {React} from "react";

import { CgEditStraight } from "react-icons/cg";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";
import ChangeLogCard from './ChangeLogCard'

import {Change_Logs} from './getArrays'

function Change_LogPage() {

    const ChangeLogs = Change_Logs()

    return(
        <>
            <div>
                <div>
                    <MultiNavBar pageTitle={'Change logs'} />
                </div>
                <div className="my-20 w-[80%] mx-auto ">
                    <div className='grid md:grid-cols-2 grid-cols-1 w-[98%] mx-auto py-4 '>
                        <div className=' flex flex-col justify-start' data-aos='fade-right'>
                            <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]'>
                                <CgEditStraight size={25} /> <h3> Change Logs </h3>
                            </div>
                            <div>
                            <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' > Recent Updates and Changes </h1>
                            </div>
                        </div>
                    </div>
                    <div>
                       {ChangeLogs.map((ChangeLog) => (
                        <ChangeLogCard key={ChangeLog.id} question={ChangeLog.title} answer={ChangeLog.description} type={ChangeLog.change_type} version={ChangeLog.version}  />
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

export default Change_LogPage