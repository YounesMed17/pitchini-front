import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const PostYourJob: FunctionComponent = () => {
  return (
    <div className="w-full h-[3727px] relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[19px] tracking-[normal] text-left text-9xl text-darkgray-200 font-paragraphe mq1050:h-auto">
      <FrameComponent4 />
      <FrameComponent3 />
      <div className="w-[100px] h-[100px] relative overflow-hidden shrink-0 hidden" />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[25px] pr-5 pl-[22px] box-border max-w-full">
        <div className="w-[972px] rounded-sm bg-silver-200 box-border flex flex-row items-start justify-between py-[25px] pr-[19px] pl-6 max-w-full gap-[20px] border-[2px] border-solid border-grey mq1050:flex-wrap">
          <div className="h-[92px] w-[972px] relative rounded-sm bg-silver-200 box-border hidden max-w-full border-[2px] border-solid border-grey" />
          <div className="relative inline-block max-w-full z-[1] mq450:text-3xl">
            Exemple: Create a WordPress website for my comany
          </div>
          <div className="relative inline-block min-w-[66px] z-[1] mq450:text-3xl">
            0/70
          </div>
        </div>
      </div>
      <FrameComponent2 />
      <main className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[4448.7px] box-border gap-[97px] max-w-full shrink-0 lg:pb-[1222px] lg:box-border mq750:gap-[48px_97px] mq750:pb-[794px] mq750:box-border mq450:gap-[24px_97px]">
        <FrameComponent1 />
        <div className="w-[734px] flex flex-row items-start justify-center pt-0 px-5 pb-2 box-border max-w-full">
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
            NEXT
          </Button>
        </div>
        <FrameComponent />
      </main>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[860px] text-base-4 text-gray-3 mq1050:pl-[430px] mq1050:box-border mq750:pl-[215px] mq750:box-border mq450:pl-5 mq450:box-border">
        <div className="h-[25px] w-[164px] relative font-medium inline-block">
          Digidop ©Copyright
        </div>
      </div>
    </div>
  );
};

export default PostYourJob;
