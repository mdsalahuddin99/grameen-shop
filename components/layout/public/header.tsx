import PublicMainMenu from "@/components/public/mainMenu";
import { MapPin } from "lucide-react";
import Link from "next/link";

function PublicHeader() {
    return ( 
        <>
        <div className="bg-primary py-2">
            <div className="my-container ">
             
               <div className="flex justify-between items-center">
                 <Link className="flex text-white" href={""}>
                   <MapPin />
                   Track Order
                </Link>
                
                <div className="flex gap-3 text-white">
               <a className="border-r-2 border-b-green-600 pr-3" href="tel: 018451279">018451279</a>
               <Link href={"/"} >Login</Link>
               </div>
               </div>
               
            </div>
             
        </div>

        <PublicMainMenu />
        </>
        
     );
}

export default PublicHeader;