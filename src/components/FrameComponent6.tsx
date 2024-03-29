import { FunctionComponent } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";

const FrameComponent6: FunctionComponent = () => {
  return (
    <form className="m-0 w-[972px] flex flex-col items-end justify-start gap-[59px] max-w-full mq750:gap-[29px_59px]">
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-[5px] box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8.4px] max-w-full">
          <h1 className="m-0 self-stretch relative text-44xl font-semibold font-paragraphe text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] mq1050:text-31xl mq450:text-19xl">
            Create your PITCHINI Account
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
            <div className="flex-1 relative text-6xl leading-[37px] font-medium font-paragraphe text-grey1 text-center inline-block max-w-full mq450:text-xl mq450:leading-[29px]">
              Are you using PITCHINI as a Recruiter or a Freelancer ?
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[18px] pr-5 pl-[21px] box-border max-w-full shrink-0">
        <div className="w-[645px] flex flex-col items-start justify-start gap-[59px] max-w-full mq750:gap-[29px_59px]">
          <img
            className="self-stretch h-[517px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/login02-converti02-1@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
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
      <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full shrink-0">
        <div className="self-stretch rounded-sm bg-silver-200 box-border flex flex-row items-start justify-start py-[23px] px-[22px] max-w-full border-[2px] border-solid border-blue">
          <div className="h-[99px] w-[972px] relative rounded-sm bg-silver-200 box-border hidden max-w-full border-[2px] border-solid border-blue" />
          <div className="h-[53px] w-[301px] relative text-13xl font-medium font-paragraphe text-blue text-left inline-block shrink-0 z-[1] mq1050:text-7xl mq450:text-lgi">
            Password*
          </div>
        </div>
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-[99px] font-paragraphe font-medium text-13xl text-darkgray-200"
          placeholder="Confirm Password*"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#c4c4c4" },
            "& .MuiInputBase-root": {
              height: "99px",
              borderRadius: "14px",
              fontSize: "32px",
            },
            "& .MuiInputBase-input": { color: "#a09d9d" },
          }}
        />
      </div>
    </form>
  );
};

export default FrameComponent6;
