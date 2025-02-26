
import {React} from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";


function FAQsPage() {
    return(
        <>
           <body>
                <div>
                    <MultiNavBar pageTitle={'Frequently Asked Questions'} />
                </div>
                <div></div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </body>
        </>
    )
}

export default FAQsPage