import { Search, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StarGroup from "./ui/starGroup";

const searchData = [
    {
        id: "1",
        title: "BREYLEE facial mask hyaluronic acid...",
        image: "https://placehold.co/600x400",
        ratting: 3,
        price: 150
    },
    {
        id: "2",
        title: "BREYLEE facial mask hyaluronic acid...",
        image: "https://placehold.co/600x400",
        ratting: 4,
        price: 20
    },
    {
        id: "3",
        title: "BREYLEE facial mask hyaluronic acid...",
        image: "https://placehold.co/600x400",
        ratting: 2,
        price: 100
    }
]


function ProductSearchForm() {
    return ( 
         <div className="px-6 flex-1">
          <div className="relative">
             <input className="border w-full p-2" type="text" /> 
             <button className="absolute top-1/2 -translate-y-1/2 right-3 :hover-text-primary  ">
                <Search />
             </button>
             <div className="absolute top-full left-0 w-full h-64 overflow-y-scroll border ">
           <div className="p-3 border ">
              <div className="flex gap-4    ">
               <div className="w-24">
                  <Image 
                  src={"https://placehold.co/600x400.png"}
                  alt="product"
                  width={150}
                  height={150}
                  />
               
               </div>

               <div className=" ">
                  <Link  href={"/"} className="font-bold hover:text-primary">Product title</Link>
                    <StarGroup count={3} />
                   <p  className="text-primary font-bold">$ 2012</p>
               </div>
             </div>
           </div>
             
             </div>
          </div>

         </div> 
     );
}

export default ProductSearchForm;