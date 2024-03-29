import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ContainerWithFormAndRadiosType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const ContainerWithFormAndRadios: FunctionComponent<
  ContainerWithFormAndRadiosType
> = ({ propTop }) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[500px] left-[64px] w-[447px] h-[114.5px] text-left text-5xl text-gray-400 font-paragraphe"
      style={frameDivStyle}
    >
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
        src="/group-5129182.svg"
      />
    </div>
  );
};

export default ContainerWithFormAndRadios;
