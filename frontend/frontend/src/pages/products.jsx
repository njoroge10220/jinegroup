
import {React} from "react";


import Footer from "./footer";
import MultiNavBar from "./multiNavbar";
import ServicePageCard from "./servicePageCard";

import { Product } from "./getArrays";

import ai from '../assets/ai.jpg'
import stack from '../assets/stack.jpg'


function ProductsPage() {

    const products = Product()

    const imagesBig = [ai,stack,ai,stack,]
    

    return(
        <>
            <body>
                <div>
                    <MultiNavBar pageTitle={'IT Products'} />
                </div>
                <div className=" my-[100px] ">
                <ul className="flex flex-wrap  justify-center gap-1 md:w-[95%] w-full mx-auto ">
                    {products.map((prod, index) =>(
                    <li className=" md:w-[30%] w-[90%] mx-5 " key={index}>
                        <ServicePageCard key={index}
                        imageBig={imagesBig[index]}
                        imageSmall={prod.product_Img}
                        title={prod.product_title}
                        content={prod.product_short_description}
                        link={`product-details/${prod.id}`}
                        />
                    </li>
                    ))}
                </ul>
                </div>
                <footer>
                    <Footer />
                </footer>
            </body>
        </>
    )
}

export default ProductsPage