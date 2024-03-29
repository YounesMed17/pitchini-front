import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";

const JointFreelancerP1: FunctionComponent = () => {
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
    <div className="w-full h-[2238px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[27px] tracking-[normal] text-center text-44xl text-grey1 font-paragraphe mq750:h-auto">
      <FrameComponent7
        logoPitchini1Top="0"
        logoPitchini1Position="sticky"
        onLogoPitchini1Click={onLogoPitchini1Click}
        onContactTextClick={onContactTextClick}
        onLoginTextClick={onLoginTextClick}
        onButtonContainerClick={onButtonContainerClick}
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5 box-border max-w-full shrink-0">
        <div className="w-[976px] flex flex-col items-start justify-start gap-[59px] max-w-full mq750:gap-[29px_59px]">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[33px] pr-1.5 pl-[7px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
              <h1 className="m-0 self-stretch h-[124px] relative text-inherit font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] mq1050:text-31xl mq450:text-19xl">
                Create your PITCHINI Account
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-6xl">
                <div className="flex-1 flex flex-col items-start justify-start gap-[44px] max-w-full mq450:gap-[22px_44px]">
                  <div className="self-stretch relative leading-[37px] font-medium mq450:text-xl mq450:leading-[29px]">
                    Are you using PITCHINI as a Recruiter or a Freelancer ?
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <div className="w-[645px] flex flex-col items-end justify-start gap-[59px] max-w-full mq750:gap-[29px_59px]">
                      <img
                        className="self-stretch h-[517px] relative max-w-full overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/login02-converti02-1@2x.png"
                      />
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[23px] pl-[27px] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[9px] max-w-full mq750:flex-wrap">
                          <Button
                            className="h-[79px] flex-1 min-w-[190px] mq750:flex-1"
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              color: "#2f80ed",
                              fontSize: "28",
                              background: "#fff",
                              borderRadius: "6px",
                              "&:hover": { background: "#fff" },
                              height: 79,
                            }}
                          >
                            Freelacer
                          </Button>
                          <Button
                            className="h-[79px] flex-[0.9478] min-w-[190px] mq750:flex-1"
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              color: "#c4c4c4",
                              fontSize: "28",
                              background: "#fff",
                              borderRadius: "6px",
                              "&:hover": { background: "#fff" },
                              height: 79,
                            }}
                          >
                            Recruiter
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent9 />
          <div className="self-stretch flex flex-row items-start justify-end text-left text-13xl text-darkgray-200">
            <h2 className="m-0 h-[53px] relative text-inherit font-medium font-inherit inline-block mq1050:text-7xl mq450:text-lgi">
              * Maximum size: 25MB
            </h2>
          </div>
        </div>
      </div>
      <main className="self-stretch flex flex-row items-start justify-center pt-0 pb-[5957.7px] pr-[29px] pl-5 box-border max-w-full lg:pb-[1636px] lg:box-border mq750:pb-[1063px] mq750:box-border">
        <FrameComponent8 />
      </main>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[860px] text-left text-base-4 text-gray-3 mq1050:pl-[430px] mq1050:box-border mq450:pl-5 mq450:box-border mq750:pl-[215px] mq750:box-border">
        <div className="h-[25px] w-[164px] relative font-medium inline-block">
          Digidop ©Copyright
        </div>
      </div>
    </div>
  );
};

export default JointFreelancerP1;
