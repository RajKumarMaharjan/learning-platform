import SubHeading from "../../components/Heading/SubHeading";
import LargeSubHeading from "../../components/Heading/LargeSubHeading";
import ClassesChart from "./ClassesChart";
import PageButton from "../../components/Button/PageButton";
import BgHalfCircle from "../../../public/Image/HalfCircle.svg";

function classesLearnAbout() {
  return (
    <div className="relative">
      <div className="mt-24">
        <div className="flex flex-col items-center justify-center text-center mx-auto w-5/6">
          <SubHeading title="Education for everyone" color="lightPurple" />
          <div className="py-2">
            <LargeSubHeading
              title="Learn About Our Work Culture At Devschool"
              color="dark"
            />
          </div>
          <p className="pb-12 pt-4">
            As a word from our heart, we love to dedicate for Kids the valuable
            things in Life. A great education is a must for a solid developments
            in both soul and mind for kids. We go with kids to play, learn, and
            grow better.
          </p>
        </div>
      </div>
      <ClassesChart />
      <div className="mt-20 mb-24 flex justify-center">
        <PageButton btnText="Discover More Project" padding={80} hoverColor="white"/>
      </div>
      <div className="absolute top-36 -right-0 -z-10">
        <img src={BgHalfCircle} alt="bg-half-circle" className="w-full" />
      </div>
    </div>
  );
}

export default classesLearnAbout;
