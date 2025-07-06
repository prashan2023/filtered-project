import ShoesCard from "./Card/ShoesCard";
import Recommanded from "./Recomanded/Recomanded"

const Body =()=>{
    return(
        <div className="py-10 pl-10 w-full">
        <Recommanded />
        <ShoesCard/>
        </div>
    )
}

export default Body;