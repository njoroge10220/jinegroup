

import {React} from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";


function Change_LogPage() {
    return(
        <>
           <body>
                <div>
                    <MultiNavBar pageTitle={'Change logs'} />
                </div>
                <div></div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </body>
        </>
    )
}

export default Change_LogPage