import { FunctionComponent, useState, useCallback } from "react";
import POPUPNotification from "../components/POPUPNotification";
import PortalPopup from "../components/PortalPopup";
import POPUPMessage from "../components/POPUPMessage";
import { useNavigate } from "react-router-dom";
import ContainerWithFormAndRadios from "../components/ContainerWithFormAndRadios";

const PageDiscussions: FunctionComponent = () => {
  const [isPOPUPNotificationOpen, setPOPUPNotificationOpen] = useState(false);
  const [isPOPUPMessageOpen, setPOPUPMessageOpen] = useState(false);
  const navigate = useNavigate();

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

  const onMaskGroupImageClick = useCallback(() => {
    navigate("/portfolio-freelancer");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-white h-[1698px] overflow-hidden text-left text-5xl text-gray-400 font-paragraphe">
        <div className="absolute top-[459px] left-[calc(50%_-_756px)] bg-whitesmoke-100 w-[523px] h-[167px]" />
        <div className="absolute top-[127px] left-[calc(50%_-_200px)] bg-lightblue w-[956px] h-[253px]" />
        <div className="absolute top-[0px] left-[calc(50%_-_756px)] bg-whitesmoke-100 w-[1512px] h-[127px]" />
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
        <div className="absolute top-[48px] left-[1276px] text-xl tracking-[-0.01em] font-medium text-gray-200 text-center">
          Orders
        </div>
        <img
          className="absolute top-[187px] left-[1361px] w-0 h-0 object-cover"
          alt=""
          src="/headshotphotographybelfast2-3@2x.png"
        />
        <img
          className="absolute top-[30px] left-[1377px] w-[66px] h-[66px] object-cover cursor-pointer"
          alt=""
          src="/mask-group9@2x.png"
          onClick={onMaskGroupImageClick}
        />
        <div className="absolute top-[726.9px] left-[1074.9px] box-border w-[151.7px] h-[85.3px] hidden border-[1px] border-solid border-dgrad-color1" />
        <div className="absolute top-[169px] left-[27px] text-[40px] tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[267px] h-[47px]">
          DISCUSSIONS
        </div>
        <div className="absolute top-[352px] left-[27px] text-8xl tracking-[-0.01em] font-medium text-blue flex items-center w-[158px] h-[58px]">
          Messagerie
        </div>
        <div className="absolute top-[352px] left-[224px] text-8xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[210px] h-[58px]">
          Communautés
        </div>
        <div className="absolute top-[1421px] left-[706px] tracking-[-0.01em] leading-[145.45%] font-light text-justify flex items-center w-[480px] h-20 text-title">
          <span className="w-full">
            <p className="m-0">Creative Breif - Appalo Design website</p>
            <p className="m-0 text-gray-400">22.85MB</p>
          </span>
        </div>
        <div className="absolute top-[1340px] left-[596px] text-13xl tracking-[-0.01em] leading-[145.45%] font-light text-gray-800 text-justify flex items-center w-[228px] h-[59px]">
          ATTACHMENT
        </div>
        <div className="absolute top-[1653px] left-[630px] tracking-[-0.01em] leading-[145.45%] font-light text-gray-800 text-justify flex items-center w-[65px] h-7">
          Reply
        </div>
        <div className="absolute top-[1656px] left-[767px] tracking-[-0.01em] leading-[145.45%] font-light text-gray-800 text-justify flex items-center w-[97px] h-[23px]">
          Forward
        </div>
        <div className="absolute top-[230px] left-[790px] text-29xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[440px] h-[47px]">
          LOREM UPSUM
        </div>
        <img
          className="absolute top-[172px] left-[606px] w-[163.5px] h-[163.5px]"
          alt=""
          src="/group-5129181.svg"
        />
        <div className="absolute top-[236px] left-[1182px] tracking-[-0.01em] font-light text-right flex items-center w-[280px]">
          11:03 am ( 23 hours ago)
        </div>
        <ContainerWithFormAndRadios />
        <div className="absolute top-[666px] left-[64px] w-[447px] h-[114.5px]">
          <div className="absolute top-[0.5px] left-[130px] text-13xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[219px] h-[47px]">
            LOREM UPSUM
          </div>
          <div className="absolute top-[44.5px] left-[130px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[268px] h-[70px]">
            Hello, lorem ipsum est, en imprimerie, une ...
          </div>
          <div className="absolute top-[83.5px] left-[398px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[49px] h-7">
            11:03
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[114px] h-[114px]"
            alt=""
            src="/group-5129183.svg"
          />
        </div>
        <div className="absolute top-[822.5px] left-[64px] w-[447px] h-[114.5px]">
          <div className="absolute top-[0.5px] left-[130px] text-13xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[219px] h-[47px]">
            LOREM UPSUM
          </div>
          <div className="absolute top-[44.5px] left-[130px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[268px] h-[70px]">
            Hello, lorem ipsum est, en imprimerie, une ...
          </div>
          <div className="absolute top-[83.5px] left-[398px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[49px] h-7">
            11:03
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[114px] h-[114px]"
            alt=""
            src="/group-5129183.svg"
          />
        </div>
        <div className="absolute top-[979px] left-[64px] w-[447px] h-[114.5px]">
          <div className="absolute top-[0.5px] left-[130px] text-13xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[219px] h-[47px]">
            LOREM UPSUM
          </div>
          <div className="absolute top-[44.5px] left-[130px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[268px] h-[70px]">
            Hello, lorem ipsum est, en imprimerie, une ...
          </div>
          <div className="absolute top-[83.5px] left-[398px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[49px] h-7">
            11:03
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[114px] h-[114px]"
            alt=""
            src="/group-5129183.svg"
          />
        </div>
        <div className="absolute top-[1135.5px] left-[64px] w-[447px] h-[114.5px]">
          <div className="absolute top-[0.5px] left-[130px] text-13xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[219px] h-[47px]">
            LOREM UPSUM
          </div>
          <div className="absolute top-[44.5px] left-[130px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[268px] h-[70px]">
            Hello, lorem ipsum est, en imprimerie, une ...
          </div>
          <div className="absolute top-[83.5px] left-[398px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[49px] h-7">
            11:03
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[114px] h-[114px]"
            alt=""
            src="/group-5129183.svg"
          />
        </div>
        <div className="absolute top-[1292px] left-[64px] w-[447px] h-[114.5px]">
          <div className="absolute top-[0.5px] left-[130px] text-13xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[219px] h-[47px]">
            LOREM UPSUM
          </div>
          <div className="absolute top-[44.5px] left-[130px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[268px] h-[70px]">
            Hello, lorem ipsum est, en imprimerie, une ...
          </div>
          <div className="absolute top-[83.5px] left-[398px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[49px] h-7">
            11:03
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[114px] h-[114px]"
            alt=""
            src="/group-5129183.svg"
          />
        </div>
        <div className="absolute top-[1448.5px] left-[64px] w-[447px] h-[114.5px]">
          <div className="absolute top-[0.5px] left-[130px] text-13xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[219px] h-[47px]">
            LOREM UPSUM
          </div>
          <div className="absolute top-[44.5px] left-[130px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[268px] h-[70px]">
            Hello, lorem ipsum est, en imprimerie, une ...
          </div>
          <div className="absolute top-[83.5px] left-[398px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[49px] h-7">
            11:03
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[114px] h-[114px]"
            alt=""
            src="/group-5129183.svg"
          />
        </div>
        <div className="absolute top-[1605px] left-[64px] w-[447px] h-[114.5px]">
          <div className="absolute top-[0.5px] left-[130px] text-13xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[219px] h-[47px]">
            LOREM UPSUM
          </div>
          <div className="absolute top-[44.5px] left-[130px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[268px] h-[70px]">
            Hello, lorem ipsum est, en imprimerie, une ...
          </div>
          <div className="absolute top-[83.5px] left-[398px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[49px] h-7">
            11:03
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[114px] h-[114px]"
            alt=""
            src="/group-5129183.svg"
          />
        </div>
        <div className="absolute top-[1761.5px] left-[64px] w-[447px] h-[114.5px]">
          <div className="absolute top-[0.5px] left-[130px] text-13xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[219px] h-[47px]">
            LOREM UPSUM
          </div>
          <div className="absolute top-[44.5px] left-[130px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[268px] h-[70px]">
            Hello, lorem ipsum est, en imprimerie, une ...
          </div>
          <div className="absolute top-[83.5px] left-[398px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[49px] h-7">
            11:03
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[114px] h-[114px]"
            alt=""
            src="/group-5129183.svg"
          />
        </div>
        <div className="absolute top-[1918px] left-[64px] w-[447px] h-[114.5px]">
          <div className="absolute top-[0.5px] left-[130px] text-13xl tracking-[-0.01em] font-medium text-gray-200 flex items-center w-[219px] h-[47px]">
            LOREM UPSUM
          </div>
          <div className="absolute top-[44.5px] left-[130px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[268px] h-[70px]">
            Hello, lorem ipsum est, en imprimerie, une ...
          </div>
          <div className="absolute top-[83.5px] left-[398px] tracking-[-0.01em] leading-[145.45%] font-light flex items-center w-[49px] h-7">
            11:03
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[114px] h-[114px]"
            alt=""
            src="/group-5129183.svg"
          />
        </div>
        <div className="absolute top-[397px] left-[calc(50%_-_233px)] bg-whitesmoke-100 w-[33px] h-[1702px]" />
        <div className="absolute top-[447px] left-[calc(50%_-_225px)] bg-darkgray-100 w-[18px] h-[629px]" />
        <img
          className="absolute top-[410px] left-[528px] w-[23px] h-[17px]"
          alt=""
          src="/polygon-1.svg"
        />
        <div className="absolute top-[260px] left-[70px] leading-[120%] font-light font-montserrat text-dimgray-500 flex items-center w-[427px]">
          <span className="w-full">
            S<span className="lowercase">EARCH MESSAGES</span>
          </span>
        </div>
        <img
          className="absolute top-[262px] left-[27px] w-8 h-[26px] object-cover"
          alt=""
          src="/vecteezy-notificationiconsvectordesign-10654946-converti05-11@2x.png"
        />
        <div className="absolute top-[300.5px] left-[calc(50%_-_729.5px)] box-border w-[471px] h-px border-t-[1px] border-solid border-dimgray-100" />
        <img
          className="absolute top-[1653px] left-[528px] w-[23px] h-[17px] object-contain"
          alt=""
          src="/polygon-2.svg"
        />
        <div className="absolute top-[1421px] left-[594px] bg-orange w-20 h-20" />
        <div className="absolute top-[1444px] left-[610px] text-8xl tracking-[-0.01em] leading-[145.45%] uppercase font-light text-white text-justify flex items-center w-12 h-[35px]">
          pdf
        </div>
        <div className="absolute top-[1622.5px] left-[593.5px] box-border w-[850px] h-px opacity-[0.81] border-t-[1px] border-solid border-gray-900" />
        <img
          className="absolute top-[1653px] left-[727px] w-7 h-7 object-cover opacity-[0.44]"
          alt=""
          src="/droite-1@2x.png"
        />
        <img
          className="absolute top-[1655px] left-[594px] w-6 h-6 object-cover opacity-[0.44]"
          alt=""
          src="/repondre-1@2x.png"
        />
        <div className="absolute top-[163px] left-[389px] w-[122px] h-[58px] text-right text-gray-200">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-b w-[57px] h-[58px] opacity-[0.41]" />
          <div className="absolute top-[0px] left-[65px] rounded-[50%] bg-b w-[57px] h-[58px] opacity-[0.41]" />
          <img
            className="absolute top-[15px] left-[15px] w-7 h-7 object-cover"
            alt=""
            src="/edition-1@2x.png"
          />
          <div className="absolute top-[15px] left-[85px] tracking-[-0.01em] font-medium flex items-center w-[17px] h-[18px]">
            ...
          </div>
        </div>
        <div className="absolute top-[719px] left-[615px] w-[863px] h-[226px] flex flex-row items-center justify-end py-0 px-[74px] box-border text-justify">
          <img
            className="w-[863px] relative h-[226px] object-contain"
            alt=""
            src="/chat04@2x.png"
          />
          <div className="w-[745px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center h-[109.2px] shrink-0 ml-[-819px]">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla
          </div>
        </div>
        <div className="absolute top-[448px] left-[602px] w-[863px] h-[219px] flex flex-col items-end justify-center py-0 px-[46px] box-border bg-[url('/public/frame-513046@3x.png')] bg-cover bg-no-repeat bg-[top] text-justify text-white">
          <div className="w-[745px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center h-[105.8px] shrink-0">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla
          </div>
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

export default PageDiscussions;
