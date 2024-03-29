import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className="w-[1063.3px] flex flex-col items-start justify-start gap-[59px] max-w-full text-left text-18xl text-white font-paragraphe mq750:gap-[29px_59px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-12 pl-11 box-border max-w-full mq1050:pl-[22px] mq1050:pr-6 mq1050:box-border">
          <div className="flex-1 flex flex-row items-end justify-start max-w-full [row-gap:20px] mq1050:flex-wrap">
            <div className="h-[86px] w-[86px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-grey w-full h-full" />
              <div className="absolute top-[16px] left-[37px] font-semibold inline-block w-3.5 h-[37px] min-w-[14px] z-[1] mq1050:text-11xl mq450:text-3xl">
                1
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[229px] min-h-[43px] max-w-full mq1050:min-h-[auto]">
              <div className="self-stretch h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-grey" />
            </div>
            <div className="h-[86px] w-[86px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-grey box-border w-full h-full border-[0px] border-solid border-grey" />
              <div className="absolute top-[13px] left-[32px] font-semibold inline-block w-[22px] h-[43px] min-w-[22px] z-[1] mq1050:text-11xl mq450:text-3xl">
                2
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[235px] min-h-[43px] max-w-full mq1050:min-h-[auto]">
              <div className="self-stretch h-[3px] relative box-border z-[1] border-t-[3px] border-solid border-grey" />
            </div>
            <div className="h-[86px] w-[86px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-blue box-border w-full h-full border-[0px] border-solid border-blue" />
              <div className="absolute top-[13px] left-[32px] font-semibold inline-block w-[23px] h-[43px] min-w-[23px] z-[1] mq1050:text-11xl mq450:text-3xl">
                3
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-center text-11xl text-grey mq750:flex-wrap">
          <h3 className="m-0 h-[53px] w-[173px] relative text-inherit font-medium font-inherit inline-block shrink-0 mq1050:text-5xl mq450:text-lg">
            Full Name
          </h3>
          <h3 className="m-0 h-[53px] w-[242px] relative text-inherit font-medium font-inherit inline-block shrink-0 mq1050:text-5xl mq450:text-lg">
            Personal Details
          </h3>
          <div className="w-[180.4px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit [transform:_rotate(0.1deg)] mq1050:text-5xl mq450:text-lg">
              Completion
            </h3>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[37px] pr-[23px] pl-5 box-border max-w-full">
        <div className="w-[462px] flex flex-row flex-wrap items-start justify-start gap-[70px] max-w-full mq450:gap-[35px]">
          <Button
            className="h-[79px] flex-1 relative min-w-[127px]"
            disableElevation={true}
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
            BACK
          </Button>
          <Button
            className="h-[79px] flex-1 relative min-w-[127px]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#ff4f4c",
              fontSize: "28",
              background: "#fff",
              borderRadius: "6px",
              "&:hover": { background: "#fff" },
              height: 79,
            }}
          >
            NEXT
          </Button>
        </div>
      </div>
      <div className="w-[1041px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base text-gray-3">
        <div className="relative font-medium">Copyright © PITCHINI 2024</div>
      </div>
    </section>
  );
};

export default FrameComponent5;
