

import {React} from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";


function Terms_of_ServicesPage() {
    return(
        <>
           <body>
                <div>
                    <MultiNavBar pageTitle={'Terms of Service'} />
                </div>
                <div></div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </body>
        </>
    )
}

export default Terms_of_ServicesPage