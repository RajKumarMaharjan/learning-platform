import SubHeading from "../../components/Heading/SubHeading";
import LargeSubHeading from "../../components/Heading/LargeSubHeading";
import { GoTriangleRight } from "react-icons/go";

function CustomerCare() {
  return (
    <div className="bg-[#33415C]">
      <div className="relative md:before:content-familyPic before:absolute before:-right-10 before:bottom-0 before:scale-[.6] md:after:content-csc after:absolute after:-left-40 after:top-20 after:scale-[.6]">
        <div className="relative mx-auto text-center sm:flex sm:flex-col py-24 md:w-[40%]">
          <SubHeading title="Join Our New Session" color="warning" />
          <LargeSubHeading title="Call To Enroll Your Child" color="white" />
          <LargeSubHeading title="+256 6425 789" color="white" />
          <div>
            <button
              id="csc"
              className="border-2 border-white mt-9 px-12 py-2 text-white text-[16px] font-[700] hover:text-[#000]"
            >
              <div className="relative z-10 flex items-center gap-2">
                Call Us Now
                <GoTriangleRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCare;
