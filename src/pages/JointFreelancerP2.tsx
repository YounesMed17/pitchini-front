import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";

const JointFreelancerP2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoPitchini1Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    // Please sync "Contact Page " to the project
  }, []);

  const onLoginTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/joint-freelancer-p1");
  }, [navigate]);

  return (
    <div className="w-full h-[1889px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[39px] box-border gap-[73px] tracking-[normal] text-left text-base-4 text-gray-3 font-paragraphe mq450:gap-[18px_73px] mq750:h-auto mq750:gap-[36px_73px]">
      <FrameComponent7
        onLogoPitchini1Click={onLogoPitchini1Click}
        onContactTextClick={onContactTextClick}
        onLoginTextClick={onLoginTextClick}
        onButtonContainerClick={onButtonContainerClick}
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
        <FrameComponent6 />
      </div>
      <main className="self-stretch flex flex-row items-start justify-center pt-0 pb-[6271.7px] pr-5 pl-[23px] box-border max-w-full lg:pb-[1722px] lg:box-border mq750:pb-[1119px] mq750:box-border">
        <FrameComponent5 />
      </main>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[860px] mq1050:pl-[430px] mq1050:box-border mq450:pl-5 mq450:box-border mq750:pl-[215px] mq750:box-border">
        <div className="h-[25px] w-[164px] relative font-medium inline-block">
          Digidop ©Copyright
        </div>
      </div>
    </div>
  );
};

export default JointFreelancerP2;
