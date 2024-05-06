import { profitScreenText } from "../../../../constants";
import ui from "../../../styles/ui.module.css";

const ProfiteScreen: React.FC = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] flex justify-center items-center bg-black ">
      <div className="w-[80%] flex flex-col justify-start items-start ">
        <h1 className="text-white text-4xl font-bold">{profitScreenText.h1}</h1>
        <div className={`w-full flex justify-end`}>
          <h2 className={`${ui.gradientText}`}>{profitScreenText.h2}</h2>
        </div>
        <div className="flex w-full justify-center gap-8">
          <video autoPlay muted loop className="w-[55vw]">
            <source src={profitScreenText.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="flex flex-col justify-start items-start gap-2 pt-8 px-6 border-x-[1px] border-gray-100">
            <p className='text-white font-semibold'>{profitScreenText.p}</p>
            <small className='text-[#46505F]'>{profitScreenText.small}</small>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProfiteScreen;