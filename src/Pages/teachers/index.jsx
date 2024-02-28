import Banner from "../../components/SecBanner/SecBanner";
import SubHeading from "../../components/Heading/SubHeading";
import LargeHeading from "../../components/Heading/LargeSubHeading";
import TeacherKidsData from "../../data/teacherKids.json";
import TeacherData from "../../Layout/Teacher/TeacherData";

function Teachers() {
  const kidsData = TeacherKidsData;

  return (
    <div>
      <div>
        <Banner title="Teachers" link1="Home" link2="teachers" />
        {/* Teachers Kids */}
        <div className="px-4">
          <div className="flex flex-col w-4/6 mx-auto text-center pt-24">
            <SubHeading title="Education For Everyone" color="lightPurple" />
            <LargeHeading
              title="Our Desiration On Kid Education"
              color="black"
            />
            <p className="px-4 pt-[12px] leading-[30px]">
              As a word from our heart, we love to dedicate for Kids the
              valuable things in Life. A great education is a must for a solid
              developments in both soul and mind for kids. We go with kids to
              play, learn, and grow better.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 py-24">
            {kidsData.map((data, index) => (
              <div key={index} className="relative">
                <div className="flex justify-center">
                  <img
                    src={data.imgUrl}
                    alt="teacher_kid1"
                    className="w-full"
                    style={{ position: "relative" }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center top-[80%]"
                    style={{
                      background: "linear-gradient(180deg, rgba(51,65,92,0) 10%, #33415c)",
                      position: "absolute",
                    }}
                  >
                    <div className="text-white text-[24px] font-[600] z-10">
                      {data.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Teachers Data */}
      <TeacherData/>
    </div>
  );
}

export default Teachers;
