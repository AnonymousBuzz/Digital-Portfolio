import React from "react";
import Navbar from "../App";
import pic from "../../public/photo.avif"
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";


function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems=[
    {
    id:1,
    text:"Home"
    },

    {
      id:2,
      text:"About"
      },

      {
        id:3,
        text:"Portfolio"
        },

        {
          id:4,
          text:"Experience"
          },

          {
            id:5,
            text:"Contacts"
            }
  ]
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto h-16 px-4 md:px-20 shadow-md fixed top-0 left-0 right-0">
        <div className="flex justify-between item-centre h-16">
            <div className="flex space-x-2">
                <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                <h1 className="font-semibold text-xl cursor-pointer">Ani<span className="text-orange-500 text-2xl">k</span>et
                  <p className="text-sm">Web Developer</p></h1>
            </div> 
            {/* Desktop Navbar */}
            <div>
                <ul className="hidden md:flex space-x-8">
                  { 
                      navItems.map(({id,text}) => (
                        <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>{text}</li>
                      ) )
                  }
                </ul>
                <div onClick={()=> setMenu(!menu)} className="md:hidden">{menu?<AiOutlineMenu size={24}/>:<IoCloseSharp size={24}/>}</div>
            </div>
        </div>
        
        {/* Mobile Navbar */}
        {menu && (
        <div>
            <ul className="md:hidden flex flex-col h-screen item-centre justify-centre space-y-3 text-xl">
            { 
                      navItems.map(({id,text}) => (
                        <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}>{text}</li>
                      ) )
                  }
            </ul>
        </div>
        )}
         </div>
    </>
  );
}

export default Navbar;
