import Image from "next/image";
import Link from "next/link";
import ProductSearchForm from './../searchForm';
import { GitCompareArrows, Heart, } from "lucide-react";
import ProductCart from "../ui/productCart";

function PublicMainMenu() {

    return (
        <div>
            <div className="my-container  my-4">
                <div className="flex justify-between">
                    <div>
                        <Link href={"/"} >
                            <Image
                                src={"/logo.svg"}
                                alt="site image"
                                width={150}
                                height={70}
                            />
                        </Link>
                    </div>
                    <ProductSearchForm />
                  <div className="flex gap-x-6  ">
                      <div>
                        <Link className="flex flex-col justify-center items-center gap-y-1" href={"/"} >
                            <GitCompareArrows size={20} />
                            <span className="text-[15px]">compare </span>
                        </Link>
                    </div>
                    <div>
                        <Link className="flex flex-col justify-center items-center gap-y-1" href={"/"} >
                            <Heart size={20} />
                            <span className="text-[15px]">WishList </span>
                        </Link>
                    </div>
                  <ProductCart />
                  </div>
                </div>

            </div>
        </div>
    );
}

export default PublicMainMenu;