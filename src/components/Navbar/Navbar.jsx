import { CiHeart  } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { AiOutlineUserAdd } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className=" border-black border-b-[1px] w-full"> 
     <div className="flex justify-between mt-10 ml-64 ">
       <div>
        <input 
         className="border-black border-[1px] mb-5 px-4 py-2"
         type="text"
         placeholder="Enter the search shoes"
        />
       </div>
       <div>
          <ul className="flex mr-30">
            <li className="px-5">
              <CiHeart className="size-10"/>
            </li>
            <li className="px-5">
              <PiShoppingCartSimpleThin className="size-10"/>
            </li>
            <li className="px-5">
              <AiOutlineUserAdd className="size-10 "/>
            </li>
       </ul>
       </div>
     </div>
    </div>
  )
}
export default Navbar;


