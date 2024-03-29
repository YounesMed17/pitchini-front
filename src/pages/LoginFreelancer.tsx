import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginFreelancer: FunctionComponent = () => {
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

  const onRectangleClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onSIGNINTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/login-recruiter");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    // Please sync "Login Recruiter " to the project
  }, []);

  const onRecruiterTextClick = useCallback(() => {
    // Please sync "Login Recruiter " to the project
  }, []);

  return (
    <div className="w-full relative bg-white h-[1889px] overflow-hidden text-center text-5xl text-blue font-paragraphe">
      <div className="absolute top-[1826px] left-[calc(50%_-_116px)] text-base font-medium text-gray-3 text-left">
        Copyright © PITCHINI 2024
      </div>
      <div className="absolute top-[0px] left-[calc(50%_-_756px)] bg-whitesmoke-100 w-[1512px] h-[127px] flex flex-col items-start justify-center py-0 px-[41px] box-border text-xl text-gray-200">
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
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-grey2" />
              <div className="absolute top-[20%] left-[25%] tracking-[-0.01em] font-medium">
                Join
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_+_436.5px)] left-[270px] rounded box-border w-[41px] h-10 text-xl text-white font-montserrat border-[2px] border-solid border-gray-100">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-gray-300" />
        <div className="absolute top-[20%] left-[-3.17%] tracking-[-0.01em] font-medium hidden">
          Join
        </div>
      </div>
      <div
        className="absolute h-[4.18%] top-[77.66%] bottom-[18.16%] left-[calc(50%_-_320px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[639px] cursor-pointer border-[3px] border-solid border-blue"
        onClick={onRectangleClick}
      />
      <div className="absolute h-[4.18%] top-[82.95%] bottom-[12.86%] left-[calc(50%_-_320px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[639px] border-[3px] border-solid border-gray-4" />
      <div
        className="absolute h-[1.35%] top-[79.09%] left-[calc(50%_-_157px)] tracking-[-0.01em] font-medium font-montserrat flex items-center justify-center w-[313.4px] cursor-pointer"
        onClick={onSIGNINTextClick}
      >
        SIGN IN
      </div>
      <div className="absolute top-[1138px] left-[270px] rounded-sm bg-silver-200 box-border w-[972px] h-[99px] border-[2px] border-solid border-blue" />
      <div className="absolute top-[1258px] left-[270px] rounded-sm bg-silver-200 box-border w-[972px] h-[99px] border-[2px] border-solid border-grey" />
      <div className="absolute top-[1161px] left-[292px] text-13xl font-medium text-left inline-block w-[301px] h-[53px]">
        E-mail Address*
      </div>
      <div
        className="absolute top-[1681px] left-[calc(50%_-_150px)] [text-decoration:underline] font-medium text-dodgerblue inline-block w-[301px] h-[53px] cursor-pointer"
        onClick={onForgotPasswordTextClick}
      >
        Forgot password?
      </div>
      <div className="absolute top-[1726px] left-[calc(50%_-_264px)] [text-decoration:underline] font-medium text-dodgerblue inline-block w-[529px] h-[53px]">
        Don’t have an account ? Sign Up
      </div>
      <div className="absolute top-[1281px] left-[291px] text-13xl font-medium text-darkgray-200 text-left inline-block w-48 h-[53px]">
        Password*
      </div>
      <div className="absolute top-[1383px] left-[322px] text-9xl uppercase font-medium text-gray-100 text-left inline-block w-[201px] h-10 [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)]">
        Remember me
      </div>
      <div className="absolute top-[687px] left-[443px] w-[100px] h-[100px] overflow-hidden" />
      <div className="absolute top-[340px] left-[calc(50%_-_451px)] text-6xl leading-[146%] font-medium text-grey1 inline-block w-[903px]">{`Are you using PITCHINI as a Recruiter or a Freelancer ? `}</div>
      <div className="absolute top-[199px] left-[calc(50%_-_481px)] text-66xl font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[963px] h-[124px] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
        Login the Pitchini
      </div>
      <div className="absolute top-[1591px] left-[489px] w-[532px] h-[31px] flex flex-row items-center justify-start gap-[6px] font-montserrat">
        <img
          className="w-[31px] relative h-[31px] object-cover"
          alt=""
          src="/googleicon2048x2048czn3g8x8-1@2x.png"
        />
        <div className="w-[495px] relative tracking-[-0.01em] font-medium text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center h-7 shrink-0">
          SIGN IN WITH YOUR GOOGLE ACCOUNT
        </div>
      </div>
      <div className="absolute top-[406px] left-[434px] w-[645px] h-[655px] flex flex-col items-center justify-start gap-[59px] text-9xl font-montserrat">
        <img
          className="w-[645px] relative h-[517px] object-cover"
          alt=""
          src="/login02-converti02-1@2x.png"
        />
        <div className="w-[595px] relative h-[79px]">
          <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_297.5px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[293px] border-[3px] border-solid border-blue" />
          <div
            className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_+_4.5px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[293px] cursor-pointer border-[3px] border-solid border-grey"
            onClick={onRectangle1Click}
          />
          <div className="absolute h-[32.91%] top-[34.18%] left-[calc(50%_-_220.5px)] tracking-[-0.01em] font-medium flex items-center justify-center w-[140px]">
            Freelacer
          </div>
          <div
            className="absolute h-[32.91%] top-[34.18%] left-[calc(50%_+_84.5px)] tracking-[-0.01em] font-medium text-grey flex items-center justify-center w-[133px] cursor-pointer"
            onClick={onRecruiterTextClick}
          >
            Recruiter
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFreelancer;
