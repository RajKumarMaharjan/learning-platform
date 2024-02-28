import Banner from "../../components/SecBanner/SecBanner";
import EventActivity from "../../Layout/Event/EventActivity";
import ClassesSection from "../../Layout/Classes/ClassesLearnAbout";

function Classes() {
  return (
    <div>
      <div>
      <Banner title="Classes" link1="Home" link2="classes" />
        <EventActivity />
        <ClassesSection/>
      </div>
    </div>
  );
}

export default Classes;
