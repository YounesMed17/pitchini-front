import { FunctionComponent, useCallback } from "react";

const POPUPNotification: FunctionComponent = () => {
  const onGroupIconClick = useCallback(() => {
    // Please sync "Page notification" to the project
  }, []);

  return (
    <div className="w-[400px] bg-white h-[592px] overflow-hidden max-w-full max-h-full text-center text-2xs text-gray-400 font-paragraphe">
      <div className="absolute top-[0px] left-[calc(50%_-_200px)] bg-whitesmoke-100 w-[400px] h-[71px]" />
      <div className="absolute top-[124px] left-[calc(50%_-_200px)] bg-whitesmoke-100 w-[385px] h-[63px]" />
      <div className="absolute top-[12px] left-[18px] w-[163px] flex flex-col items-start justify-start text-xl text-gray-200">
        <h2 className="m-0 relative text-inherit tracking-[-0.01em] font-medium font-inherit">
          Notifications
        </h2>
        <div className="relative text-2xs tracking-[-0.01em] font-light text-gray-400">
          <span>{`You have `}</span>
          <span className="text-blue">5 Notifications</span>
          <span> today.</span>
        </div>
      </div>
      <h2 className="m-0 absolute top-[89px] left-[19px] text-xl tracking-[-0.01em] font-medium font-inherit text-gray-200">
        Today
      </h2>
      <h2 className="m-0 absolute top-[445px] left-[19px] text-xl tracking-[-0.01em] font-medium font-inherit text-gray-200">
        This week
      </h2>
      <img
        className="absolute top-[22px] left-[353px] w-[27px] h-[27px] object-cover cursor-pointer"
        alt=""
        src="/group-512876@2x.png"
        onClick={onGroupIconClick}
      />
      <div className="absolute top-[384px] left-[38px] w-[315px] h-[51px] text-left">
        <div className="absolute top-[1px] left-[63px] w-[252px] flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.01em] leading-[145.45%] font-light">
            <p className="m-0">
              Le lorem ipsum est, en imprimerie, une suite de
            </p>
            <p className="m-0">
              <span>mots sans signification utilisée à titr</span>
              <span className="text-gray-1100">e provisoire</span>
              <span className="text-gray-400"> </span>
            </p>
          </div>
          <div className="relative tracking-[-0.01em] font-light text-gray-1200 text-center">
            1 semaine
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-b w-[51px] h-[51px] opacity-[0.41]" />
        <img
          className="absolute top-[11px] left-[13px] w-[25px] h-[30px] object-cover"
          alt=""
          src="/notf011@2x.png"
        />
      </div>
      <div className="absolute top-[322px] left-[38px] w-[327px] h-[51px] text-gray-500 font-montserrat">
        <div className="absolute top-[10px] left-[63px] w-[141px] flex flex-col items-start justify-start text-left font-paragraphe">
          <div className="w-[84px] relative tracking-[-0.01em] leading-[145.45%] uppercase font-medium flex items-center h-[15px] shrink-0">
            Le lorem ipsum
          </div>
          <div className="w-[141px] relative tracking-[-0.01em] font-light text-gray-1000 text-center flex items-center justify-center h-4 shrink-0">
            Send you a request to you.
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-b w-[51px] h-[51px] opacity-[0.41]" />
        <img
          className="absolute top-[11px] left-[13px] w-[25px] h-[29px] object-cover"
          alt=""
          src="/notf04-1@2x.png"
        />
        <div className="absolute top-[calc(50%_-_13.5px)] left-[224px] bg-blue w-12 h-[27px] text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-gray-300" />
          <div className="absolute top-[27.41%] left-[9.58%] tracking-[-0.01em] font-medium">
            Accept
          </div>
        </div>
        <div className="absolute top-[37.25%] left-[86.24%] tracking-[-0.01em] font-medium text-orange">
          Decline
        </div>
        <div className="absolute top-[12px] left-[279px] box-border w-12 h-[27px] border-[1px] border-solid border-dgrad-color1" />
      </div>
      <div className="absolute top-[260px] left-[38px] w-[315px] h-[51px] text-left">
        <div className="absolute top-[1px] left-[63px] w-[252px] flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.01em] leading-[145.45%] font-light">
            <p className="m-0">
              Le lorem ipsum est, en imprimerie, une suite de
            </p>
            <p className="m-0">
              <span>mots sans signification utilisée à titr</span>
              <span className="text-gray-1100">e provisoire</span>
              <span className="text-gray-400"> </span>
            </p>
          </div>
          <div className="relative tracking-[-0.01em] font-light text-gray-1200 text-center">
            1 semaine
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-b w-[51px] h-[51px] opacity-[0.41]" />
        <img
          className="absolute top-[11px] left-[13px] w-[25px] h-[30px] object-cover"
          alt=""
          src="/notf011@2x.png"
        />
      </div>
      <div className="absolute top-[198px] left-[38px] w-[327px] h-[51px] text-gray-500 font-montserrat">
        <div className="absolute top-[10px] left-[63px] w-[141px] flex flex-col items-start justify-start text-left font-paragraphe">
          <div className="w-[84px] relative tracking-[-0.01em] leading-[145.45%] uppercase font-medium flex items-center h-[15px] shrink-0">
            Le lorem ipsum
          </div>
          <div className="w-[141px] relative tracking-[-0.01em] font-light text-gray-1000 text-center flex items-center justify-center h-4 shrink-0">
            Send you a request to you.
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-b w-[51px] h-[51px] opacity-[0.41]" />
        <img
          className="absolute top-[11px] left-[13px] w-[25px] h-[29px] object-cover"
          alt=""
          src="/notf04-1@2x.png"
        />
        <div className="absolute top-[calc(50%_-_13.5px)] left-[224px] bg-blue w-12 h-[27px] text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-gray-300" />
          <div className="absolute top-[27.41%] left-[9.58%] tracking-[-0.01em] font-medium">
            Accept
          </div>
        </div>
        <div className="absolute top-[37.25%] left-[86.24%] tracking-[-0.01em] font-medium text-orange">
          Decline
        </div>
        <div className="absolute top-[12px] left-[279px] box-border w-12 h-[27px] border-[1px] border-solid border-dgrad-color1" />
      </div>
      <div className="absolute top-[131px] left-[38px] w-[315px] h-[51px] text-left">
        <div className="absolute top-[1px] left-[63px] w-[252px] flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.01em] leading-[145.45%] font-light">
            <p className="m-0">
              Le lorem ipsum est, en imprimerie, une suite de
            </p>
            <p className="m-0">
              <span>mots sans signification utilisée à titr</span>
              <span className="text-gray-1100">e provisoire</span>
              <span className="text-gray-400"> </span>
            </p>
          </div>
          <div className="relative tracking-[-0.01em] font-light text-gray-1200 text-center">
            1 semaine
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-b w-[51px] h-[51px] opacity-[0.41]" />
        <img
          className="absolute top-[11px] left-[13px] w-[25px] h-[30px] object-cover"
          alt=""
          src="/notf011@2x.png"
        />
      </div>
      <div className="absolute top-[490px] left-[38px] w-[315px] h-[51px] text-left">
        <div className="absolute top-[1px] left-[63px] w-[252px] flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.01em] leading-[145.45%] font-light">
            <p className="m-0">
              Le lorem ipsum est, en imprimerie, une suite de
            </p>
            <p className="m-0">
              <span>mots sans signification utilisée à titr</span>
              <span className="text-gray-1100">e provisoire</span>
              <span className="text-gray-400"> </span>
            </p>
          </div>
          <div className="relative tracking-[-0.01em] font-light text-gray-1200 text-center">
            1 semaine
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-b w-[51px] h-[51px] opacity-[0.41]" />
        <img
          className="absolute top-[11px] left-[13px] w-[25px] h-[30px] object-cover"
          alt=""
          src="/notf011@2x.png"
        />
      </div>
      <div className="absolute top-[552px] left-[38px] w-[315px] h-[51px] text-left">
        <div className="absolute top-[1px] left-[63px] w-[252px] flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.01em] leading-[145.45%] font-light">
            <p className="m-0">
              Le lorem ipsum est, en imprimerie, une suite de
            </p>
            <p className="m-0">
              <span>mots sans signification utilisée à titr</span>
              <span className="text-gray-1100">e provisoire</span>
              <span className="text-gray-400"> </span>
            </p>
          </div>
          <div className="relative tracking-[-0.01em] font-light text-gray-1200 text-center">
            1 semaine
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-b w-[51px] h-[51px] opacity-[0.41]" />
        <img
          className="absolute top-[11px] left-[13px] w-[25px] h-[30px] object-cover"
          alt=""
          src="/notf011@2x.png"
        />
      </div>
      <img
        className="absolute top-[71px] left-[calc(50%_+_185px)] w-[15px] h-[521px] object-cover"
        alt=""
        src="/scroll@2x.png"
      />
    </div>
  );
};

export default POPUPNotification;
