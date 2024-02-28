import SubHeading from "../Heading/SubHeading";
import LargeSubHeading from "../Heading/LargeSubHeading";
import { FaPhoneVolume, FaRegClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const contactAddress = [
  {
    title: "Address",
    details: "4297 Libby Street, Beverly Hills, California",
    icon: <IoHome />,
  },
  {
    title: "Email",
    details: "0devdesign.studio@gamil.com",
    icon: <IoMdMail />,
  },
  {
    title: "Phone Number:",
    details: "+1 516 231 1313",
    icon: <FaPhoneVolume />,
  },
  {
    title: "Working Time:",
    details: "Mon - Sat: 8am - 17.30pm",
    icon: <FaRegClock />,
  },
];

function ContactUs() {
  return (
    <div className="bg-[#FAFAFB]">
      <div className="grid md:grid-cols-2 gap-8 justify-center items-center p-24">
        {/* Contact Form */}
        <div className="p-[50px] h-[570px] bg-white">
          <SubHeading title="Contact Us" color="lightPurple" />
          <LargeSubHeading title="Keep in Touch" />
          <form className="mt-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-[#CED4D9] rounded pl-2 py-1 mb-6"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-[#CED4D9] rounded pl-2 py-1 mb-6"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="w-full border border-[#CED4D9] rounded pl-2 py-1 mb-6"
            ></textarea>
            <button
              id="centerBtn"
              className="border-2 w-1/2 h-[50px] text-[16px] font-[700] flex justify-center items-center hover:text-white"
            >
              <span className="absolute"> Send Message</span>
            </button>
          </form>
        </div>
        {/* Contact Address */}
        <div className="bg-white p-[50px] h-[570px]">
          <LargeSubHeading title="Address" />
          <p className="py-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p>
          <div>
            {contactAddress.map((data, index) => (
              <div key={index}>
                <div className="flex items-center gap-4 text-[16px] font-[400] py-2">
                  <div>{data.icon}</div>
                  <div className="leading-6">
                    <div className="text-lightPurple">{data.title}</div>
                    <div>{data.details}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
