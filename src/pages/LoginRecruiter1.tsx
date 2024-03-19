import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginRecruiter1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoPitchini1Click = useCallback(() => {
    navigate("/");
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
    navigate("/login-freelancer");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1589px] overflow-hidden text-left text-base-4 text-gray-3 font-join-text">
      <div className="absolute top-[8194.7px] left-[1095px] font-medium">
        Digidop ©Copyright
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1512px] h-[1565px] text-center text-xl text-gray-200">
        <div className="absolute top-[0px] left-[calc(50%_-_756px)] bg-whitesmoke-100 w-[1512px] h-[127px] flex flex-col items-start justify-center py-0 px-[41px] box-border">
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
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-grey1" />
                <div className="absolute top-[20%] left-[25%] tracking-[-0.01em] font-medium">
                  Join
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[5.05%] top-[86.52%] bottom-[8.43%] left-[calc(50%_-_320px)] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[639px] cursor-pointer border-[3px] border-solid border-dgrad-color1"
          onClick={onRectangleClick}
        />
        <div className="absolute h-[1.63%] top-[88.24%] left-[calc(50%_-_157px)] text-5xl tracking-[-0.01em] font-medium font-montserrat text-orange flex items-center justify-center w-[313.4px]">
          Confirm
        </div>
        <div className="absolute top-[1201px] left-[270px] rounded-sm bg-silver-200 box-border w-[972px] h-[99px] border-[2px] border-solid border-grey" />
        <div className="absolute top-[1220px] left-[307px] text-13xl font-medium text-grey text-left inline-block w-[301px] h-[53px]">
          Password*
        </div>
        <div className="absolute top-[687px] left-[443px] w-[100px] h-[100px] overflow-hidden" />
        <div className="absolute top-[344px] left-[calc(50%_-_452px)] text-6xl leading-[146%] font-medium text-grey2 inline-block w-[903px] h-[37px]">
          <p className="m-0">{`To reset your password at PITCHINI, please enter your new password `}</p>
        </div>
        <div className="absolute top-[203px] left-[calc(50%_-_482px)] text-66xl font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[963px] h-[124px] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
          Reset Password
        </div>
        <div className="absolute top-[1541px] left-[calc(50%_-_106px)] text-base font-medium text-gray-3 text-left">
          Copyright © PITCHINI 2024
        </div>
        <img
          className="absolute top-[435px] left-[calc(50%_-_353px)] w-[706px] h-[712px] object-cover"
          alt=""
          src="/b01-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LoginRecruiter1;
