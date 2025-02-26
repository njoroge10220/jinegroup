

import {React} from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";

import BlogNewsCard from "./blogNewsCard";
import ai from '../assets/ai.jpg'
import stack from '../assets/stack.jpg'

function Blog_News() {

     const news = [
        {id:1,img:ai, byWho:'Admin',topic:' MiniCommando Game Production Dates', date:'13-Feb-2000',link:'/news',},
        {id:2,img:stack, byWho:'Production',topic:'Maxcareandshare completion Dates', date:'04-Apr-2000',link:'/news',},
        {id:3,img:ai, byWho:'Development',topic:'JineGroup production readiness', date:'16-Apr-2000',link:'/news',},
        {id:4,img:stack, byWho:'Management',topic:'JineStores begining dates', date:'14-Dec-2000',link:'/news',},
      ]

    return(
        <>
           <body>
                <div>
                    <MultiNavBar pageTitle={'Blog & News'} />
                </div>
                <div className=" my-[70px] ">
                <ul className="flex flex-wrap  justify-center gap-1 md:w-[95%] w-full mx-auto ">
                    {news.map((blog) =>(
                    <li className=" md:w-[30%] w-[90%] mx-5 my-6 " key={blog.id}>
                        <BlogNewsCard
                            image={blog.img}
                            date={blog.date}
                            topic={blog.topic}
                            byWho={blog.byWho}
                        />
                    </li>
                    ))}
                </ul>
                </div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </body>
        </>
    )
}

export default Blog_News