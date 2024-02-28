import Button from "../Button/PageButton";
import LinkButton from "../Button/LinkButton";

function QualifiedTeacher() {
  return (
    <div>
         <div className="flex flex-wrap justify-center items-center gap-4 mb-24 mt-16">
        <div className="text-[20px] text-[#383838] font-[700]">
          <a href="#">With 20+ Qualified Teacher?</a>
        </div>
        <Button btnText="View All Here" padding={32} hoverColor="white"/>
       <div className="w-[100px]">
       <LinkButton linkText="Careers" />
       </div>
      </div>
    </div>
  )
}

export default QualifiedTeacher