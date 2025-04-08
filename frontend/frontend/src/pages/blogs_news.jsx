

import {React} from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";

import BlogNewsCard from "./blogNewsCard";
import { Blog_News } from './getArrays'

function Blog_New() {

    const news = Blog_News()     

    return(
        <>
           <div>
                <div>
                    <MultiNavBar pageTitle={'Blog & News'} />
                </div>
                <div className=" my-[100px] ">
                <ul className="flex flex-wrap  justify-center gap-1 md:w-[95%] w-full mx-auto ">
                    {news.map((blog) =>(
                    <li className=" md:w-[30%] w-[90%] mx-5 my-6 " key={blog.id}>
                        <BlogNewsCard
                            image={blog.image}
                            date={blog.date}
                            topic={blog.topic}
                            byWho={blog.by_who}
                            details={blog.details}
                        />
                    </li>
                    ))}
                </ul>
                </div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </div>
        </>
    )
}

export default Blog_New