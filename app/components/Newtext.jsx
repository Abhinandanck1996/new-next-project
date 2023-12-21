import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";



const Newtext = () => {
    return ( 
        <div className="pt-20 text-module pb-20">
        <div className="text-center">
        <h1 className="text-5xl text-cyan-600 font-bold">The KredX CMS Advantage</h1>
        </div>
        <div className="text-main pt-10 flex">
            <div className="bg-gradient-to-r from-blue-900 to-cyan-700 rounded-l-lg">
                <h6  className="flex justify-items-start pl-3 pt-7 pb-5 text-white">Increase bottom line by reducing costs and increasing Efficiency
                 <FaArrowRight className="text-white mt-1 mr-5 text-xl"/></h6>
            </div>
            <div className=" bg-cyan-700 rounded-tr-lg">
                <h6  className="flex justify-items-start pl-3 pt-7 pb-5 text-white pr-3"> 
                <IoIosArrowDropright className="mt-1 ml-5 mr-5 text-white text-xl"/>
                Increase bottom line by reducing costs and increasing Efficiency
                 </h6>
            </div>

        </div>
        <div className="text-main flex">
            <div className="">
                <h6  className="flex justify-items-start pl-3 pt-7 pb-5">Increase bottom line by reducing costs and increasing Efficiency
                 <FaArrowRight className=" mt-1 mr-5 text-xl text-gray-600"/></h6>
            </div>
            <div className=" bg-cyan-700">
                <h6  className="flex justify-items-start pl-3 pt-7 pb-5 text-white pr-3"> 
                <IoIosArrowDropright className="mt-1 ml-5 mr-5  text-xl text-white"/>
                Increase bottom line by reducing costs and increasing Efficiency
                 </h6>
            </div>

        </div>
        <div className="text-main flex">
            <div className="">
                <h6  className="flex justify-items-start pl-3 pt-7 pb-5">Increase bottom line by reducing costs and increasing Efficiency
                 <FaArrowRight className=" mt-1 mr-5 text-xl text-gray-600"/></h6>
            </div>
            <div className=" bg-cyan-700 rounded-br-xl">
                <h6  className="flex justify-items-start pl-3 pt-7 pb-5 text-white pr-3"> 
                <IoIosArrowDropright className="mt-1 ml-5 mr-5  text-xl text-white"/>
                Increase bottom line by reducing costs and increasing Efficiency
                 </h6>
            </div>

        </div>
        
        
        </div>
     );
}
 
export default Newtext;