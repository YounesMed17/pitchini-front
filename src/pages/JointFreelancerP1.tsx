import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const JointFreelancerP1: FunctionComponent = () => {
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

  const onRectangleTextarea2Click = useCallback(() => {
    navigate("/joint-freelancer-p1");
  }, [navigate]);

  const onRectangleTextarea3Click = useCallback(() => {
    navigate("/joint-freelancer-p3");
  }, [navigate]);

  const onBACKClick = useCallback(() => {
    navigate("/joint-freelancer-p1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[2238px] overflow-hidden text-left text-base-4 text-gray-3 font-titre-grey">
      <div className="absolute top-[8194.7px] left-[1095px] font-medium">
        Digidop ©Copyright
      </div>
      <main className="absolute top-[0px] left-[0px] w-[1512px] h-[2210px] text-left text-13xl text-darkgray font-titre-grey">
        <header className="absolute top-[0px] left-[calc(50%_-_756px)] bg-whitesmoke w-[1512px] h-[127px] flex flex-col items-start justify-center py-0 px-[41px] box-border text-center text-xl text-white font-montserrat">
          <div className="w-[1429px] h-[92px] flex flex-row items-center justify-start gap-[529px]">
            <img
              className="w-[304px] relative h-[92px] object-cover cursor-pointer"
              alt=""
              src="/logo-pitchini-1@2x.png"
              onClick={onLogoPitchini1Click}
            />
            <div className="w-[596px] h-10 flex flex-row items-center justify-end gap-[56px]">
              <nav className="m-0 flex flex-row items-start justify-start gap-[54px] text-center text-xl text-gray font-titre-grey">
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
              </nav>
              <div
                className="w-[86px] relative h-10 cursor-pointer"
                onClick={onButtonContainerClick}
              >
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-black" />
                <div className="absolute top-[20%] left-[25%] tracking-[-0.01em] font-medium">
                  Join
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="absolute top-[1153px] left-[270px] rounded-sm bg-silver box-border w-[972px] h-[99px] border-[2px] border-solid border-grey1" />
        <section className="absolute top-[1280px] left-[266px] rounded-sm bg-silver box-border w-[972px] h-[99px] border-[2px] border-solid border-grey1" />
        <h2 className="m-0 absolute top-[1176px] left-[290px] text-inherit font-medium font-inherit inline-block w-[142px] h-[53px]">
          Domain
        </h2>
        <h2 className="m-0 absolute top-[1303px] left-[286px] text-inherit font-medium font-inherit inline-block w-[142px] h-[53px]">
          Skills
        </h2>
        <div className="absolute top-[325px] left-[calc(50%_-_453px)] text-6xl leading-[146%] font-medium text-grey text-center inline-block w-[903px]">
          Are you using PITCHINI as a Recruiter or a Freelancer ?
        </div>
        <section className="absolute top-[199px] left-[calc(50%_-_483px)] text-44xl font-semibold font-titre-grey text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block w-[963px] h-[124px] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
          Create your PITCHINI Account
        </section>
        <img
          className="absolute top-[406px] left-[calc(50%_-_324px)] w-[645px] h-[517px] object-cover"
          alt=""
          src="/login02-converti02-1@2x.png"
        />
        <div className="absolute top-[982px] left-[459px] w-[595px] h-[79px] text-center text-9xl text-blue font-montserrat">
          <textarea className="bg-white [outline:none] absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_297.5px)] rounded-md shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[293px] border-[3px] border-solid border-blue" />
          <textarea className="bg-white [outline:none] absolute h-full top-[0%] bottom-[0%] left-[calc(50%_+_4.5px)] rounded-md shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[293px] border-[3px] border-solid border-grey1" />
          <h3 className="m-0 absolute h-[32.91%] top-[34.18%] left-[calc(50%_-_220.5px)] text-inherit tracking-[-0.01em] font-medium font-inherit flex items-center justify-center w-[140px]">
            Freelacer
          </h3>
          <h3 className="m-0 absolute h-[32.91%] top-[34.18%] left-[calc(50%_+_84.5px)] text-inherit tracking-[-0.01em] font-medium font-inherit text-grey1 flex items-center justify-center w-[133px]">
            Recruiter
          </h3>
        </div>
        <div className="absolute top-[2186px] left-[calc(50%_-_109px)] text-base font-medium text-gray-3">
          Copyright © PITCHINI 2024
        </div>
        <section className="absolute top-[1817px] left-[220px] w-[1063.4px] h-[162px] text-center text-11xl text-grey1 font-titre-grey">
          <h3 className="m-0 absolute top-[109px] left-[0px] text-inherit font-medium font-inherit inline-block w-[173px] h-[53px]">
            Full Name
          </h3>
          <h3 className="m-0 absolute top-[109px] left-[calc(50%_-_126.7px)] text-inherit font-medium font-inherit text-title inline-block w-[242px] h-[53px]">
            Personal Details
          </h3>
          <h3 className="m-0 absolute top-[113px] left-[883px] text-inherit font-medium font-inherit inline-block w-[180.4px] h-[45px] [transform:_rotate(0.08deg)] [transform-origin:0_0]">
            Completion
          </h3>
          <div className="absolute top-[0px] left-[44px] rounded-[50%] bg-grey1 w-[86px] h-[86px]" />
          <div className="absolute top-[0px] left-[483px] rounded-[50%] bg-blue box-border w-[86px] h-[86px] border-[3px] border-solid border-blue" />
          <div className="absolute top-[0px] left-[930px] rounded-[50%] bg-silver box-border w-[86px] h-[86px] border-[3px] border-solid border-grey1" />
          <div className="absolute top-[16px] left-[81px] text-18xl font-semibold text-white text-left inline-block w-3 h-[37px]">
            1
          </div>
          <div className="absolute top-[13px] left-[515px] text-18xl font-semibold text-white text-left inline-block w-[22px] h-[43px]">
            2
          </div>
          <div className="absolute top-[13px] left-[962px] text-18xl font-semibold text-left inline-block w-[22px] h-[43px]">
            3
          </div>
          <div className="absolute top-[42px] left-[129px] box-border w-[355px] h-0.5 border-t-[2px] border-solid border-grey1" />
          <div className="absolute top-[41.5px] left-[567.5px] box-border w-[364px] h-[3px] border-t-[3px] border-solid border-grey1" />
        </section>
        <div className="absolute top-[2030px] left-[521px] w-[462px] h-[79px] text-center text-9xl text-grey1 font-montserrat">
          <textarea
            className="bg-white [outline:none] absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_231px)] rounded-md shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[196px] cursor-pointer border-[3px] border-solid border-grey1"
            onClick={onRectangleTextarea2Click}
          />
          <textarea
            className="bg-white [outline:none] absolute h-full top-[0%] bottom-[0%] left-[calc(50%_+_35px)] rounded-md shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-[196px] cursor-pointer border-[3px] border-solid border-dgrad-color"
            onClick={onRectangleTextarea3Click}
          />
          <h3
            className="m-0 absolute h-[32.91%] top-[32.91%] left-[calc(50%_-_203px)] text-inherit tracking-[-0.01em] font-medium font-inherit flex items-center justify-center w-[140px] cursor-pointer"
            onClick={onBACKClick}
          >
            BACK
          </h3>
          <h3 className="m-0 absolute h-[32.91%] top-[32.91%] left-[calc(50%_+_66px)] text-inherit tracking-[-0.01em] font-medium font-inherit text-orange flex items-center justify-center w-[133px]">
            NEXT
          </h3>
        </div>
        <img
          className="absolute top-[1181px] right-[1045.3px] w-[43.7px] h-[43.7px] overflow-hidden object-cover"
          alt=""
          src="/chevron-down@2x.png"
        />
        <img
          className="absolute top-[1308px] right-[1100.3px] w-[43.7px] h-[43.7px] overflow-hidden object-cover"
          alt=""
          src="/chevron-down@2x.png"
        />
        <section className="absolute top-[1407px] left-[266px] rounded-sm bg-silver box-border w-[972px] h-[271px] flex flex-col items-center justify-center text-center text-13xl text-darkgray font-titre-grey border-[2px] border-solid border-blue">
          <div className="w-[601px] h-[211px] flex flex-col items-center justify-start gap-[12px]">
            <img
              className="w-[152px] relative h-[104px] object-cover"
              alt=""
              src="/icon0101-1@2x.png"
            />
            <h2 className="m-0 w-[601px] relative text-inherit font-medium font-inherit inline-block h-[95px] shrink-0">
              <p className="m-0">
                <span>
                  <span className="capitalize">D</span>
                  <span className="lowercase">{`rag and `}</span>
                  <span className="capitalize">d</span>
                  <span className="lowercase">{`rop `}</span>
                  <span className="capitalize">f</span>
                  <span className="lowercase">ile here</span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="lowercase">o</span>
                  <span className="capitalize">{`r `}</span>
                </span>
                <span className="[text-decoration:underline] text-blue">
                  <span className="capitalize">c</span>
                  <span className="lowercase">hoose file</span>
                </span>
              </p>
            </h2>
          </div>
        </section>
        <h2 className="m-0 absolute top-[1737px] left-[877px] text-inherit font-medium font-inherit inline-block w-[365px] h-[53px]">
          * Maximum size: 25MB
        </h2>
      </main>
    </div>
  );
};

export default JointFreelancerP1;
