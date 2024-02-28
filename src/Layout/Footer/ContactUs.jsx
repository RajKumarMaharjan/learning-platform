import GalleryData from "../../data/gallery.json";
import SocialMedia from "../../components/SocialMediaIcon/SocialMedia";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { FaPhoneVolume, FaRegClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";

function ContactUs() {
  const gallery = GalleryData;
  const heading = (text) => {
    return (
      <div className="text-white text-[24px] font-[500] mb-[25px]">
        <h4>{text}</h4>
      </div>
    );
  };
  return (
    <div>
      {/* Contact Us */}
      <div className="bg-[#212529] px-4">
        <div className="grid md:grid-cols-3 text-white pt-24 pb-12 gap-6 md:gap-0">
          <div>
            <h4>{heading("Contact Us")}</h4>
            <ul className="text-[16px] font-[300] pb-8">
              <li className="flex items-center gap-2">
                <FaPhoneVolume />
                 Phone: +1 516 231 1313
              </li>
              <li className="flex items-center gap-2">
                <IoMdMail />
                 Mail: 0devdesign.studio@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <IoHome />
                 Address: 3366 Jefferson Street, NEW HAMPTON, IA
              </li>
              <li className="flex items-center gap-2">
                <FaRegClock />
                 Working day: 9am - 5pm EST, Monday - Friday
              </li>
            </ul>
            <div className="float-start">
            <SocialMedia hoverTextColor="white"/>
            </div>
          </div>
          {/* Information */}
          <div className="w-1/2">
            <h4>{heading("Information")}</h4>
            <div className="flex justify-between font-[300]">
              <ul>
                <li>
                  <Link to="#">- Home</Link>
                </li>
                <li>
                  <Link to="#">- Teachers</Link>
                </li>
                <li>
                  <Link to="#">- About Us</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="#">- Contact</Link>
                </li>
                <li>
                  <Link to="#">- Error</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Gallery */}
          <div>
            <h4>{heading("Our Gallery")}</h4>
            <div className="grid grid-cols-4 gap-x-6 gap-y-4">
              {gallery.map((pic) => (
                <div key={pic.index}>
                  <img
                    src={pic.imgUrl}
                    alt={pic.name}
                    className="w-full h-[86px] object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="text-center text-light text-[14px] font-[300]  py-[25px] border-t border-[#FFAB4A]">
          <span>©2020 Dev - Kindergarten is Product Created by Devdesign.studio</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
