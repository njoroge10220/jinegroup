

import {React} from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";


function Report_IncidencePage() {
    return(
        <>
           <body>
                <div>
                    <MultiNavBar pageTitle={'Report Incident'} />
                </div>
                <div></div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </body>
        </>
    )
}

export default Report_IncidencePage