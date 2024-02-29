import { useState } from "react";
import TeacherData from "../../data/teacher.json";
import SubHeading from "../../components/Heading/SubHeading";
import LargeSubHeading from "../../components/Heading/LargeSubHeading";
import SocialMedia from "../../components/SocialMediaIcon/SocialMedia";
import QualifiedTeacher from "../../components/QualifiedTeacher/QualifiedTeacherLink";

function TeacherChart() {
  const data = TeacherData;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center w-4/6 mx-auto px-4">
        <h2>
          <SubHeading title="Together We Can Create" color="lightPurple" />
        </h2>
        <h3>
          <LargeSubHeading title="Who Stand By Your Kids Always" color="dark" />
        </h3>
        <p className="pt-4 pb-16">
          While the unit economics were a driving factor, the company says its
          acquisition of lidar company Blackmore and the integration of that
          tech in its self-driving stack has made the shift to trucks possible.
          Aurora has said its FirstLight.
        </p>
      </div>
      {/* Teacher-Chart */}
      <div className="grid md:grid-cols-4 gap-8 px-4">
        {data.map((data) => (
          <div key={data.id}>
            <div className="relative overflow-hidden">
              <img
                src={data.imgUrl}
                alt={data.name}
                className="xs:w-full md:w-full sm:w-4/6 mx-auto rounded-lg hover:scale-110 object-cover transition duration-300"
              />
              <div className="absolute top-[54%] w-full px-24 md:px-0 flex justify-center items-center">
                <div
                  onMouseEnter={() => setIsHovered(data.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="bg-[#fff] rounded w-[65%] md:py-1 py-6 flex flex-col justify-center items-center"
                >
                  <h4 className="text-[18px] font-[700]">{data.name}</h4>
                  <p className="text-[14px] font-[500]">{data.post}</p>
                  {isHovered === data.id && (
                    <div className="text-blue pb-4 transition duration-300">
                      <div className="col-span-4">
                        <SocialMedia hoverTextColor="white"/>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Links and Button */}
      <QualifiedTeacher />
    </div>
  );
}

export default TeacherChart;
