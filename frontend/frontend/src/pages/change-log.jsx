
import {React} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import { Change_Logs } from "./arrays";

function Change_LogPage() {

    const logs = Change_Logs()

    return(
        <>
           <body>
                <div> {/** navbar section */}
                    <Navbarpage />
                </div>
                <div className="  text-[#aaabab] md:text-7xl text-5xl font-extrabold flex justify-center items-center md:pt-24 pt-24">
                    <h2>Change Logs</h2>
                </div>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                <div>
                <div className="bg-[#aaabab] w-[80%] mx-auto flex flex-col rounded-lg ">
                        {logs.map((log) => (
                            <div key={log.id} className=" p-3 w-[90%] mx-auto">
                                <h3 className="p-2 font-semibold text-xl md:w-[80%] w-full mx-auto ">Version {log.version} - {log.title} </h3>
                                <h5 className="p-2 font-semibold text-xl w-[80%] ">Date: {log.date_published} </h5>
                                <p className="p-2 font-medium text-xl">{log.description} </p>
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

export default Change_LogPage