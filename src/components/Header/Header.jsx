
import { useNavigate } from "react-router-dom";
import CustomLink from "../CustomList/CustomLink";

export function Header() {
  const navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }
  return (
    <div className='z-10 sticky top-0 flex justify-between text-xl bg-[#30343F] text-white h-20 items-center px-8'>
      <div onClick={goToHome} className='cursor-pointer text-2xl font-semibold hover:text-gray-400 transition-colors'>mealDB</div>
      <div className="flex gap-4">
        <CustomLink to='/'>home</CustomLink>
        <CustomLink to='/restaurant'>restaurant</CustomLink>
        <CustomLink to='/cart'>cart</CustomLink>
        <CustomLink to='/offers'>offers</CustomLink>
      </div>
    </div>
  )
}
