
import {React} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import { contactList } from "./arrays";

function ContactsPage() {
    const contacts = contactList()
    return(
        <>
           <body>
                <div> {/** navbar section */}
                    <Navbarpage />
                </div>
                <div className="  text-[#aaabab] md:text-7xl text-5xl font-extrabold flex justify-center items-center md:pt-24 pt-20">
                    <h2>Contact Us</h2>
                </div>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                <div>
                <div className="md:w-[60%] w-[80%] mx-auto bg-[#aaabab] rounded-xl ">
                    <div> 
                        <ul>
                            {contacts.map((contact) =>(
                                <li key={contact.id} className="py-5 text-xl font-semibold hover:text-[#b99a45] ">
                                    <a href={contact.linkToContact}>
                                        <div className="flex gap-2 justify-center items-center">
                                            {contact.icon}
                                            {contact.contactContent}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </body>
        </>
    )
}

export default ContactsPage