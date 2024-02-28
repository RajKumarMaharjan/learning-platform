import SubHeading from "../../components/Heading/SubHeading";
import LargeSubHeading from "../../components/Heading/LargeSubHeading";
import ArticleData from "../../data/articleItem.json";
import QualifiedTeacher from "../../components/QualifiedTeacher/QualifiedTeacherLink";

function Article() {
  const data = ArticleData;

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-24 mb-20">
        <SubHeading title="Together We Can Create" color="lightPurple" />
        <LargeSubHeading
          title="Interesting Articles Updated Daily"
          color="dark"
        />
      </div>
      <div className="px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {data.map((data) => (
            <div
              key={data.id}
              id="bounce"
              className="shadow-lg hover:border-b-2 hover:border-red"
              style={{
                transitionProperty: "transform",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease",
              }}
            >
              <div>
                <img src={data.imgUrl} alt="data.title" className="w-full" />
              </div>
              <div className="px-[20px] pt-[22px] pb-[25px]">
                <h4 className="text-[18px] font-[700] text-black">
                  {data.title}
                </h4>
                <p className="text-[15px] leading-[28px] font-[500] pt-[5px] pb-[16px]">
                  {data.article}
                </p>
                <div className="flex justify-between items-center text-[#564fff] w-[65%] text-[12px]">
                  <div>{data.comment}</div>
                  <div className="border-r h-3"></div>
                  <div>{data.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <QualifiedTeacher />
      </div>
    </div>
  );
}

export default Article;
