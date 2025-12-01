import { ReactNode } from "react";
import PublicFooter from "./footer";
import PublicHeader from "./header";

function PublicMainLayout({children} : {children: ReactNode}) {
    return ( 
       <div className="flex flex-col min-h-screen">
       <PublicHeader />
            <div className="flex-1">
                {children}
            </div>
       <PublicFooter/>
  
       </div>
     );
}

export default PublicMainLayout;