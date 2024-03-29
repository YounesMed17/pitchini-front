import { FunctionComponent } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import EnTete from "../components/EnTete";

const Frame: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start tracking-[normal]">
      <main className="h-[2129px] flex-1 bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[69px] box-border gap-[72px] max-w-full text-left text-base-4 text-gray-3 font-paragraphe lg:pb-5 lg:box-border mq450:gap-[18px_72px] mq750:h-auto mq750:gap-[36px_72px]">
        <EnTete />
        <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[6062.7px] box-border max-w-full shrink-0 text-left text-44xl text-grey1 font-paragraphe lg:pb-[1665px] lg:box-border mq450:pb-[703px] mq450:box-border mq1050:pb-[1082px] mq1050:box-border">
          <div className="w-[972px] flex flex-col items-start justify-start gap-[77px] max-w-full mq750:gap-[19px_77px] mq1050:gap-[38px_77px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-[5px] box-border max-w-full text-center">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <h1 className="m-0 self-stretch h-[124px] relative text-inherit font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] mq450:text-19xl mq1050:text-31xl">
                  Create your PITCHINI Account
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full mt-[-13px] text-6xl">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[59px] max-w-full mq450:gap-[29px_59px]">
                    <div className="self-stretch relative leading-[37px] font-medium mq450:text-xl mq450:leading-[29px]">
                      Are you using PITCHINI as a Recruiter or a Freelancer ?
                    </div>
                    <div className="self-stretch h-[517px] flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full">
                      <img
                        className="h-[517px] w-[645px] relative object-cover max-w-full"
                        loading="lazy"
                        alt=""
                        src="/login02-converti02-1@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                      <div className="w-[595px] flex flex-row items-start justify-center gap-[9px] max-w-full mq750:flex-wrap">
                        <Button
                          className="h-[79px] flex-1 relative min-w-[190px] mq750:flex-1"
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
                          Freelacer
                        </Button>
                        <Button
                          className="h-[79px] flex-[0.4334] min-w-[190px] mq750:flex-1"
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
                          Recruiter
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[85px] box-border gap-[78px] max-w-full text-13xl text-blue mq450:pb-9 mq450:box-border mq750:gap-[19px_78px] mq1050:gap-[39px_78px] mq1050:pb-[55px] mq1050:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
                <div className="self-stretch rounded-sm bg-silver-200 box-border flex flex-row items-start justify-start py-[23px] px-[21px] max-w-full border-[2px] border-solid border-blue">
                  <div className="h-[99px] w-[972px] relative rounded-sm bg-silver-200 box-border hidden max-w-full border-[2px] border-solid border-blue" />
                  <div className="h-[53px] w-[301px] relative font-medium inline-block shrink-0 z-[1] mq450:text-lgi mq1050:text-7xl">
                    First Name*
                  </div>
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[99px] font-paragraphe font-medium text-13xl text-darkgray-200"
                  placeholder="Last Name*"
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
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[99px] font-paragraphe font-medium text-13xl text-darkgray-200"
                  placeholder="E-MAIL*"
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
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[99px] font-paragraphe font-medium text-13xl text-darkgray-200"
                  placeholder="Password*"
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
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[462px] flex flex-row items-start justify-start gap-[70px] max-w-full mq450:flex-wrap mq450:gap-[70px_35px]">
                  <Button
                    className="h-[79px] flex-[0.6837] min-w-[127px] mq450:flex-1"
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
                    className="h-[79px] flex-1 relative min-w-[127px] mq450:flex-1"
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
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-base text-gray-3">
              <div className="relative font-medium">
                Copyright © PITCHINI 2024
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[860px] mq450:pl-5 mq450:box-border mq750:pl-[215px] mq750:box-border mq1050:pl-[430px] mq1050:box-border">
          <div className="h-[25px] w-[164px] relative font-medium inline-block">
            Digidop ©Copyright
          </div>
        </div>
      </main>
    </div>
  );
};

export default Frame;
