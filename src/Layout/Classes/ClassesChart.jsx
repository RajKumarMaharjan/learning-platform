import { useState } from "react";
import ClassesItems from "../../data/classesItem.json";
import { FaBook, FaUser } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import EnrollBtn from "../../components/Button/EnrollBtn";
import "../../css/index.css";

function ClassesChart() {
  const item = ClassesItems;
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8 md:justify-center mx-auto md:w-full w-5/6 px-4">
        {item.map((item) => (
          <div key={item.id} className="shadow-lg bg-light" 
          onMouseEnter={() => setIsHover(item.id) }
          onMouseLeave={() => setIsHover(null)}
          >
            <div
              className="relative"
            >
             {isHover === item.id && (
             <div
             className={`absolute border-2 top-4 right-4 border-lightPurple w-full h-[100%] -z-20 shadow-[rgba(86,79,255,0.54)_0px_3px_8px] ${isHover === item.id ? 'box' : ''}`}
           ></div>
             )}
              <div className="relative z-10">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full object-cover h-[295px]"
                />
                <div className="absolute right-9 top-[54%] bg-lightPurple text-[#fff] text-[1rem] font-semibold size-12 rounded-full text-center flex items-center justify-center">
                  {item.price}
                </div>
                <div className="px-6">
                  <h3 className="text-dark text-[1.5rem] font-[700] py-6">
                    {item.title}
                  </h3>
                  <ul className="flex justify-between pr-[25%] text-[1rem] font-[400]">
                    <li className="flex items-center gap-2">
                      <FaBook />
                      {item.Lessons}
                    </li>
                    <li className="flex items-center gap-2">
                      <FaUser />
                      {item.Students}
                    </li>
                  </ul>
                  <ul className="text-[1rem] font-[400]">
                    <li className="flex gap-2 items-center">
                      <BiSolidContact />
                      {item.contact}
                    </li>
                  </ul>
                  <EnrollBtn text="Enroll Now" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassesChart;
