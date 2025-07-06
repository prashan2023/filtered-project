import { CiStar } from "react-icons/ci";
import { BsBagPlusFill } from "react-icons/bs";

const Card =({shoe})=>{
    const {title,img,reviews,newPrice,prevPrice,star} = shoe;
    return(
        <div className="border-[1px] mr-10 mb-10 p-[10px]  w-[220px]">
            <div className="w-[180px] h-[150px]">
                <img src={img}/>
            </div>
            <div>
                <h2 className="text-lg font-bold pb-3">{title}</h2>
                <div className="flex items-center">
                    <span><CiStar className="bg-yellow-300 mx-1" /></span>
                    <span><CiStar className="bg-yellow-300 mx-1"/></span>
                    <span><CiStar className="bg-yellow-300 mx-1"/></span>
                    <span><CiStar className="bg-yellow-300 mx-1"/></span>
                    <p className="ml-2">{reviews}</p>
                </div>
                <div className="flex justify-between items-center pt-3">
                    <div className="flex items-center mt-2">
                        <del>{prevPrice}</del>
                        <p className="pl-1">{newPrice}</p>
                    </div>
                    <div>
                        <BsBagPlusFill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;