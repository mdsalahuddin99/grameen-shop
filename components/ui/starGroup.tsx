import { Star } from "lucide-react";

function StarGroup( {count}: {count:number}) {

    const makeArray  = ()=>{
      const array = new Array(count);
      return array.fill(null);

    
    }
    makeArray()

    return ( 
          <div className="flex gap-4 py-1 " >
                 {[1,2,3,4].map((data , index)=>(
                    <div>
                        {data > count?  <Star size={18} /> :  <Star size={18} className="text-primary" />}
                    </div>
                   
                 ))}
                  </div>
     );
}

export default StarGroup ;