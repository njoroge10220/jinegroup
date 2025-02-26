
import {React} from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";


function Privacy_policyPage() {
    return(
        <>
           <body>
                <div>
                    <MultiNavBar pageTitle={'Privacy Policy'} />
                </div>
                <div></div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </body>
        </>
    )
}

export default Privacy_policyPage