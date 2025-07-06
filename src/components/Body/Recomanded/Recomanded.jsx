const Recommanded =()=>{
    return(
        <div >
           <h2 className="text-xl font-semibold pb-5">Recommanded</h2>
           <div className="flex mb-20">
             <div>
               <button className="border-[1px] px-2 py-1 mr-5 hover:bg-amber-50 cursor-pointer">
                All products
               </button>
             </div>
             <div>
               <button className="border-[1px] px-2 py-1 mr-5 hover:bg-amber-50 cursor-pointer">
                Nike
               </button>
             </div>
             <div>
               <button className="border-[1px] px-2 py-1 mr-5 hover:bg-amber-50 cursor-pointer">
                Addidas
               </button>
             </div>
             <div>
               <button className="border-[1px] px-2 py-1 mr-5 hover:bg-amber-50 cursor-pointer">
                Puma
               </button>
             </div>
             <div>
               <button className="border-[1px] px-2 py-1 mr-5 hover:bg-amber-50 cursor-pointer">
                Vans
               </button>
             </div>
           </div>      
        </div>
    )
}

export default Recommanded;