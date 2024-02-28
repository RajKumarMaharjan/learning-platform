import SecBanner from "../../components/SecBanner/SecBanner";
import LearnAbout from "../../Layout/About/LearnAbout";
import Register from "../../Layout/About/WhyToRegister";
import TeacherData from "../../Layout/Teacher/TeacherData";

function AboutUs() {
  return (
    <div>
      <div>
      <SecBanner title="About Us" link1="Home" link2="about us" />
      <LearnAbout/>
      <div className="my-24">
      <Register/>
      </div>
      <TeacherData/>
      </div>
    </div>

  )
}

export default AboutUs