import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const JointFreelancerP: FunctionComponent = () => {
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

  const onRectangle4Click = useCallback(() => {
    // Please sync "Joint Recruiter" to the project
  }, []);

  const onRecruiterTextClick = useCallback(() => {
    // Please sync "Joint Recruiter" to the project
  }, []);

  const onRectangle6Click = useCallback(() => {
    navigate("/joint-freelancer-p2");
  }, [navigate]);

  const onNEXTTextClick = useCallback(() => {
    navigate("/joint-freelancer-p2");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[2072px] overflow-hidden flex flex-col items-center justify-start text-center text-9xl text-grey font-join-text">
      <div className="w-[1512px] relative h-[2015px]">
        <div className="absolute top-[0px] left-[calc(50%_-_756px)] bg-whitesmoke w-[1512px] h-[127px] flex flex-col items-start justify-center py-0 px-[41px] box-border text-xl text-gray-200">
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
              <div className="w-[86px] relative h-10 text-white font-montserrat">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-black" />
                <div className="absolute top-[20%] left-[25%] tracking-[-0.01em] font-medium">
                  Join
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1138px] left-[270px] rounded-sm bg-silver box-border w-[972px] h-[99px] border-[2px] border-solid border-blue-1" />
        <div className="absolute top-[1258px] left-[270px] rounded-sm bg-silver box-border w-[972px] h-[99px] border-[2px] border-solid border-grey" />
        <div className="absolute top-[1378px] left-[275px] rounded-sm bg-silver box-border w-[972px] h-[99px] border-[2px] border-solid border-grey" />
        <div className="absolute top-[1161px] left-[292px] text-13xl font-medium text-blue-1 text-left inline-block w-[301px] h-[53px]">
          First Name*
        </div>
        <div className="absolute top-[1281px] left-[291px] text-13xl font-medium text-darkgray text-left inline-block w-48 h-[53px]">
          Last Name*
        </div>
        <div className="absolute top-[1401px] left-[296px] text-13xl font-medium text-darkgray text-left inline-block w-48 h-[53px]">
          E-MAIL*
        </div>
        <div className="absolute top-[1669px] left-[224px] text-11xl font-medium text-title inline-block w-[173px] h-[53px]">
          Full Name
        </div>
        <div className="absolute top-[1669px] left-[calc(50%_-_127px)] text-11xl font-medium inline-block w-[242px] h-[53px]">
          Personal Details
        </div>
        <div className="absolute top-[1673px] left-[1107px] text-11xl font-medium inline-block w-[180.4px] h-[45px] [transform:_rotate(0.08deg)] [transform-origin:0_0]">
          Completion
        </div>
        <div className="absolute top-[310px] left-[calc(50%_-_451px)] text-6xl leading-[146%] font-medium text-grey1 inline-block w-[903px]">
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
        <div className="absolute h-[3.92%] top-[48.73%] bottom-[47.34%] left-[calc(50%_-_297px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[293px] border-[3px] border-solid border-blue-1" />
        <div
          className="absolute h-[3.92%] top-[48.73%] bottom-[47.34%] left-[calc(50%_+_5px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[293px] cursor-pointer border-[3px] border-solid border-grey"
          onClick={onRectangle4Click}
        />
        <div className="absolute h-[1.29%] top-[50.07%] left-[calc(50%_-_220px)] tracking-[-0.01em] font-medium font-montserrat text-blue-1 flex items-center justify-center w-[140px]">
          Freelacer
        </div>
        <div
          className="absolute h-[1.29%] top-[50.07%] left-[calc(50%_+_85px)] tracking-[-0.01em] font-medium font-montserrat flex items-center justify-center w-[133px] cursor-pointer"
          onClick={onRecruiterTextClick}
        >
          Recruiter
        </div>
        <div className="absolute top-[1991px] left-[calc(50%_-_117px)] text-base font-medium text-gray-3 text-left">
          Copyright © PITCHINI 2024
        </div>
        <div className="absolute top-[1560px] left-[268px] rounded-[50%] bg-blue-1 w-[86px] h-[86px]" />
        <div className="absolute top-[1560px] left-[707px] rounded-[50%] bg-silver box-border w-[86px] h-[86px] border-[3px] border-solid border-grey" />
        <div className="absolute top-[1560px] left-[1154px] rounded-[50%] bg-silver box-border w-[86px] h-[86px] border-[3px] border-solid border-grey" />
        <div className="absolute top-[1576px] left-[305px] text-18xl font-semibold text-white text-left inline-block w-3 h-[37px]">
          1
        </div>
        <div className="absolute top-[1573px] left-[739px] text-18xl font-semibold text-left inline-block w-[22px] h-[43px]">
          2
        </div>
        <div className="absolute top-[1573px] left-[1186px] text-18xl font-semibold text-left inline-block w-[22px] h-[43px]">
          3
        </div>
        <div className="absolute top-[1602px] left-[353px] box-border w-[355px] h-0.5 border-t-[2px] border-solid border-grey" />
        <div className="absolute top-[1601.5px] left-[791.5px] box-border w-[364px] h-[3px] border-t-[3px] border-solid border-grey" />
        <div className="absolute h-[3.92%] top-[88.39%] bottom-[7.69%] left-[calc(50%_-_233px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[196px] border-[3px] border-solid border-grey" />
        <div
          className="absolute h-[3.92%] top-[88.39%] bottom-[7.69%] left-[calc(50%_+_33px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[196px] cursor-pointer border-[3px] border-solid border-dgrad-color"
          onClick={onRectangle6Click}
        />
        <div className="absolute h-[1.29%] top-[89.68%] left-[calc(50%_-_205px)] tracking-[-0.01em] font-medium font-montserrat flex items-center justify-center w-[140px]">
          BACK
        </div>
        <div
          className="absolute h-[1.29%] top-[89.68%] left-[calc(50%_+_64px)] tracking-[-0.01em] font-medium font-montserrat text-orange flex items-center justify-center w-[133px] cursor-pointer"
          onClick={onNEXTTextClick}
        >
          NEXT
        </div>
      </div>
    </div>
  );
};

export default JointFreelancerP;
