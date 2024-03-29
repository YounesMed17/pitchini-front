import { FunctionComponent } from "react";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full text-left text-13xl text-blue font-paragraphe">
      <div className="w-[972px] flex flex-col items-start justify-start gap-[11px] max-w-full">
        <div className="self-stretch h-[53px] relative uppercase font-medium inline-block shrink-0 mq1050:text-7xl mq450:text-lgi">
          <p className="m-0">Which category best fits your project?</p>
        </div>
        <div className="self-stretch rounded-sm bg-silver-200 box-border flex flex-row flex-wrap items-start justify-start py-[23px] pr-[15px] pl-6 gap-[10px] max-w-full text-darkgray-200 border-[2px] border-solid border-grey">
          <div className="h-[99px] w-[972px] relative rounded-sm bg-silver-200 box-border hidden max-w-full border-[2px] border-solid border-grey" />
          <div className="h-[53px] flex-1 relative inline-block min-w-[303px] max-w-full z-[1] mq1050:text-7xl mq450:text-lgi">
            Website builders design
          </div>
          <div className="h-[48.7px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <img
              className="w-[43.7px] h-[43.7px] relative object-cover z-[1]"
              alt=""
              src="/chevron-down@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
