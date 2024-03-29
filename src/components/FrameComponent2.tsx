import { FunctionComponent } from "react";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-7 pr-5 pl-[22px] box-border max-w-full shrink-0 text-left text-9xl text-darkgray-200 font-paragraphe">
      <div className="w-[972px] flex flex-col items-start justify-start gap-[19px] max-w-full">
        <div className="self-stretch h-[53px] relative text-13xl uppercase font-medium text-blue inline-block shrink-0 mq1050:text-7xl mq450:text-lgi">
          <p className="m-0">What are you looking to get done?</p>
        </div>
        <div className="self-stretch rounded-sm bg-silver-200 box-border flex flex-col items-start justify-start pt-[25px] pb-5 pr-[15px] pl-6 gap-[279px] max-w-full border-[2px] border-solid border-grey mq1050:gap-[139px_279px] mq750:gap-[70px_279px] mq450:pt-5 mq450:box-border">
          <div className="w-[972px] h-[408px] relative rounded-sm bg-silver-200 box-border hidden max-w-full border-[2px] border-solid border-grey" />
          <div className="w-[745px] relative inline-block max-w-full z-[1] mq450:text-3xl">
            I need ...
          </div>
          <div className="self-stretch flex flex-row items-start justify-end">
            <div className="w-[109px] relative inline-block shrink-0 z-[1] mq450:text-3xl">
              0/2000
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[5px] box-border max-w-full">
            <div className="w-[403px] relative inline-block shrink-0 max-w-full mq450:text-3xl">
              <p className="m-0">*Enter a detailed description</p>
            </div>
          </div>
          <div className="self-stretch h-[202px] rounded-sm bg-silver-200 box-border flex flex-col items-start justify-start py-[25px] px-[362px] gap-[1px] max-w-full text-center text-13xl text-blue border-[2px] border-solid border-blue mq1050:pl-[181px] mq1050:pr-[181px] mq1050:box-border mq750:pl-[90px] mq750:pr-[90px] mq750:box-border">
            <div className="w-[972px] h-[202px] relative rounded-sm bg-silver-200 box-border hidden max-w-full border-[2px] border-solid border-blue" />
            <div className="w-[207px] flex-1 flex flex-row items-start justify-start py-0 pr-[27px] pl-[27.5px] box-border">
              <img
                className="h-[104px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/icon0101-1@2x.png"
              />
            </div>
            <div className="w-[207px] relative capitalize font-medium inline-block z-[1] mq1050:text-7xl mq450:text-lgi">
              Attach Files
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end">
            <div className="h-[53px] relative inline-block mq450:text-3xl">
              * Attach up to 5 files totaling a max of 5 GB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
