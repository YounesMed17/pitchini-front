import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import EnTete1 from "../components/EnTete1";

const RecruiterInterview: FunctionComponent = () => {
  return (
    <div className="w-full h-[1889px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[39px] box-border gap-[6344.7px] tracking-[normal] text-left text-base-4 text-gray-3 font-paragraphe mq450:gap-[1586px_6344.7px] mq1000:gap-[3172px_6344.7px]">
      <main className="self-stretch flex flex-col items-end justify-start gap-[144px] shrink-0 [debug_commit:f6aba90] mq450:gap-[36px_144px] mq1000:gap-[72px_144px]">
        <EnTete1 />
        <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-30xl text-darkgray-400 font-paragraphe">
          <div className="w-[959px] flex flex-col items-start justify-start gap-[87px] max-w-full mq725:gap-[22px_87px] mq1000:gap-[43px_87px]">
            <img
              className="self-stretch h-[811px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/2201-1@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[53px] pl-[52px] box-border max-w-full mq1000:pl-[26px] mq1000:pr-[26px] mq1000:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[26px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-2 box-border max-w-full">
                  <h1 className="m-0 h-[276px] flex-1 relative text-inherit leading-[138.74%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#fe504b,_#f9c928)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq450:text-10xl mq450:leading-[41px] mq1000:text-20xl mq1000:leading-[54px]">
                    <p className="m-0">Hello Lorem,</p>
                    <p className="m-0">
                      To complete the confirmation of your account, please
                      proceed with a video interview.
                    </p>
                  </h1>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[117px] gap-[26px] text-13xl">
                  <h2 className="m-0 self-stretch h-[107px] relative text-inherit leading-[146%] inline-block shrink-0 font-inherit mq450:text-lgi mq450:leading-[28px] mq1000:text-7xl mq1000:leading-[37px]">
                    <p className="m-0">
                      <span className="font-medium">
                        You will receive an email containing the interview date
                        and the meeting link.
                      </span>
                      <i className="font-medium"> See you soon!</i>
                    </p>
                    <p className="m-0">
                      <i className="font-medium">&nbsp;</i>
                    </p>
                  </h2>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <Button
                      className="h-[79px] w-[196px]"
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#ff4f4c",
                        fontSize: "28",
                        background: "#fff",
                        borderRadius: "6px",
                        "&:hover": { background: "#fff" },
                        width: 196,
                        height: 79,
                      }}
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
                <div className="w-[835px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-gray-3">
                  <div className="relative font-medium">
                    Copyright © PITCHINI 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[860px] mq450:pl-5 mq450:box-border mq1050:pl-[430px] mq1050:box-border mq725:pl-[215px] mq725:box-border">
        <div className="h-[25px] w-[164px] relative font-medium inline-block shrink-0 [debug_commit:f6aba90]">
          Digidop ©Copyright
        </div>
      </div>
    </div>
  );
};

export default RecruiterInterview;
