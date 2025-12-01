import { ShoppingCart } from "lucide-react";
import Link from "next/link";

function ProductCart() {
    return ( 
           <div>
                        <Link className="flex flex-col justify-center items-center gap-y-1" href={"/"} >
                            <ShoppingCart  size={20} />
                            <span className="text-[15px]">Cart </span>
                        </Link>
                    </div>
     );
}

export default ProductCart;