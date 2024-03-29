import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoPitchini1Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/joint-freelancer-p1");
  }, [navigate]);

  return (
    <div className="self-stretch h-[213px] flex flex-row items-start justify-start pt-0 px-0 pb-[86px] box-border max-w-full">
      <header className="self-stretch flex-1 bg-whitesmoke-100 flex flex-row items-start justify-between py-[17.5px] pr-[42px] pl-[41px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-xl text-gray-200 font-paragraphe mq750:pr-[21px] mq750:box-border">
        <img
          className="h-[92px] w-[304px] relative object-cover cursor-pointer"
          loading="lazy"
          alt=""
          src="/logo-pitchini-1@2x.png"
          onClick={onLogoPitchini1Click}
        />
        <div className="w-[596px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border max-w-full mq1050:w-0">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1050:hidden">
            <div className="w-[74px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[-0.01em] font-medium inline-block min-w-[74px]">
                Policies
              </div>
            </div>
            <div className="w-[85px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[-0.01em] font-medium inline-block min-w-[85px]">
                Discover
              </div>
            </div>
            <div className="w-[81px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[-0.01em] font-medium inline-block min-w-[81px]">
                Contact
              </div>
            </div>
            <div className="w-[53px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[-0.01em] font-medium inline-block min-w-[53px]">
                Login
              </div>
            </div>
            <div
              className="flex flex-row items-start justify-start py-2 px-[21.5px] relative cursor-pointer text-white font-montserrat"
              onClick={onButtonContainerClick}
            >
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-md bg-grey2" />
              <div className="w-[42px] relative tracking-[-0.01em] font-medium inline-block min-w-[42px] z-[1]">
                Join
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent4;
