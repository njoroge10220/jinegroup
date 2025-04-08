

import {React} from "react";


import Footer from "./footer";
import MultiNavBar from "./multiNavbar";
import CompletedCard from './completedCard';

import { Completed_projects } from "./getArrays";

import ai from '../assets/ai.jpg'
import stack from '../assets/stack.jpg'


function CompletedProjectPage() {

    const projects = Completed_projects()

    const imagesBig = [ai,stack,ai,stack,]
    

    return(
        <>
            <div>
                <div>
                    <MultiNavBar pageTitle={'Completed Projects'} />
                </div>
                <div className=" my-[100px] ">
                <ul className="flex flex-wrap  justify-center gap-1 md:w-[98%] w-full mx-auto ">
                    {projects.map((proj, index) =>(
                    <li className=" md:w-[30%] w-[90%] mx-5 " key={index}>
                        <CompletedCard 
                        image={proj.past_project_Img}
                        genre={proj.past_project_genre}
                        title={proj.past_project_title}
                        link={proj.past_project_link}
                        />
                    </li>
                    ))}
                </ul>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default CompletedProjectPage