
import { IoDocumentText } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdInstallDesktop } from "react-icons/md";
import { TbSettingsCog } from "react-icons/tb";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { GiAudioCassette } from "react-icons/gi";
import { AiOutlineAudit } from "react-icons/ai";

const Newmap = () => {
    return ( 
        <div className="mt-32 map-module">
      <div className="text-center">
      <h1 className="text-5xl text-cyan-600">KredX AP Automation <br/> Capabilities</h1>
      </div>

        <div className="main-div flex justify-center items-center pt-20">
        <div className="text-center">
        <IoDocumentText className="text-cyan-400 text-9xl p-5 text-center m-auto"/>
        <h6 className="text-cyan-800 font-semibold text-lg">Invoice Digitization</h6>
        <p className="text-center p-5 text-sm">Automate all formats of invoices recieved 
            across any channel into a centralizied 
            repository in a single format to reduce 
             error & increase team efficency
        </p>
        </div>
        <div className="text-center">
        <HiOutlineClipboardDocumentList className="text-cyan-400 text-9xl p-5 text-center m-auto"/>
        <h6 className="text-cyan-800 font-semibold text-lg">Invoice Processing</h6>
        <p className="text-center p-5 text-sm">Automate all formats of invoices recieved 
            across any channel into a centralizied 
            repository in a single format to reduce 
             error & increase team efficency
        </p>
        </div>
        <div className="text-center">
        <MdInstallDesktop  className="text-cyan-400 text-9xl p-5 text-center m-auto"/>
        <h6 className="text-cyan-800 font-semibold text-lg">centralizied access and collaboration</h6>
        <p className="text-center p-5 text-sm">Automate all formats of invoices recieved 
            across any channel into a centralizied 
            repository in a single format to reduce 
             error & increase team efficency
        </p>
        </div>
        <div className="text-center">
        <TbSettingsCog className="text-cyan-400 text-9xl p-5 text-center m-auto"/>
        <h6 className="text-cyan-800 font-semibold text-lg">Advanced & Quick Customized Workflows</h6>
        <p className="text-center p-5 text-sm">Automate all formats of invoices recieved 
            across any channel into a centralizied 
            repository in a single format to reduce 
             error & increase team efficency
        </p>
        </div>
            </div>
            <div className="main-div flex justify-center items-center pt-20">
        <div className="text-center">
        <LiaFileInvoiceSolid className="text-cyan-400 text-9xl p-5 text-center m-auto"/>
        <h6 className="text-cyan-800 font-semibold text-lg">Invoice Matching</h6>
        <p className="text-center p-5 text-sm">Automate all formats of invoices recieved 
            across any channel into a centralizied 
            repository in a single format to reduce 
             error & increase team efficency
        </p>
        </div>
        <div className="text-center">
        <TbDeviceDesktopStar className="text-cyan-400 text-9xl p-5 text-center m-auto"/>
        <h6 className="text-cyan-800 font-semibold text-lg">Integrated Vendor Management</h6>
        <p className="text-center p-5 text-sm">Automate all formats of invoices recieved 
            across any channel into a centralizied 
            repository in a single format to reduce 
             error & increase team efficency
        </p>
        </div>
        <div className="text-center">
        <GiAudioCassette  className="text-cyan-400 text-9xl p-5 text-center m-auto"/>
        <h6 className="text-cyan-800 font-semibold text-lg">Strengthen treasery & your supply chain</h6>
        <p className="text-center p-5 text-sm">Automate all formats of invoices recieved 
            across any channel into a centralizied 
            repository in a single format to reduce 
             error & increase team efficency
        </p>
        </div>
        <div className="text-center">
        <AiOutlineAudit  className="text-cyan-400 text-9xl p-5 text-center m-auto"/>
        <h6 className="text-cyan-800 font-semibold text-lg">Audit Ready</h6>
        <p className="text-center p-5 text-sm">Automate all formats of invoices recieved 
            across any channel into a centralizied 
            repository in a single format to reduce 
             error & increase team efficency
        </p>
        </div>
            </div>
            <div className="text-center pt-10">
            <button type="button" class="text-white bg-gradient-to-r from-cyan-400 
    via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300
     dark:focus:ring-cyan-800 rounded-lg text-lg px-10
     py-2.5 text-center me-2 mb-2 font-bold">Request Demo</button>
            </div>
        </div>
        
     );
}
 
export default Newmap;