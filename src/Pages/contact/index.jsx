import Banner from "../../components/SecBanner/SecBanner";
import ContactForm from "../../components/ContactUsForm/ContactUs";
import LocationMap from "../../components/LocationMap/Map";

function Contact() {
  return (
    <div>
      <div>
        <Banner title="Contact Us" link1="Home" link2="Contact" />
        <div>
          <ContactForm />
        </div>
        <div className="w-full h-[600px]">
          <LocationMap latitude="51.505" longitude="0.09" zoom="13"/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
