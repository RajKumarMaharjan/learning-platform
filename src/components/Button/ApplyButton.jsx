
import { FaArrowRight } from "react-icons/fa";
import '../../css/index.css'

function button({ text }) {
  return (
 <div>
     <button id="linkBtn" className="relative flex gap-4 items-center pl-5 w-[148px] h-[50px] border rounded hover:border-lightPurple hover:gap-5 transition duration-100">
        { text }
        <FaArrowRight/>
    </button>
 </div>
  )
}

export default button