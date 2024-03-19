import { FunctionComponent, useState, useCallback } from "react";
import { LinearProgress, Box } from "@mui/material";
import POPUPNotification from "../components/POPUPNotification";
import PortalPopup from "../components/PortalPopup";
import POPUPMessage from "../components/POPUPMessage";
import { useNavigate } from "react-router-dom";
import ScheduleContainer from "../components/ScheduleContainer";

const Dashboard: FunctionComponent = () => {
  const [isPOPUPNotificationOpen, setPOPUPNotificationOpen] = useState(false);
  const [isPOPUPMessageOpen, setPOPUPMessageOpen] = useState(false);
  const navigate = useNavigate();

  const onLogoPitchini1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openPOPUPNotification = useCallback(() => {
    setPOPUPNotificationOpen(true);
  }, []);

  const closePOPUPNotification = useCallback(() => {
    setPOPUPNotificationOpen(false);
  }, []);

  const openPOPUPMessage = useCallback(() => {
    setPOPUPMessageOpen(true);
  }, []);

  const closePOPUPMessage = useCallback(() => {
    setPOPUPMessageOpen(false);
  }, []);

  const onMaskGroupImageClick = useCallback(() => {
    navigate("/portfolio-freelancer");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onMaskGroupImage2Click = useCallback(() => {
    navigate("/portfolio-freelancer");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-white h-[1947px] overflow-hidden text-justify text-13xl text-gray-800 font-join-text">
        <header className="absolute top-[0px] left-[calc(50%_-_960px)] bg-whitesmoke-100 w-[1920px] h-[127px] flex flex-row items-center justify-start pt-[17px] px-[41px] pb-[18px] box-border gap-[1083px] text-center text-xl text-gray-200 font-join-text">
          <img
            className="w-[304px] relative h-[92px] object-cover cursor-pointer"
            alt=""
            src="/logo-pitchini-11@2x.png"
            onClick={onLogoPitchini1Click}
          />
          <div className="w-[395px] h-[66px] flex flex-row items-center justify-start gap-[34px]">
            <img
              className="w-[34px] relative h-10 object-cover cursor-pointer"
              alt=""
              src="/notf01@2x.png"
              onClick={openPOPUPNotification}
            />
            <img
              className="w-11 relative h-10 object-cover cursor-pointer"
              alt=""
              src="/notf02@2x.png"
              onClick={openPOPUPMessage}
            />
            <img
              className="w-12 relative h-10 object-cover"
              alt=""
              src="/notf03@2x.png"
            />
            <div className="relative tracking-[-0.01em] font-medium">
              Orders
            </div>
            <img
              className="w-[66px] relative h-[66px] object-cover cursor-pointer"
              alt=""
              src="/mask-group@2x.png"
              onClick={onMaskGroupImageClick}
            />
          </div>
        </header>
        <div className="absolute top-[187px] left-[1597px] w-[226px] h-[68px] text-left text-base text-dimgray-400 font-montserrat">
          <img
            className="absolute top-[0px] left-[104px] w-0 h-0 object-cover"
            alt=""
            src="/headshotphotographybelfast2-3@2x.png"
          />
          <img
            className="absolute top-[0px] left-[104px] w-0 h-0 object-cover"
            alt=""
            src="/headshotphotographybelfast2-3@2x.png"
          />
          <div className="absolute top-[11px] left-[0px] rounded-lg bg-gainsboro-200 box-border w-[226px] h-[57px] flex flex-col items-start justify-end py-[11px] px-2 border-[1px] border-solid border-grey">
            <div className="w-48 h-[34px] flex flex-row items-center justify-start gap-[3px]">
              <img
                className="w-[34px] relative h-[27px] object-cover opacity-[0.38]"
                alt=""
                src="/vecteezy-notificationiconsvectordesign-10654946-converti05-1@2x.png"
              />
              <div className="w-[155px] relative leading-[120%] font-light flex items-center h-[34px] shrink-0">
                <span className="w-full">
                  S<span className="lowercase">EARCH ...</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[125px] left-[0px] bg-whitesmoke-300 w-[465px] h-[1822px] text-center text-8xl text-gray-200">
          <div className="absolute top-[565px] left-[0px] bg-lightskyblue-200 w-[465px] h-[92px]" />
          <div className="absolute right-[0px] bottom-[1167px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-blue-1 w-[17px] h-[92px]" />
          <div className="absolute top-[2px] left-[0px] bg-whitesmoke-200 w-[465px] h-[1822px]">
            <div className="absolute top-[402px] left-[104px] text-7xl tracking-[-0.01em] leading-[145.45%] font-light text-gray-800 flex items-center justify-center w-[258px] h-[59px]">
              Lorem@gmail.com
            </div>
            <div className="absolute top-[1703px] left-[94px] w-[235px] h-[52px] flex flex-row items-center justify-start gap-[47px] text-left">
              <img
                className="w-[52px] relative h-[52px] object-cover"
                alt=""
                src="/sedeconnecter-1@2x.png"
              />
              <div className="w-[136px] relative font-medium flex items-center h-[47px] shrink-0">
                Log Out
              </div>
            </div>
            <h3 className="m-0 absolute top-[360px] left-[62px] text-29xl tracking-[-0.01em] font-semibold font-inherit flex items-center justify-center w-[342px] h-[47px]">
              LOREM UPSUM
            </h3>
            <img
              className="absolute top-[90px] left-[113px] w-60 h-60 object-cover"
              alt=""
              src="/image@2x.png"
            />
            <div className="absolute top-[584px] left-[94px] w-[268px] h-[635px] text-left">
              <div
                className="absolute top-[2px] left-[97px] font-medium text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[171px] h-[47px] cursor-pointer"
                onClick={onDashboardTextClick}
              >
                Dashboard
              </div>
              <div className="absolute top-[0px] left-[0px] w-12 h-[50.2px]">
                <div className="absolute top-[0px] left-[0px] [background:linear-gradient(99.26deg,_#000)] w-[22.2px] h-[29px]" />
                <div className="absolute top-[21.2px] left-[25.8px] [background:linear-gradient(99.26deg,_#000)] w-[22.2px] h-[29px]" />
                <div className="absolute top-[32.5px] left-[0px] [background:linear-gradient(99.26deg,_#000)] w-[22.2px] h-[17.6px]" />
                <div className="absolute top-[0px] left-[25.8px] [background:linear-gradient(99.26deg,_#000)] w-[22.2px] h-[17.6px]" />
              </div>
              <div className="absolute top-[119px] left-[0px] w-[249px] h-[516px] flex flex-col items-start justify-start gap-[59px]">
                <div className="w-[230px] h-[55px] flex flex-row items-center justify-start gap-[43px]">
                  <img
                    className="w-[55px] relative h-[55px] object-cover opacity-[0.29]"
                    alt=""
                    src="/portfolio-1096059-1@2x.png"
                  />
                  <div className="w-[132px] relative font-medium flex items-center h-[47px] shrink-0 opacity-[0.29]">
                    Portfolio
                  </div>
                </div>
                <div className="w-[249px] h-[71px] flex flex-row items-center justify-start gap-[40px] opacity-[0.29]">
                  <img
                    className="w-[58px] relative h-[71px] object-cover"
                    alt=""
                    src="/102-1@2x.png"
                  />
                  <div className="w-[151px] relative font-medium flex items-center h-[47px] shrink-0">
                    Find Work
                  </div>
                </div>
                <div className="w-[230px] h-[50px] flex flex-row items-center justify-start gap-[42px]">
                  <img
                    className="w-14 relative h-[50px] object-cover opacity-[0.29]"
                    alt=""
                    src="/inbox-1@2x.png"
                  />
                  <div className="w-[132px] relative font-medium flex items-center h-[47px] shrink-0 opacity-[0.29]">
                    Inbox
                  </div>
                </div>
                <div className="w-[228px] h-[52px] flex flex-row items-center justify-start gap-[44px]">
                  <img
                    className="w-[52px] relative h-[52px] object-cover opacity-[0.29]"
                    alt=""
                    src="/groupe-1@2x.png"
                  />
                  <div className="w-[132px] relative font-medium flex items-center h-[47px] shrink-0 opacity-[0.29]">
                    Contact
                  </div>
                </div>
                <div className="w-[230px] h-[52px] flex flex-row items-center justify-start gap-[42px]">
                  <img
                    className="w-14 relative h-[52px] object-cover opacity-[0.29]"
                    alt=""
                    src="/path-8-1@2x.png"
                  />
                  <div className="w-[132px] relative font-medium flex items-center h-[47px] shrink-0 opacity-[0.29]">
                    Settings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[400px] left-[544px] w-[948px] h-[59px] flex flex-row items-center justify-start gap-[83px]">
          <div className="w-[215px] relative tracking-[-0.01em] leading-[145.45%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center h-[59px] shrink-0">
            All projects
          </div>
          <div className="w-[274px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center h-[59px] shrink-0">
            Current projects
          </div>
          <div className="w-[293px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center h-[59px] shrink-0">
            Finished projects
          </div>
        </div>
        <h1 className="m-0 absolute top-[198px] left-[calc(50%_-_416px)] text-[65px] tracking-[0.02em] leading-[131%] font-extrabold font-inherit text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#fe504b,_#f9c928)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block w-[770px] h-[151px]">
          The Only Place To Look For Your Projets
        </h1>
        <div className="absolute top-[973px] left-[544px] w-[609px] h-[604px]">
          <div className="absolute top-[0px] left-[0px] w-[609px] h-[604px] flex flex-col items-start justify-end gap-[51px]">
            <div className="w-[606px] relative tracking-[-0.01em] leading-[145.45%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center h-[59px] shrink-0">
              Tasks for today
            </div>
            <div className="w-[609px] relative h-[494px]">
              <div className="absolute top-[348px] left-[0px] rounded-3xs bg-white shadow-[4px_4px_23.5px_rgba(0,_0,_0,_0.09)] w-[609px] h-[143px]" />
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[4px_4px_23.5px_rgba(0,_0,_0,_0.09)] w-[609px] h-[143px]" />
              <div className="absolute right-[582px] bottom-[348px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-blue-1 w-[27px] h-[146px]" />
              <div className="absolute top-[67px] left-[52px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-72 h-[59px]">
                Prepare Figma File
              </div>
              <div className="absolute top-[174px] left-[0px] rounded-3xs bg-white shadow-[4px_4px_23.5px_rgba(0,_0,_0,_0.09)] w-[609px] h-[143px]" />
              <div className="absolute right-[582px] bottom-[174px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-orange w-[27px] h-[146px]" />
              <div className="absolute top-[241px] left-[52px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[323px] h-[59px]">
                Design Ux Wireframe
              </div>
              <div className="absolute top-[191px] left-[52px] text-14xl leading-[113%] font-semibold text-title text-left flex items-center w-[294px] h-[59px]">
                UX Wireframe
              </div>
              <div className="absolute right-[582px] bottom-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-blue-2 w-[27px] h-[146px]" />
              <div className="absolute top-[415px] left-[52px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-72 h-[59px]">
                Research
              </div>
              <div className="absolute top-[365px] left-[52px] text-14xl leading-[113%] font-semibold text-title text-left flex items-center w-[294px] h-[59px]">
                Mobile App
              </div>
              <div className="absolute top-[13px] left-[52px] text-14xl leading-[113%] font-semibold text-title text-left flex items-center w-[294px] h-[59px]">
                Mobile App
              </div>
            </div>
          </div>
          <div className="absolute top-[134px] left-[541px] rounded-[50%] bg-b w-[47px] h-12 opacity-[0.41]" />
          <div className="absolute top-[308px] left-[541px] rounded-[50%] bg-b w-[47px] h-12 opacity-[0.41]" />
        </div>
        <section className="absolute top-[1628px] left-[544px] w-[1485px] h-64 flex flex-col items-start justify-start gap-[51px] text-justify text-13xl text-white font-join-text">
          <div className="w-[606px] relative tracking-[-0.01em] leading-[145.45%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center h-[59px] shrink-0">
            Interview / Video call
          </div>
          <div className="w-[1485px] h-[146px] flex flex-row items-center justify-start gap-[24px] text-3xl">
            <ScheduleContainer
              meetingDateText="Thursday 14th, 2024"
              meetingPurposeText="Video call for UX wireframe project"
            />
            <div className="w-[479px] relative h-[146px]">
              <div className="absolute top-[2px] left-[0px] rounded-3xs bg-white shadow-[4px_4px_23.5px_rgba(0,_0,_0,_0.09)] w-[479px] h-[143px]" />
              <div className="absolute right-[326px] bottom-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-blue-1 w-[153px] h-[146px]" />
              <b className="absolute top-[44px] left-[8px] leading-[140.63%] flex items-center w-[137px] h-[59px]">
                Wednesday 13th, 2024
              </b>
              <div className="absolute top-[15px] left-[196px] w-[252px] h-[116px] flex flex-col items-start justify-start text-left text-7xl text-title">
                <div className="w-[252px] relative leading-[113%] font-medium flex items-center h-[86px] shrink-0">
                  Video call for Mobile application
                </div>
                <div className="w-[179px] relative text-lgi [text-decoration:underline] tracking-[-0.01em] leading-[145.45%] font-light text-blue-1 text-justify flex items-center h-[37px] shrink-0 mt-[-7px]">{`Join the meeting `}</div>
              </div>
            </div>
            <div className="w-[479px] relative h-[146px]">
              <div className="absolute top-[2px] left-[0px] rounded-3xs bg-white shadow-[4px_4px_23.5px_rgba(0,_0,_0,_0.09)] w-[479px] h-[143px]" />
              <div className="absolute right-[326px] bottom-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-blue-1 w-[153px] h-[146px]" />
              <b className="absolute top-[44px] left-[19px] leading-[140.63%] flex items-center w-[115px] h-[59px]">
                Thursday 7th, 2024
              </b>
              <div className="absolute top-[15px] left-[196px] w-60 h-[116px] flex flex-col items-start justify-start text-left text-7xl text-title">
                <div className="w-60 relative leading-[113%] font-medium flex items-center h-[86px] shrink-0">
                  Video call for UX wireframe project
                </div>
                <div className="w-[179px] relative text-lgi [text-decoration:underline] tracking-[-0.01em] leading-[145.45%] font-light text-blue-1 text-justify flex items-center h-[37px] shrink-0 mt-[-7px]">{`Join the meeting `}</div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute top-[1455px] left-[1085px] rounded-[50%] bg-blue-2 w-[47px] h-12" />
        <img
          className="absolute top-[1451px] left-[1087px] w-[53px] h-[50px] object-cover"
          alt=""
          src="/tick020202-1@2x.png"
        />
        <div className="absolute top-[974px] left-[1172px] w-[677px] h-[431px] flex flex-col items-start justify-start gap-[51px] text-orange">
          <div className="w-[596px] relative tracking-[-0.01em] leading-[145.45%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center h-[59px] shrink-0">
            Domain
          </div>
          <div className="w-[677px] relative h-[321px] text-left text-8xl">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[4px_4px_23.5px_rgba(0,_0,_0,_0.09)] box-border w-[287px] h-[143px] border-[1px] border-solid border-dgrad-color1" />
            <textarea className="bg-white [outline:none] absolute top-[178px] left-[298px] rounded-3xs shadow-[4px_4px_23.5px_rgba(0,_0,_0,_0.09)] box-border w-[379px] h-[143px] border-[1px] border-solid border-dgrad-color1" />
            <div className="absolute top-[0px] left-[298px] rounded-3xs bg-white shadow-[4px_4px_23.5px_rgba(0,_0,_0,_0.09)] box-border w-[379px] h-[143px] border-[1px] border-solid border-dgrad-color1" />
            <textarea className="bg-white [outline:none] absolute top-[178px] left-[0px] rounded-3xs shadow-[4px_4px_23.5px_rgba(0,_0,_0,_0.09)] box-border w-[287px] h-[143px] border-[1px] border-solid border-dgrad-color1" />
            <img
              className="absolute top-[24px] left-[8px] w-[102px] h-24 object-cover"
              alt=""
              src="/icon04-1@2x.png"
            />
            <div className="absolute top-[60px] left-[calc(50%_-_181.5px)] leading-[105%] uppercase font-medium inline-block w-[81px] h-[23px]">
              ui/ux
            </div>
            <div className="absolute top-[241px] left-[calc(50%_-_181.5px)] leading-[105%] uppercase font-medium inline-block w-[81px] h-[23px]">
              seo
            </div>
            <div className="absolute top-[60px] left-[calc(50%_+_134.5px)] leading-[105%] uppercase font-medium inline-block w-[171px] h-[23px]">
              web design
            </div>
            <img
              className="absolute top-[14px] left-[323px] w-[107px] h-[116px] object-cover"
              alt=""
              src="/icon05-1@2x.png"
            />
            <div className="absolute top-[238px] left-[calc(50%_+_134.5px)] leading-[105%] uppercase font-medium inline-block w-[164px] h-[23px]">
              App design
            </div>
            <img
              className="absolute top-[191px] left-[318px] w-[116px] h-[118px] object-cover"
              alt=""
              src="/icon02-1@2x.png"
            />
            <img
              className="absolute top-[192px] left-[12px] w-[103px] h-[118px] object-cover"
              alt=""
              src="/icon03-1@2x.png"
            />
          </div>
        </div>
        <section className="absolute top-[510px] left-[544px] w-[1859px] h-[412px] text-justify text-3xl text-b font-join-text">
          <img
            className="absolute top-[0px] left-[0px] rounded-18xl w-[603px] h-[410px] object-cover opacity-[0.29]"
            alt=""
            src="/rectangle-3184@2x.png"
          />
          <div className="absolute top-[307px] left-[39px] tracking-[-0.01em] leading-[145.45%] font-light whitespace-pre-wrap flex items-center w-[515px] h-8">
            12 Tasks | 61%
          </div>
          <h3 className="m-0 absolute top-[148px] left-[39px] text-31xl leading-[113%] font-semibold font-inherit text-blue-1 text-left flex items-center w-[379.6px] h-[92.4px]">
            Mobile App Design
          </h3>
          <div className="absolute top-[257px] left-[39px] text-5xl tracking-[-0.01em] leading-[145.45%] font-light text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center w-[332.6px] h-[31.9px]">
            Description of the project
          </div>
          <div className="absolute top-[45px] left-[170px] w-[236px] h-[73px] flex flex-col items-start justify-start py-0 pr-0 pl-px box-border text-13xl text-gray-800">
            <div className="w-[235px] relative tracking-[-0.01em] leading-[145.45%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center h-[50px] shrink-0">
              Name Project
            </div>
            <div className="w-[202px] relative text-2xl tracking-[-0.01em] leading-[145.45%] font-light flex items-center h-[25px] shrink-0 mt-[-2px]">
              Description project
            </div>
          </div>
          <div className="absolute top-[61.4px] left-[525.9px] text-12xl tracking-[-0.01em] font-medium text-gray-200 text-center flex items-center justify-center w-[42px] h-[35.3px] [transform:_rotate(90deg)] [transform-origin:0_0]">
            ...
          </div>
          <Box className="absolute top-[346px] left-[39px]" sx={{ width: 514 }}>
            <LinearProgress />
          </Box>
          <div className="absolute top-[0px] left-[628px] w-[603px] h-[410px] text-white">
            <img
              className="absolute top-[0px] left-[0px] rounded-18xl w-[603px] h-[410px] opacity-[0.29]"
              alt=""
              src="/rectangle-3190.svg"
            />
            <div className="absolute top-[307px] left-[39px] tracking-[-0.01em] leading-[145.45%] font-light whitespace-pre-wrap flex items-center w-[515px] h-8">
              16 Tasks | 100%
            </div>
            <h3 className="m-0 absolute top-[148px] left-[39px] text-31xl leading-[113%] font-semibold font-inherit text-orange text-left flex items-center w-[379.6px] h-[92.4px]">
              Facebook brand UI Kit
            </h3>
            <div className="absolute top-[257px] left-[39px] text-5xl tracking-[-0.01em] leading-[145.45%] font-light text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center w-[332.6px] h-[31.9px]">
              Description of the project
            </div>
            <div className="absolute top-[45px] left-[39px] w-[315px] h-[73px] text-13xl text-gray-800">
              <div className="absolute top-[0px] left-[78px] tracking-[-0.01em] leading-[145.45%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[237px] h-[50px]">
                Name Project
              </div>
              <div className="absolute top-[48px] left-[77px] text-2xl tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[202px] h-[25px]">
                Description project
              </div>
              <div className="absolute top-[3.8px] left-[0px] w-[62.1px] h-[62.1px] flex flex-col items-center justify-end">
                <div className="w-[62.1px] relative rounded-[50%] bg-b h-[62.1px] opacity-[0.41]" />
                <img
                  className="w-[30.5px] relative h-[37.8px] object-contain mt-[-46px]"
                  alt=""
                  src="/notf04-3@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[61.4px] left-[525.9px] text-12xl tracking-[-0.01em] font-medium text-gray-200 text-center flex items-center justify-center w-[42px] h-[35.3px] [transform:_rotate(90deg)] [transform-origin:0_0]">
              ...
            </div>
            <div className="absolute top-[346px] left-[39px] rounded-lg bg-white w-[515px] h-3" />
          </div>
          <div className="absolute top-[2px] left-[1256px] w-[603px] h-[410px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-18xl w-[603px] h-[410px] opacity-[0.29]"
              alt=""
              src="/rectangle-3191.svg"
            />
            <div className="absolute top-[307px] left-[39px] tracking-[-0.01em] leading-[145.45%] font-light whitespace-pre-wrap flex items-center w-[515px] h-8">
              12 Tasks | 61%
            </div>
            <h3 className="m-0 absolute top-[148px] left-[39px] text-31xl leading-[113%] font-semibold font-inherit text-blue-1 text-left flex items-center w-[379.6px] h-[92.4px]">
              Mobile App Design
            </h3>
            <div className="absolute top-[257px] left-[39px] text-5xl tracking-[-0.01em] leading-[145.45%] font-light text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center w-[332.6px] h-[31.9px]">
              Description of the project
            </div>
            <div className="absolute top-[45px] left-[39px] w-[303px] h-[73px] text-13xl text-gray-800">
              <div className="absolute top-[0px] left-[78px] tracking-[-0.01em] leading-[145.45%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[225px] h-[50px]">
                Name project
              </div>
              <div className="absolute top-[48px] left-[77.2px] text-2xl tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[202px] h-[25px]">
                Description project
              </div>
              <div className="absolute top-[3.8px] left-[0px] w-[62.1px] h-[62.1px] flex flex-col items-center justify-end">
                <div className="w-[62.1px] relative rounded-[50%] bg-b h-[62.1px] opacity-[0.41]" />
                <img
                  className="w-[30.5px] relative h-[37.8px] object-contain mt-[-46px]"
                  alt=""
                  src="/notf04-3@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[61.4px] left-[525.9px] text-12xl tracking-[-0.01em] font-medium text-gray-200 text-center flex items-center justify-center w-[42px] h-[35.3px] [transform:_rotate(90deg)] [transform-origin:0_0]">
              ...
            </div>
            <div className="absolute top-[346px] left-[39px] rounded-lg bg-lightskyblue-100 w-[514px] flex flex-col items-start justify-center">
              <input
                className="[border:none] [outline:none] bg-white w-[282.2px] relative rounded-lg h-[11.8px]"
                type="text"
              />
            </div>
          </div>
          <div className="absolute top-[55px] left-[39px] w-[114px] h-[52.6px] flex flex-row items-center justify-start text-[18px] text-white">
            <div className="w-[52.3px] relative h-[52.3px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-orange box-border w-[52.3px] h-[52.3px] opacity-[0.41] border-[1px] border-solid border-orange" />
              <div className="absolute top-[13.5px] left-[14.3px] tracking-[-0.01em] leading-[145.45%] font-semibold flex items-center w-[24.4px] h-[25.2px]">
                +9
              </div>
            </div>
            <img
              className="w-[52.6px] relative h-[52.6px] object-cover cursor-pointer ml-[-21px]"
              alt=""
              src="/mask-group@2x.png"
              onClick={onMaskGroupImage2Click}
            />
            <img
              className="w-[52.6px] relative h-[52.6px] object-cover ml-[-21px]"
              alt=""
              src="/group-512998@2x.png"
            />
          </div>
        </section>
      </div>
      {isPOPUPNotificationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPNotification}
        >
          <POPUPNotification onClose={closePOPUPNotification} />
        </PortalPopup>
      )}
      {isPOPUPMessageOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPMessage}
        >
          <POPUPMessage onClose={closePOPUPMessage} />
        </PortalPopup>
      )}
    </>
  );
};

export default Dashboard;
