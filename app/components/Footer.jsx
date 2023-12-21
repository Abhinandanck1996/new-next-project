import logo from '../assets/new.png';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaGoogleDrive } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";



const Footer = () => {
    return ( 
        <div className="main-footer bg-blue-950 flex justify-around items-center">
            <div className="foot-main">
           <a href="/"> <Image src={logo} /></a>
            </div>
            <div className="flex justify-evenly items-center p-10">
           <div className="p-2">
           <PiInstagramLogoFill className="text-gray-400 text-3xl"/>
           </div>
           <div className="p-2">
           <FaFacebookF className="text-gray-400 text-3xl"/>
           </div>
          <div className="p-2">
          <FaGoogleDrive className="text-gray-400 text-3xl"/>
          </div>
            <div className="p-2">
            <FaTwitter className="text-gray-400 text-3xl"/>
            </div>
           <div className="p-2">
           <FaXTwitter className="text-gray-400 text-3xl"/>
           </div>
           <div className="p-2">
           <IoLogoYoutube className="text-gray-400 text-3xl"/>
           </div>
            </div>
        </div>
     );
}
 
export default Footer;