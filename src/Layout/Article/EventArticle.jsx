import { Link } from "react-router-dom";
import SubHeading from "../../components/Heading/SubHeading";
import LargeHeading from "../../components/Heading/LargeSubHeading";
import EventArticle from "../../data/eventArticle.json";

function EventArticleLayout() {
  return (
    <div className="bg-[#FEFBF6] py-24 px-4 sm:px-24 md:px-4">
      <div>
        <div className="text-center">
          <SubHeading title="Together We Can Create" color="lightPurple" />
          <LargeHeading title="Interesting Articles Updated Daily" />
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8  mx-auto pt-12 w-full">
          {EventArticle.map((article, index) => (
            <div
              key={index}
              id="bounce"
              className="shadow-lg bg-white border-b-2 border-transparent hover:border-b-2 hover:border-red"
            >
              <div className="relative">
                <img
                  src={article.imgUrl}
                  alt="article.title"
                  className="w-full"
                />
                <div className="absolute top-[5%] left-[5%]">
                  <div className="text-center text-white bg-[#F9A749] px-[12px] py-[0px]">
                    <p className="text-[14px] font-medium">{article.date}</p>
                    <p className="text-[14px] font-medium mt-[-14px]">
                      {article.month}
                    </p>
                  </div>
                </div>
                <div className="px-[20px] pt-[18px] pb-[25px]">
                  <Link
                    to="#"
                    className="cursor-pointer text-[14px] font-[500] leading-3"
                  >
                    {article.address}
                  </Link>
                  <h4 className="text-[20px] font-[400]">{article.title}</h4>
                  <p className="text-[14px] font-[400]">{article.time}</p>
                  <p className="text-[22px] font-[600] text-lightPurple">
                    {article.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventArticleLayout;
