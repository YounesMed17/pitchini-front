import { FunctionComponent, useState, useCallback } from "react";
import POPUPNotification from "../components/POPUPNotification";
import PortalPopup from "../components/PortalPopup";
import POPUPMessage from "../components/POPUPMessage";
import { useNavigate } from "react-router-dom";

const PortfolioFreelancer: FunctionComponent = () => {
  const [isPOPUPNotificationOpen, setPOPUPNotificationOpen] = useState(false);
  const [isPOPUPMessageOpen, setPOPUPMessageOpen] = useState(false);
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/joint-freelancer-p1");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/joint-freelancer-p1");
  }, [navigate]);

  const onLogoPitchini1Click = useCallback(() => {
    navigate("/home-page");
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

  const onButtonContainer2Click = useCallback(() => {
    navigate("/joint-freelancer-p1");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-white h-[7058px] overflow-hidden text-left text-xl text-grey1 font-paragraphe">
        <section className="absolute top-[1080px] left-[168px] w-[1176px] h-[998px] flex flex-col items-center justify-center gap-[41px] text-center text-17xl text-grey1 font-paragraphe">
          <div className="w-[903px] relative h-[222px]">
            <h3 className="m-0 absolute top-[0px] left-[calc(50%_-_91.5px)] text-inherit leading-[146%] uppercase font-medium font-inherit inline-block w-[183px] h-[62px] opacity-[0.53]">
              Who am i
            </h3>
            <div className="absolute top-[148px] left-[calc(50%_-_451.5px)] text-6xl leading-[146%] font-medium inline-block w-[903px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut bus sed. `}</div>
            <h1 className="m-0 absolute top-[39px] left-[calc(50%_-_236.5px)] text-66xl font-semibold font-inherit text-orange inline-block w-[472px] h-[124px] [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)]">
              About Me
            </h1>
          </div>
          <div className="w-[1176px] relative h-[735px] text-left text-xl text-darkgray-300">
            <div
              className="absolute top-[calc(50%_-_139.5px)] left-[9px] rounded-[23px] bg-grey w-[461px] h-[507px] cursor-pointer text-center font-montserrat"
              onClick={onButtonContainerClick}
            >
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-gray-300" />
              <div className="absolute top-[47.61%] left-[45.25%] tracking-[-0.01em] font-medium text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                Join
              </div>
            </div>
            <div className="absolute top-[392px] left-[calc(50%_-_27px)] text-6xl leading-[146%] text-justify inline-block w-[615px] h-[333px] opacity-[0.81]">
              <p className="m-0">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définitif venant remplacer le faux-texte dès
                qu'il est prêt ou que la mise en page est achevée.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page 
              </p>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[487px] h-[735px] object-cover"
              alt=""
              src="/headshotphotographybelfast2removebgpreview-1@2x.png"
            />
            <h1 className="m-0 absolute top-[238px] left-[calc(50%_-_27px)] text-[64px] tracking-[-0.02em] font-semibold font-inherit text-orange inline-block w-[477px] h-[105px] [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)]">
              <span className="leading-[152.08%]">{`Lorem `}</span>
              <span className="leading-[95.83%]">Upsum</span>
            </h1>
            <div className="absolute top-[321px] left-[calc(50%_-_24px)] text-10xl leading-[146%] uppercase text-darkslategray-100 inline-block w-[235px] h-[43px]">
              UI/UX Designer
            </div>
          </div>
        </section>
        <section className="absolute top-[2943px] left-[172px] w-[1167px] h-[581px] text-center text-6xl text-grey1 font-paragraphe">
          <h3 className="m-0 absolute top-[0px] left-[calc(50%_-_91.5px)] text-17xl leading-[146%] uppercase font-medium font-inherit inline-block w-[183px] h-[62px] opacity-[0.53]">
            SKILLS
          </h3>
          <div className="absolute top-[167px] left-[calc(50%_-_451.5px)] leading-[146%] font-medium inline-block w-[903px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut bus sed. `}</div>
          <h1 className="m-0 absolute top-[43px] left-[calc(50%_-_368.5px)] text-66xl font-semibold font-inherit text-orange inline-block w-[738px] h-[124px] [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)]">
            Why Choose Me
          </h1>
          <div className="absolute top-[325px] left-[0px] w-[1167px] h-64 text-left">
            <div className="absolute top-[0px] left-[calc(50%_-_583.5px)] leading-[146%] font-medium text-center inline-block w-[152px]">
              Photoshop
            </div>
            <div className="absolute top-[219px] left-[calc(50%_-_583.5px)] leading-[146%] font-medium text-center inline-block w-[152px]">
              App Design
            </div>
            <div className="absolute top-[0px] left-[calc(50%_+_54.5px)] leading-[146%] font-medium text-center inline-block w-[152px]">
              Web Design
            </div>
            <div className="absolute top-[219px] left-[calc(50%_+_54.5px)] leading-[146%] font-medium inline-block w-[66px]">
              SEO
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_132.5px)] leading-[146%] font-medium inline-block w-14">
              95%
            </div>
            <div className="absolute top-[219px] left-[calc(50%_-_160.5px)] leading-[146%] font-medium inline-block w-14">
              95%
            </div>
            <div className="absolute top-[0px] left-[calc(50%_+_490.5px)] leading-[146%] font-medium inline-block w-14">
              95%
            </div>
            <div className="absolute top-[219px] left-[calc(50%_+_490.5px)] leading-[146%] font-medium inline-block w-14">
              95%
            </div>
            <div className="absolute top-[37px] left-[0px] w-[529px] h-[30px]">
              <div className="absolute top-[15px] right-[0px] rounded-7xs-5 bg-grey w-[529px] h-[11px]" />
              <div className="absolute top-[15px] right-[55px] rounded-7xs-5 bg-dimgray-300 w-[474px] h-[11px]" />
              <input
                className="cursor-pointer m-0 absolute top-[0px] right-[34px] rounded-111xl bg-title box-border w-8 h-[30px] border-[0.5px] border-solid border-primary-colors-primary-color-dark-blue"
                type="radio"
              />
            </div>
            <div className="absolute top-[42px] left-[638px] w-[529px] h-[30px]">
              <div className="absolute top-[10px] right-[0px] rounded-7xs-5 bg-grey w-[529px] h-[11px]" />
              <div className="absolute top-[10px] right-[65px] rounded-7xs-5 bg-dimgray-300 w-[464px] h-[11px]" />
              <input
                className="cursor-pointer m-0 absolute top-[0px] right-[53px] rounded-111xl bg-title box-border w-8 h-[30px] border-[0.5px] border-solid border-primary-colors-primary-color-dark-blue"
                type="radio"
              />
            </div>
            <div className="absolute top-[184px] left-[0px] w-[529px] h-[30px]">
              <div className="absolute top-[10px] right-[0px] rounded-7xs-5 bg-grey w-[529px] h-[11px]" />
              <div className="absolute top-[10px] right-[67px] rounded-7xs-5 bg-dimgray-300 w-[462px] h-[11px]" />
              <input
                className="cursor-pointer m-0 absolute top-[0px] right-[64px] rounded-111xl bg-title box-border w-8 h-[30px] border-[0.5px] border-solid border-primary-colors-primary-color-dark-blue"
                type="radio"
              />
            </div>
            <div className="absolute top-[184px] left-[638px] w-[529px] h-[30px]">
              <div className="absolute top-[10px] right-[0px] rounded-7xs-5 bg-grey w-[529px] h-[11px]" />
              <div className="absolute top-[10px] right-[65px] rounded-7xs-5 bg-dimgray-300 w-[464px] h-[11px]" />
              <input
                className="cursor-pointer m-0 absolute top-[0px] right-[53px] rounded-111xl bg-title box-border w-8 h-[30px] border-[0.5px] border-solid border-primary-colors-primary-color-dark-blue"
                type="radio"
              />
            </div>
          </div>
        </section>
        <section className="absolute top-[6182px] left-[calc(50%_-_778px)] [background:linear-gradient(99.26deg,_#000)] w-[1570px] h-[913px] flex flex-col items-start justify-end py-[133px] px-[162px] box-border text-left text-5xl text-gray-3 font-paragraphe">
          <div className="w-[1232px] relative h-[646px]">
            <div className="absolute top-[0px] left-[343px] w-[210px] h-[245px]">
              <div className="absolute top-[0px] left-[0px] text-8xl font-semibold text-white">
                Support
              </div>
              <div className="absolute top-[65px] left-[0px] font-medium whitespace-pre-wrap">{`Help  & Support`}</div>
              <div className="absolute top-[113px] left-[0px] font-medium">{`Trust & Safety`}</div>
              <div className="absolute top-[161px] left-[0px] font-medium">
                Become a worker
              </div>
              <div className="absolute top-[209px] left-[0px] font-medium">
                Guides
              </div>
            </div>
            <div className="absolute top-[0px] left-[987px] w-[245px] h-[437px]">
              <div className="absolute top-[0px] left-[0px] text-8xl font-semibold text-white">
                Categories
              </div>
              <div className="absolute top-[65px] left-[0px] font-medium">
                Accessibility
              </div>
              <div className="absolute top-[113px] left-[0px] font-medium">
                Returns Policy
              </div>
              <div className="absolute top-[161px] left-[0px] font-medium">
                Refund Policy
              </div>
              <div className="absolute top-[209px] left-[0px] font-medium">
                Hiring Statistics
              </div>
              <div className="absolute top-[257px] left-[0px] font-medium">
                Hiring Policies
              </div>
              <div className="absolute top-[305px] left-[0px] font-medium">
                Privacy Policies
              </div>
              <div className="absolute top-[353px] left-[0px] font-medium">
                Intellectual property
              </div>
              <div className="absolute top-[401px] left-[0px] font-medium">
                Claims
              </div>
            </div>
            <div className="absolute top-[0px] left-[669px] w-[202px] h-[485px]">
              <div className="absolute top-[0px] left-[0px] text-8xl font-semibold text-white">
                Categories
              </div>
              <div className="absolute top-[65px] left-[0px] font-medium">
                Careers
              </div>
              <div className="absolute top-[113px] left-[0px] font-medium">
                News
              </div>
              <div className="absolute top-[161px] left-[0px] font-medium">
                Customers Story
              </div>
              <div className="absolute top-[209px] left-[0px] font-medium">
                Feedbacks
              </div>
              <div className="absolute top-[257px] left-[0px] font-medium">
                Blogs
              </div>
              <div className="absolute top-[305px] left-[0px] font-medium">
                Partners
              </div>
              <div className="absolute top-[353px] left-[0px] font-medium">
                Events
              </div>
              <div className="absolute top-[401px] left-[0px] font-medium">
                Affiliates
              </div>
              <div className="absolute top-[449px] left-[0px] font-medium">
                Community Hub
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[227px] h-[533px]">
              <div className="absolute top-[0px] left-[0px] text-8xl font-semibold text-white">
                Categories
              </div>
              <div className="absolute top-[65px] left-[0px] font-medium">
                Marketing
              </div>
              <div className="absolute top-[113px] left-[0px] font-medium">{`Design & Graphics`}</div>
              <div className="absolute top-[161px] left-[0px] font-medium">
                Data
              </div>
              <div className="absolute top-[209px] left-[0px] font-medium">
                AI Works
              </div>
              <div className="absolute top-[257px] left-[0px] font-medium">
                Translation
              </div>
              <div className="absolute top-[305px] left-[0px] font-medium">{`Music & Audio`}</div>
              <div className="absolute top-[353px] left-[0px] font-medium">{`Video & Animation`}</div>
              <div className="absolute top-[401px] left-[0px] font-medium">
                Photography
              </div>
              <div className="absolute top-[449px] left-[0px] font-medium">
                Social Media
              </div>
              <div className="absolute top-[497px] left-[0px] font-medium">{`Tech & Devs`}</div>
            </div>
            <div className="absolute top-[610px] left-[3px] font-medium">
              @2023.PITCHINI.All rights reserved.
            </div>
          </div>
        </section>
        <section className="absolute top-[5334px] right-[0px] rounded-[2.63px] bg-silver-100 w-[1512px] h-[848px] text-center text-17xl text-grey1 font-paragraphe">
          <input
            className="[border:none] [outline:none] bg-grey absolute top-[848px] left-[calc(50%_+_756px)] rounded-[2.63px] w-[1512px] h-[339px] [transform:_rotate(-180deg)] [transform-origin:0_0]"
            type="text"
          />
          <h3 className="m-0 absolute top-[31px] left-[calc(50%_-_126px)] text-inherit leading-[146%] uppercase font-medium font-inherit inline-block w-[250px] h-[62px] opacity-[0.53]">
            TESTIMONIALs
          </h3>
          <div className="absolute top-[276px] left-[calc(50%_-_452px)] text-6xl leading-[146%] font-medium inline-block w-[903px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut bus sed. `}</div>
          <h1 className="m-0 absolute top-[80px] left-[calc(50%_-_370px)] text-[76px] leading-[114.12%] font-semibold font-inherit text-orange inline-block w-[738px] h-[191px] [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)]">
            What People Say About Me
          </h1>
          <div className="absolute top-[626px] left-[calc(50%_-_349px)] text-6xl leading-[146%] font-medium inline-block w-[698px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut bus sed. `}</div>
          <div className="absolute top-[775px] left-[calc(50%_-_77px)] text-xl leading-[146%] uppercase text-darkslategray-100 text-left inline-block w-[154px] h-[35px]">
            UI/UX Designer
          </div>
          <h3 className="m-0 absolute top-[721px] left-[calc(50%_-_123px)] text-inherit tracking-[-0.02em] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block w-[247px] h-[49px] [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)]">
            Lorem Upsum
          </h3>
          <img
            className="absolute top-[370px] left-[calc(50%_-_124px)] w-[248px] h-[235px] object-cover"
            alt=""
            src="/mask-group@2x.png"
          />
        </section>
        <section className="absolute top-[3678px] left-[172px] w-[1168px] h-[1563px] text-center text-17xl text-grey1 font-paragraphe">
          <h3 className="m-0 absolute top-[0px] left-[calc(50%_-_108px)] text-inherit leading-[146%] uppercase font-medium font-inherit inline-block w-[215.7px] h-[62px] opacity-[0.53]">
            PORTFOLIO
          </h3>
          <div className="absolute top-[266px] left-[calc(50%_-_407px)] text-6xl leading-[146%] font-medium inline-block w-[813.9px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut bus sed. `}</div>
          <h1 className="m-0 absolute top-[62px] left-[calc(50%_-_583px)] text-66xl leading-[112.94%] font-semibold font-inherit text-orange inline-block w-[1167px] h-[189px] [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)]">
            <p className="m-0">Check My</p>
            <p className="m-0">Wonderful Work</p>
          </h1>
          <h3 className="m-0 absolute top-[404px] left-[calc(50%_-_584px)] text-inherit leading-[146%] uppercase inline-block w-[1158px] h-[54px] opacity-[0.53] text-gray-100 font-inherit">
            <span className="font-semibold">all</span>
            <span className="font-medium text-grey1 whitespace-pre-wrap">
              {" "}
              webdesign app design seo
            </span>
          </h3>
          <div className="absolute top-[521px] left-[0px] w-[1167px] h-[1042px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_+_446px)] left-[calc(50%_-_110.5px)] rounded-[13px] [background:linear-gradient(99.26deg,_#000)] w-[221px] h-[75px]"
              onClick={onButtonClick}
            >
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-gray-300" />
              <div className="absolute top-[32.8%] left-[21.18%] text-xl tracking-[-0.01em] uppercase font-medium font-montserrat text-white text-center">
                Read more
              </div>
            </button>
            <img
              className="absolute top-[0px] right-[591px] w-[281px] h-[426px] object-cover"
              alt=""
              src="/mask-group1@2x.png"
            />
            <img
              className="absolute top-[440px] right-[0px] w-[279px] h-[494px] object-cover"
              alt=""
              src="/mask-group2@2x.png"
            />
            <img
              className="absolute top-[508px] right-[887px] w-[280px] h-[426px] object-cover"
              alt=""
              src="/mask-group3@2x.png"
            />
            <img
              className="absolute top-[508px] right-[295px] w-[281px] h-[426px] object-cover"
              alt=""
              src="/mask-group4@2x.png"
            />
            <img
              className="absolute top-[0px] right-[0px] w-[280px] h-[426px] object-cover"
              alt=""
              src="/mask-group5@2x.png"
            />
            <img
              className="absolute top-[0px] right-[888px] w-[279px] h-[494px] object-cover"
              alt=""
              src="/mask-group6@2x.png"
            />
            <img
              className="absolute top-[0px] right-[296px] w-[280px] h-[494px] object-cover"
              alt=""
              src="/mask-group7@2x.png"
            />
            <img
              className="absolute top-[440px] right-[591px] w-[280px] h-[494px] object-cover"
              alt=""
              src="/mask-group8@2x.png"
            />
          </div>
        </section>
        <section className="absolute top-[2232px] left-[171px] w-[1169px] h-[557px] flex flex-col items-center justify-center gap-[75px] text-center text-17xl text-grey1 font-paragraphe">
          <div className="w-[903px] h-[222px] flex flex-col items-center justify-center">
            <h3 className="m-0 w-[183px] relative text-inherit leading-[146%] uppercase font-medium font-inherit inline-block h-[62px] shrink-0 opacity-[0.53]">
              Service
            </h3>
            <h1 className="m-0 w-[472px] relative text-66xl font-semibold font-inherit text-orange inline-block h-[124px] shrink-0 [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)] mt-[-19px]">
              What I Do
            </h1>
            <div className="w-[903px] relative text-6xl leading-[146%] font-medium inline-block mt-[-19px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut bus sed. `}</div>
          </div>
          <div className="w-[1169px] relative h-[260px] text-8xl text-orange">
            <div className="absolute top-[0px] right-[895px] rounded-9xl bg-white box-border w-[274px] h-[260px] border-[1px] border-solid border-dgrad-color1" />
            <div className="absolute top-[0px] right-[599px] rounded-9xl bg-white box-border w-[274px] h-[260px] border-[1px] border-solid border-dgrad-color1" />
            <div className="absolute top-[0px] right-[303px] rounded-9xl bg-white box-border w-[274px] h-[260px] border-[1px] border-solid border-dgrad-color1" />
            <div className="absolute top-[0px] right-[0px] rounded-9xl bg-white box-border w-[274px] h-[260px] border-[1px] border-solid border-dgrad-color1" />
            <div className="absolute top-[20px] left-[26px] w-[1118px] h-[209px]">
              <div className="absolute top-[172px] left-[calc(50%_-_540px)] leading-[105%] uppercase font-medium inline-block w-[183px] h-[23px]">
                ui/ux
              </div>
              <div className="absolute top-[158px] left-[calc(50%_-_244px)] leading-[105%] uppercase font-medium inline-block w-[183px] h-[51px]">
                <p className="m-0">web</p>
                <p className="m-0">design</p>
              </div>
              <div className="absolute top-[158px] left-[calc(50%_+_52px)] leading-[105%] uppercase font-medium inline-block w-[183px] h-[51px]">
                <p className="m-0">app</p>
                <p className="m-0">design</p>
              </div>
              <div className="absolute top-[171px] left-[calc(50%_+_355px)] leading-[105%] uppercase font-medium inline-block w-[183px] h-[26px]">
                seo
              </div>
              <img
                className="absolute top-[0px] left-[295px] w-56 h-40 object-cover"
                alt=""
                src="/icon05-1@2x.png"
              />
              <img
                className="absolute top-[0px] left-[894px] w-56 h-40 object-cover"
                alt=""
                src="/icon03-1@2x.png"
              />
              <img
                className="absolute top-[0px] left-[592px] w-[222px] h-40 object-cover"
                alt=""
                src="/icon02-1@2x.png"
              />
              <img
                className="absolute top-[0px] left-[0px] w-[222px] h-40 object-cover"
                alt=""
                src="/icon04-1@2x.png"
              />
            </div>
          </div>
        </section>
        <header className="absolute top-[0px] left-[calc(50%_-_756px)] bg-whitesmoke-100 w-[1512px] h-[127px] text-center text-xl text-gray-200 font-paragraphe">
          <img
            className="absolute top-[17px] left-[41px] w-[304px] h-[92px] object-cover cursor-pointer"
            alt=""
            src="/logo-pitchini-11@2x.png"
            onClick={onLogoPitchini1Click}
          />
          <img
            className="absolute top-[43px] left-[1048px] w-[34px] h-10 object-cover cursor-pointer"
            alt=""
            src="/notf01@2x.png"
            onClick={openPOPUPNotification}
          />
          <img
            className="absolute top-[43px] left-[1116px] w-11 h-10 object-cover cursor-pointer"
            alt=""
            src="/notf02@2x.png"
            onClick={openPOPUPMessage}
          />
          <img
            className="absolute top-[43px] left-[1194px] w-12 h-10 object-cover"
            alt=""
            src="/notf03@2x.png"
          />
          <div className="absolute top-[48px] left-[1276px] tracking-[-0.01em] font-medium">
            Orders
          </div>
          <img
            className="absolute top-[30px] left-[1377px] w-[66px] h-[66px] object-cover"
            alt=""
            src="/mask-group9@2x.png"
          />
        </header>
        <div className="absolute top-[127px] left-[-473px] w-[1985px] h-[824px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1985px] h-[777px] object-contain"
            alt=""
            src="/headshotphotographybelfast2-1@2x.png"
          />
          <h3 className="m-0 absolute top-[178px] left-[calc(50%_-_415.5px)] text-17xl leading-[146%] font-medium font-inherit inline-block w-[252px] h-[62px] opacity-[0.53]">
            Hello, I’m
          </h3>
          <div className="absolute top-[327px] left-[calc(50%_-_415.5px)] text-10xl leading-[146%] uppercase text-darkslategray-200 inline-block w-[235px] h-[43px]">
            UI/UX Designer
          </div>
          <h1 className="m-0 absolute top-[206px] left-[calc(50%_-_418.5px)] text-[96px] tracking-[-0.02em] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#fe504b,_#f9c928)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[656px] h-[121px] [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)]">
            Lorem Upsum
          </h1>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_1px)] left-[574px] [background:linear-gradient(99.26deg,_#fe504b,_#f9c928)] w-[165px] h-[75px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-gray-300" />
            <div className="absolute top-[32.8%] left-[24.36%] text-xl tracking-[-0.01em] font-medium font-montserrat text-white text-center">
              Portfolio
            </div>
          </button>
          <img
            className="absolute top-[499px] left-[628px] w-[54px] h-[53px] object-cover"
            alt=""
            src="/sans-titre--103@2x.png"
          />
          <img
            className="absolute top-[499px] left-[686px] w-[53px] h-[53px] object-cover"
            alt=""
            src="/sans-titre--1-plan-de-travail-1@2x.png"
          />
          <img
            className="absolute top-[499px] left-[571px] w-[53px] h-[53px] object-cover"
            alt=""
            src="/sans-titre--102@2x.png"
          />
          <div
            className="absolute top-[calc(50%_+_317px)] left-[calc(50%_-_81.5px)] rounded-[9px] [background:linear-gradient(99.26deg,_#000)] box-border w-[636px] h-[95px] cursor-pointer text-center font-montserrat border-[2px] border-solid border-grey2"
            onClick={onButtonContainer2Click}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-gray-300" />
            <div className="absolute top-[36.95%] left-[46.59%] tracking-[-0.01em] font-medium text-transparent !bg-clip-text [background:linear-gradient(99.26deg,_#000)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
              Join
            </div>
          </div>
          <div className="absolute top-[737px] left-[937px] w-[584px] h-[69px] flex flex-row items-center justify-start gap-[75px] text-center text-13xl text-white">
            <div className="w-[127px] h-[69px] flex flex-col items-center justify-start gap-[1px]">
              <div className="w-[63px] relative leading-[146%] uppercase font-semibold inline-block h-11 shrink-0">
                234
              </div>
              <div className="w-[127px] relative text-mid leading-[146%] uppercase font-light inline-block h-6 shrink-0">
                Happy Clients
              </div>
            </div>
            <div className="w-[186px] h-[68px] flex flex-col items-center justify-start gap-[2px]">
              <div className="w-[58px] relative leading-[146%] uppercase font-semibold inline-block h-11 shrink-0">
                104
              </div>
              <div className="w-[186px] relative text-mid leading-[146%] uppercase text-left inline-block h-[22px] shrink-0">
                <p className="m-0">Projects Completed</p>
              </div>
            </div>
            <div className="w-[121px] h-[69px] flex flex-col items-center justify-start gap-[1px]">
              <div className="w-[58px] relative leading-[146%] uppercase font-semibold inline-block h-11 shrink-0">
                54
              </div>
              <div className="w-[121px] relative text-mid leading-[146%] uppercase text-left inline-block h-6 shrink-0">
                Awards Won
              </div>
            </div>
          </div>
          <div className="absolute top-[751px] left-[1101px] w-[257px] h-[52px] flex flex-row items-start justify-start gap-[256px]">
            <div className="w-0.5 relative box-border h-[54px] border-r-[2px] border-solid border-white" />
            <div className="w-0.5 relative box-border h-[54px] border-r-[2px] border-solid border-white" />
          </div>
          <img
            className="absolute top-[60px] left-[1834px] w-0 h-0 object-cover"
            alt=""
            src="/headshotphotographybelfast2-3@2x.png"
          />
          <input
            className="[outline:none] bg-gainsboro-100 absolute top-[411px] left-[754px] box-border w-[443px] h-[75px] border-[2px] border-solid border-dgrad-color1"
            type="text"
          />
          <div className="absolute top-[437px] left-[771px] tracking-[-0.01em] uppercase font-medium font-montserrat text-dimgray-200 text-center">
            what service are you looking
          </div>
          <img
            className="absolute top-[425px] left-[1139px] w-[39px] h-[45px] object-cover"
            alt=""
            src="/vecteezy-notificationiconsvectordesign-10654946-converti05-1@2x.png"
          />
        </div>
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

export default PortfolioFreelancer;
