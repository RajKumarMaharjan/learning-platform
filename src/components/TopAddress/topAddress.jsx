import { IoMdMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import SocialMedia from "../SocialMediaIcon/SocialMedia";

function topAddress() {
  return (
    <div>
      <div className="border-b py-4">
        <div className="sm:flex justify-between place-items-center md:w-full sm:w-5/6 sm:mx-auto px-4">
          <div className="sm:flex flex-wrap sm:gap-2 md:gap-4 text-dark font-semibold text-[14px]">
            <p className="flex place-items-center justify-center gap-1 ">
              <IoMdMail className="text-lightPurple text-[1em]" />
              <span className=""> 0devdesign.studio@gmail.com</span>
            </p>
            <p className="flex place-items-center justify-center gap-1">
              <FaHome className="text-lightPurple text-[1em]" />
              <span className="">
                {" "}
                4297 Libby Street, Beverly Hills, California
              </span>
            </p>
          </div>
        <div className="text-lightPurple">
        <SocialMedia hoverTextColor="white"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default topAddress;
