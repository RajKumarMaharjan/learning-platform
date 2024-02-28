import LargeSubHeading from "../../components/Heading/LargeSubHeading";
import SideDot from "../../assets/Image/sideColorDot.svg";

function Newsletter() {
  return (
    <div className="relative">
      <div className="bg-bgColor">
        <div className="relative flex flex-col justify-center items-center text-center py-24 md:before:content-subscribeLeft before:absolute before:-left-16 before:bottom-7 before:scale-[.6] md:after:content-subscribeRight after:absolute after:-right-16 after:top-0.5 after:scale-[.6]">
          <div>
            <LargeSubHeading title="Subscribe Newsletter" color="white" />
            <p className="text-white">
              Enter your email address to register to our newsletter delivered
              on a regular basis!
            </p>
          </div>
          <form className="w-1/2 pt-[25px]">
            <div className="relative flex justify-center items-center">
              <input
                type="email"
                placeholder="Enter mail"
                className="w-3/4 rounded-3xl pl-8 py-1"
              />
              <button
                className="absolute right-[12%] bg-[#235C50] py-1 rounded-3xl text-white"
                style={{ width: "calc(70px + 5vw)" }}
              >
                subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 -left-10">
        <img src={SideDot} alt="dot" className="w-full" />
      </div>
    </div>
  );
}

export default Newsletter;
