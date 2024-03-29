import { FunctionComponent, useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const JointFreelancerP: FunctionComponent = () => {
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

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[57px] box-border gap-[81.4px] tracking-[normal] mq1000:gap-[41px_81.4px] mq450:gap-[20px_81.4px]">
      <header className="self-stretch bg-whitesmoke-100 flex flex-row items-start justify-between py-[17.5px] pr-[42px] pl-[41px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-xl text-gray-200 font-paragraphe mq1000:pr-[21px] mq1000:box-border">
        <img
          className="h-[92px] w-[304px] relative object-contain cursor-pointer"
          loading="lazy"
          alt=""
          src="/logo-pitchini-1@2x.png"
          onClick={onLogoPitchini1Click}
        />
        <div className="w-[596px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border max-w-full mq1000:w-0">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1000:hidden">
            <div className="w-[74px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="self-stretch h-[30px] relative tracking-[-0.01em] font-medium flex items-center justify-center">
                Policies
              </div>
            </div>
            <div className="w-[85px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="self-stretch h-[30px] relative tracking-[-0.01em] font-medium flex items-center justify-center">
                Discover
              </div>
            </div>
            <div className="w-[81px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div
                className="self-stretch relative tracking-[-0.01em] font-medium inline-block min-w-[81px] cursor-pointer"
                onClick={onContactTextClick}
              >
                Contact
              </div>
            </div>
            <div className="w-[53px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div
                className="self-stretch relative tracking-[-0.01em] font-medium inline-block min-w-[53px] cursor-pointer"
                onClick={onLoginTextClick}
              >
                Login
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-2 px-[21.5px] relative text-white font-montserrat">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-md bg-grey2" />
              <div className="w-[42px] relative tracking-[-0.01em] font-medium inline-block min-w-[42px] z-[1]">
                Join
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
        <section className="w-[1063.3px] flex flex-col items-start justify-start gap-[77px] max-w-full text-left text-44xl text-grey1 font-paragraphe mq1050:gap-[38px_77px] mq725:gap-[19px_77px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[49px] pl-[51px] box-border max-w-full shrink-0 text-center mq1050:pl-[25px] mq1050:pr-6 mq1050:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8.4px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[1] mq1000:text-31xl mq450:text-19xl">
                Create your PITCHINI Account
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-6xl">
                <div className="flex-1 flex flex-col items-start justify-start gap-[59px] max-w-full mq450:gap-[29px_59px]">
                  <div className="self-stretch relative leading-[37px] font-medium mq450:text-xl mq450:leading-[29px]">
                    Are you using PITCHINI as a Recruiter or a Freelancer ?
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <img
                      className="w-[645px] relative max-h-full object-cover max-w-full"
                      loading="lazy"
                      alt=""
                      src="/login02-converti02-1@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <div className="w-[595px] flex flex-row items-start justify-center gap-[9px] max-w-full mq725:flex-wrap">
                      <Button
                        className="h-[79px] flex-[0.4573] min-w-[190px] mq725:flex-1"
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
                        className="h-[79px] flex-1 relative min-w-[190px] mq725:flex-1"
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
                        Recruiter
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pr-[41px] pl-[46px] box-border max-w-full text-13xl text-blue mq1050:pl-[23px] mq1050:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
              <div className="self-stretch rounded-sm bg-silver-200 box-border flex flex-row items-start justify-start py-[23px] px-[22px] max-w-full border-[2px] border-solid border-blue">
                <div className="h-[99px] w-[972px] relative rounded-sm bg-silver-200 box-border hidden max-w-full border-[2px] border-solid border-blue" />
                <div className="h-[53px] w-[301px] relative font-medium inline-block shrink-0 z-[1] mq1000:text-7xl mq450:text-lgi">
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
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
                <TextField
                  className="[border:none] bg-[transparent] h-[99px] flex-1 font-paragraphe font-medium text-13xl text-darkgray-200 max-w-full"
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
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[54px] box-border gap-[59px] max-w-full text-18xl text-grey mq450:pb-[35px] mq450:box-border mq725:gap-[29px_59px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-12 pl-11 box-border max-w-full mq1050:pl-[22px] mq1050:pr-6 mq1050:box-border">
                <div className="flex-1 flex flex-row items-end justify-start max-w-full [row-gap:20px] mq1000:flex-wrap">
                  <div className="h-[86px] w-[86px] relative text-white">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-blue w-full h-full" />
                    <div className="absolute top-[16px] left-[37px] font-semibold inline-block w-3.5 h-[37px] min-w-[14px] z-[1] mq1000:text-11xl mq450:text-3xl">
                      1
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[229px] min-h-[43px] max-w-full mq1000:min-h-[auto]">
                    <div className="self-stretch h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-grey" />
                  </div>
                  <div className="h-[86px] w-[86px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-silver-200 box-border w-full h-full border-[0px] border-solid border-grey" />
                    <div className="absolute top-[13px] left-[32px] font-semibold inline-block w-[22px] h-[43px] min-w-[22px] z-[1] mq1000:text-11xl mq450:text-3xl">
                      2
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[235px] min-h-[43px] max-w-full mq1000:min-h-[auto]">
                    <div className="self-stretch h-[3px] relative box-border z-[1] border-t-[3px] border-solid border-grey" />
                  </div>
                  <div className="h-[86px] w-[86px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-silver-200 box-border w-full h-full border-[0px] border-solid border-grey" />
                    <div className="absolute top-[13px] left-[32px] font-semibold inline-block w-[23px] h-[43px] min-w-[23px] z-[1] mq1000:text-11xl mq450:text-3xl">
                      3
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-center text-11xl mq725:flex-wrap">
                <h3 className="m-0 h-[53px] w-[173px] relative text-inherit font-medium font-inherit text-title inline-block shrink-0 mq1000:text-5xl mq450:text-lg">
                  Full Name
                </h3>
                <h3 className="m-0 h-[53px] w-[242px] relative text-inherit font-medium font-inherit inline-block shrink-0 mq1000:text-5xl mq450:text-lg">
                  Personal Details
                </h3>
                <div className="w-[180.4px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                  <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit [transform:_rotate(0.1deg)] mq1000:text-5xl mq450:text-lg">
                    Completion
                  </h3>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5 box-border max-w-full">
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
          <div className="w-[1041px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base text-gray-3">
            <div className="relative font-medium">
              Copyright © PITCHINI 2024
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JointFreelancerP;
