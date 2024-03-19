import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoPitchini1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    // Please sync "Contact Page " to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/joint-freelancer-p1");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/login-freelancer");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    // Please sync "Login Recruiter " to the project
  }, []);

  const onFreelacerTextClick = useCallback(() => {
    navigate("/login-freelancer");
  }, [navigate]);

  const onRecruiterTextClick = useCallback(() => {
    // Please sync "Login Recruiter " to the project
  }, []);

  return (
    <div className="w-full relative bg-white h-[1456px] overflow-hidden text-center text-xl text-gray-200 font-join-text">
      <div className="absolute top-[0px] left-[calc(50%_-_756px)] bg-whitesmoke-100 w-[1512px] h-[127px]" />
      <div className="absolute top-[17px] left-[41px] w-[1429px] h-[92px] flex flex-row items-center justify-start gap-[529px]">
        <img
          className="w-[304px] relative h-[92px] object-cover cursor-pointer"
          alt=""
          src="/logo-pitchini-11@2x.png"
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
            <div className="relative tracking-[-0.01em] font-medium">Login</div>
          </div>
          <div
            className="w-[86px] relative h-10 cursor-pointer text-white font-montserrat"
            onClick={onButtonContainerClick}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-grey1" />
            <div className="absolute top-[20%] left-[25%] tracking-[-0.01em] font-medium">
              Join
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[485px] left-[calc(50%_-_417px)] w-[833px] h-[667px] object-cover"
        alt=""
        src="/login02-converti02-11@2x.png"
      />
      <div className="absolute top-[345px] left-[calc(50%_-_452px)] text-6xl leading-[146%] font-medium text-grey2 inline-block w-[903px]">{`Are you using PITCHINI as a Recruiter or a Freelancer ? `}</div>
      <div className="absolute top-[200px] left-[calc(50%_-_482px)] text-66xl font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[963px] h-[124px] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
        Login the Pitchini
      </div>
      <div className="absolute top-[1241px] left-[458px] w-[595px] h-[79px] text-9xl text-grey font-montserrat">
        <div
          className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_297.5px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[293px] cursor-pointer border-[3px] border-solid border-grey"
          onClick={onRectangleClick}
        />
        <div
          className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_+_4.5px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[293px] cursor-pointer border-[3px] border-solid border-blue-1"
          onClick={onRectangle1Click}
        />
        <div
          className="absolute h-[32.91%] top-[34.18%] left-[calc(50%_-_220.5px)] tracking-[-0.01em] font-medium flex items-center justify-center w-[140px] cursor-pointer"
          onClick={onFreelacerTextClick}
        >
          Freelacer
        </div>
        <div
          className="absolute h-[32.91%] top-[34.18%] left-[calc(50%_+_84.5px)] tracking-[-0.01em] font-medium text-blue-1 flex items-center justify-center w-[133px] cursor-pointer"
          onClick={onRecruiterTextClick}
        >
          Recruiter
        </div>
      </div>
      <div className="absolute top-[1393px] left-[calc(50%_-_106px)] text-base font-medium text-gray-3 text-left">
        Copyright © PITCHINI 2024
      </div>
    </div>
  );
};

export default Login;
