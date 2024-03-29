import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ScheduleContainerType = {
  meetingDateText?: string;
  meetingPurposeText?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
};

const ScheduleContainer: FunctionComponent<ScheduleContainerType> = ({
  meetingDateText,
  meetingPurposeText,
  propLeft,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const thursday14th2024Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const videoCallForStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className="w-[479px] relative h-[146px] text-justify text-3xl text-white font-paragraphe">
      <div className="absolute top-[2px] left-[0px] rounded-3xs bg-white shadow-[4px_4px_23.5px_rgba(0,_0,_0,_0.09)] w-[479px] h-[143px]" />
      <div className="absolute right-[326px] bottom-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-blue w-[153px] h-[146px]" />
      <b
        className="absolute top-[44px] left-[19px] leading-[140.63%] flex items-center w-[115px] h-[59px]"
        style={thursday14th2024Style}
      >
        {meetingDateText}
      </b>
      <div
        className="absolute top-[15px] left-[196px] w-60 h-[116px] flex flex-col items-start justify-start text-left text-7xl text-title"
        style={frameDiv1Style}
      >
        <div
          className="w-60 relative leading-[113%] font-medium flex items-center h-[86px] shrink-0"
          style={videoCallForStyle}
        >
          {meetingPurposeText}
        </div>
        <div className="w-[179px] relative text-lgi [text-decoration:underline] tracking-[-0.01em] leading-[145.45%] font-light text-blue text-justify flex items-center h-[37px] shrink-0 mt-[-7px]">{`Join the meeting `}</div>
      </div>
    </div>
  );
};

export default ScheduleContainer;
