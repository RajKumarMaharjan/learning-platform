import SubHeading from "../../components/Heading/SubHeading";
import LargeSubHeading from "../../components/Heading/LargeSubHeading";
import { FaPhoneVolume, FaRegClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import Form from "../../components/ContactForm/Form"


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
        <div className="px-[50px] py-[70px] h-[620px] bg-white">
          <SubHeading title="Contact Us" color="lightPurple" />
          <LargeSubHeading title="Keep in Touch" />
          <div>
            <Form/>
          </div>
        </div>
        {/* Contact Address */}
        <div className="bg-white px-[50px] py-[70px] h-[620px]">
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
