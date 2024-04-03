import React from "react";
import Image from "next/image";
import { FiMessageCircle, FiUpload } from "react-icons/fi";
import { FaRegHeart, FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 ">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/77956535?v=4"
            alt="user"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5>Atharv Dalal</h5>

          <p>
            {" "}
            pass data down through a component tree without having to pass propsdown through every level
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 W-[90%] ">
            <div>
              <FiMessageCircle />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <FiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
