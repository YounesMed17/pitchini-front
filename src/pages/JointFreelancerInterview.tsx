import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const JointFreelancerInterview: FunctionComponent = () => {
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
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1889px] overflow-hidden text-center text-base-4 text-gray-3 font-join-text">
      <div className="absolute top-[8194.7px] left-[1095px] font-medium text-left">
        Digidop ©Copyright
      </div>
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
      <div className="absolute top-[1826px] left-[calc(50%_-_115px)] text-base font-medium text-left">
        Copyright © PITCHINI 2024
      </div>
      <img
        className="absolute top-[271px] left-[calc(50%_-_479px)] w-[959px] h-[811px] object-cover"
        alt=""
        src="/2201-1@2x.png"
      />
      <div className="absolute top-[1471px] left-[calc(50%_-_427px)] text-13xl leading-[146%] text-darkgray inline-block w-[854px] h-[107px] opacity-[0.6]">
        <p className="m-0">
          <span className="font-medium">
            You will receive an email containing the interview date and the
            meeting link.
          </span>
          <i className="font-medium"> See you soon!</i>
        </p>
        <p className="m-0">
          <i className="font-medium">&nbsp;</i>
        </p>
      </div>
      <b className="absolute top-[1169px] left-[calc(50%_-_419px)] text-[49px] leading-[138.74%] inline-block text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#fe504b,_#f9c928)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] w-[839px] h-[276px]">
        <p className="m-0">Hello Lorem,</p>
        <p className="m-0">
          To complete the confirmation of your account, please proceed with a
          video interview.
        </p>
      </b>
      <div className="absolute h-[4.18%] top-[84.91%] bottom-[10.91%] left-[calc(50%_-_98px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[196px] flex flex-col items-center justify-end py-[26px] px-0 text-9xl text-orange font-montserrat border-[3px] border-solid border-dgrad-color">
        <div className="w-[133px] relative tracking-[-0.01em] font-medium flex items-center justify-center h-[26px] shrink-0">
          Confirm
        </div>
      </div>
    </div>
  );
};

export default JointFreelancerInterview;
