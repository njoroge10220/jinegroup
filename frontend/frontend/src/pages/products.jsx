
import {React} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import { Product } from "./arrays";
import Button from "./button";
import { AiFillAndroid } from "react-icons/ai";

function ProductsPage() {

    const products = Product()

    return(
        <>
           <body>
                <div> {/** navbar section */}
                    <Navbarpage />
                </div>
                <div className="  text-[#aaabab] md:text-7xl text-5xl font-extrabold flex justify-center items-center  pt-24">
                    <h2> Our Products</h2>
                </div>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                <div>
                    <div>
                    <div >
                        <ul>
                            {products.map((prod) =>(
                                <li key={prod.id} className="flex justify-center flex-col items-center px-5 py-5 md:w-[60%] w-[80%] mx-auto bg-[#aaabab] rounded-xl ">
                                    <h3 className="font-semibold text-3xl md:py-5 py-1">{prod.product_genre} : {prod.product_title} </h3>
                                    <img className='md:w-[30%] w-[60%]  md:py-5 py-1' src={prod.product_Img} alt={`${prod.product_title} image`} />
                                    <p className="px-2 text-xl my-5">{prod.product_description}  That is coming out very very soon! Subscribe below to be informed once it is out. </p>
                                    <div>
                                        <Button> 
                                            <div className='flex gap-1 justify-center items-center'> Download <AiFillAndroid /></div>
                                        </Button>
                                    </div>
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

export default ProductsPage