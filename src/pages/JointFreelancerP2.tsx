import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const JointFreelancerP2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoPitchini1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    // Please sync "Contact Page " to the project
  }, []);

  const onLoginTextClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/joint-freelancer-p1");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/joint-freelancer-p2");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/joint-freelancer-interview");
  }, [navigate]);

  const onBACKTextClick = useCallback(() => {
    navigate("/joint-freelancer-p2");
  }, [navigate]);

  const onNEXTTextClick = useCallback(() => {
    navigate("/joint-freelancer-interview");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1889px] overflow-hidden text-center text-9xl text-grey1 font-titre-grey">
      <div className="absolute top-[8194.7px] left-[1095px] text-base-4 font-medium text-gray-3 text-left">
        Digidop ©Copyright
      </div>
      <div className="absolute top-[0px] left-[calc(50%_-_756px)] bg-whitesmoke w-[1512px] h-[127px] flex flex-col items-start justify-center py-0 px-[41px] box-border text-xl text-gray">
        <div className="w-[1429px] h-[92px] flex flex-row items-center justify-start gap-[529px]">
          <img
            className="w-[304px] relative h-[92px] object-cover cursor-pointer"
            alt=""
            src="/logo-pitchini-1@2x.png"
            onClick={onLogoPitchini1Click}
          />
          <div className="w-[596px] h-10 flex flex-row items-center justify-end gap-[56px]">
            <div className="flex flex-row items-start justify-start gap-[54px]">
              <div className="relative tracking-[-0.01em] font-medium">
                Policies
              </div>
              <div className="relative tracking-[-0.01em] font-medium">
                Discover
              </div>
              <div
                className="relative tracking-[-0.01em] font-medium cursor-pointer"
                onClick={onContactTextClick}
              >
                Contact
              </div>
              <div
                className="relative tracking-[-0.01em] font-medium cursor-pointer"
                onClick={onLoginTextClick}
              >
                Login
              </div>
            </div>
            <div
              className="w-[86px] relative h-10 cursor-pointer text-white font-montserrat"
              onClick={onButtonContainerClick}
            >
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-black" />
              <div className="absolute top-[20%] left-[25%] tracking-[-0.01em] font-medium">
                Join
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1138px] left-[270px] rounded-sm bg-silver box-border w-[972px] h-[99px] border-[2px] border-solid border-blue" />
      <div className="absolute top-[1258px] left-[270px] rounded-sm bg-silver box-border w-[972px] h-[99px] border-[2px] border-solid border-grey1" />
      <div className="absolute top-[1161px] left-[292px] text-13xl font-medium text-blue text-left inline-block w-[301px] h-[53px]">
        Password*
      </div>
      <div className="absolute top-[1281px] left-[291px] text-13xl font-medium text-darkgray text-left inline-block w-[327px] h-[53px]">
        Confirm Password*
      </div>
      <div className="absolute top-[1539px] left-[226px] text-11xl font-medium inline-block w-[173px] h-[53px]">
        Full Name
      </div>
      <div className="absolute top-[1539px] left-[calc(50%_-_125px)] text-11xl font-medium inline-block w-[242px] h-[53px]">
        Personal Details
      </div>
      <div className="absolute top-[1543px] left-[1109px] text-11xl font-medium inline-block w-[180.4px] h-[45px] [transform:_rotate(0.08deg)] [transform-origin:0_0]">
        Completion
      </div>
      <div className="absolute top-[310px] left-[calc(50%_-_451px)] text-6xl leading-[146%] font-medium text-grey inline-block w-[903px]">
        Are you using PITCHINI as a Recruiter or a Freelancer ?
      </div>
      <div className="absolute top-[199px] left-[calc(50%_-_481px)] text-44xl font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[963px] h-[124px] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
        Create your PITCHINI Account
      </div>
      <img
        className="absolute top-[406px] left-[calc(50%_-_322px)] w-[645px] h-[517px] object-cover"
        alt=""
        src="/login02-converti02-1@2x.png"
      />
      <div className="absolute h-[4.18%] top-[51.99%] bottom-[43.83%] left-[calc(50%_-_297px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[293px] border-[3px] border-solid border-blue" />
      <div className="absolute h-[4.18%] top-[51.99%] bottom-[43.83%] left-[calc(50%_+_5px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[293px] border-[3px] border-solid border-grey1" />
      <div className="absolute h-[1.38%] top-[53.41%] left-[calc(50%_-_220px)] tracking-[-0.01em] font-medium font-montserrat text-blue flex items-center justify-center w-[140px]">
        Freelacer
      </div>
      <div className="absolute h-[1.38%] top-[53.41%] left-[calc(50%_+_85px)] tracking-[-0.01em] font-medium font-montserrat flex items-center justify-center w-[133px]">
        Recruiter
      </div>
      <div className="absolute top-[1826px] left-[calc(50%_-_115px)] text-base font-medium text-gray-3 text-left">
        Copyright © PITCHINI 2024
      </div>
      <div className="absolute top-[1430px] left-[270px] rounded-[50%] bg-grey1 w-[86px] h-[86px]" />
      <div className="absolute top-[1430px] left-[709px] rounded-[50%] bg-grey1 box-border w-[86px] h-[86px] border-[3px] border-solid border-grey1" />
      <div className="absolute top-[1430px] left-[1156px] rounded-[50%] bg-blue box-border w-[86px] h-[86px] border-[3px] border-solid border-blue" />
      <div className="absolute top-[1446px] left-[307px] text-18xl font-semibold text-white text-left inline-block w-3 h-[37px]">
        1
      </div>
      <div className="absolute top-[1443px] left-[741px] text-18xl font-semibold text-white text-left inline-block w-[22px] h-[43px]">
        2
      </div>
      <div className="absolute top-[1443px] left-[1188px] text-18xl font-semibold text-white text-left inline-block w-[22px] h-[43px]">
        3
      </div>
      <div className="absolute top-[1472px] left-[355px] box-border w-[355px] h-0.5 border-t-[2px] border-solid border-grey1" />
      <div className="absolute top-[1471.5px] left-[793.5px] box-border w-[364px] h-[3px] border-t-[3px] border-solid border-grey1" />
      <div
        className="absolute h-[4.18%] top-[87.4%] bottom-[8.42%] left-[calc(50%_-_231px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[196px] cursor-pointer border-[3px] border-solid border-grey1"
        onClick={onRectangle4Click}
      />
      <div
        className="absolute h-[4.18%] top-[87.4%] bottom-[8.42%] left-[calc(50%_+_35px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[196px] cursor-pointer border-[3px] border-solid border-dgrad-color"
        onClick={onRectangle5Click}
      />
      <div
        className="absolute h-[1.38%] top-[88.78%] left-[calc(50%_-_203px)] tracking-[-0.01em] font-medium font-montserrat flex items-center justify-center w-[140px] cursor-pointer"
        onClick={onBACKTextClick}
      >
        BACK
      </div>
      <div
        className="absolute h-[1.38%] top-[88.78%] left-[calc(50%_+_66px)] tracking-[-0.01em] font-medium font-montserrat text-orange flex items-center justify-center w-[133px] cursor-pointer"
        onClick={onNEXTTextClick}
      >
        NEXT
      </div>
    </div>
  );
};

export default JointFreelancerP2;
