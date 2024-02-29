import Banner from "../../components/SecBanner/SecBanner";
import ContactForm from "../../Layout/ContactUs/ContactUs";
import LocationMap from "../../components/LocationMap/Map";

function Contact() {
  return (
    <div>
      <div>
        <Banner title="Contact Us" link1="Home" link2="Contact" />
        <div>
          <ContactForm />
        </div>
        <div>
          <LocationMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;
