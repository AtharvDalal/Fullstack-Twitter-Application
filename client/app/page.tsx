import Image from "next/image";
import React from "react";
import { FaEnvelope, FaRegBookmark, FaRegMoneyBillAlt, FaTwitter } from "react-icons/fa";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import FeedCard from "@/components/FeedCard";
import { CiCircleMore } from "react-icons/ci";
import { GoogleLogin} from '@react-oauth/google'


interface TwitterSiderBarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSiderBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <FaHashtag />
    
  },
  {
    title: "Notifications",
    icon: <IoIosNotifications />
    
  },
  {
    title: "Messages",
    icon: <FaEnvelope />

    
  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark />
    
  },
  {
    title: "Twitter Blue",
    icon: <FaRegMoneyBillAlt />

    
  },
  {
    title: "Profile",
    icon: <BiUser />

  },
  {
    title: "More Options",
    icon: <CiCircleMore />

  },
];
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen sm:px-56">
        <div className="col-span-2 sm:col-span-3 pt-1 flex sm:justify-end pr-4 relative">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <FaTwitter />
          </div>
          <div className="mt-2 text-xl font-semibold pr-4">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-4  hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2" key={item.title}>
                 
                  <span className="text-3xl">{item.icon} </span> <span>{item.title}</span>{" "}
                </li>
              ))}
              <div className="mt-5 px-3 ">
              <button className="bg-[#1d9bf0] font-semibold text-sm py-2 px-4  rounded-full w-full ">Tweet</button>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600 h-screen overflow-scroll">
         <FeedCard />
         <FeedCard />
         <FeedCard />
         <FeedCard />
         <FeedCard />
        </div>
        <div className="col-span-3">
          <GoogleLogin onSuccess={(cred)=> console.log(cred)
          } />
        </div>
      </div>
    </div>
  );
}