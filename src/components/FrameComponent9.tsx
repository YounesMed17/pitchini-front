import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const FrameComponent9: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full text-center text-13xl text-darkgray-200 font-paragraphe">
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
        <TextField
          className="[border:none] bg-[transparent] h-[99px] flex-1 font-paragraphe font-medium text-13xl text-darkgray-200 max-w-full"
          placeholder="Domain"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <img width="43.7px" height="43.7px" src="/chevron-down.png" />
            ),
          }}
          sx={{
            "& fieldset": { borderColor: "#c4c4c4" },
            "& .MuiInputBase-root": {
              height: "99px",
              paddingRight: "775.3000000000002px",
              borderRadius: "14px",
              fontSize: "32px",
            },
            "& .MuiInputBase-input": { color: "#a09d9d" },
          }}
        />
      </div>
      <TextField
        className="[border:none] bg-[transparent] self-stretch h-[99px] font-paragraphe font-medium text-13xl text-darkgray-200"
        placeholder="Skills"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <img width="43.7px" height="43.7px" src="/chevron-down-1.png" />
          ),
        }}
        sx={{
          "& fieldset": { borderColor: "#c4c4c4" },
          "& .MuiInputBase-root": {
            height: "99px",
            paddingRight: "826.3000000000002px",
            borderRadius: "14px",
            fontSize: "32px",
          },
          "& .MuiInputBase-input": { color: "#a09d9d" },
        }}
      />
      <div className="self-stretch rounded-sm bg-silver-200 box-border flex flex-col items-center justify-start py-[30px] px-5 gap-[12px] max-w-full border-[2px] border-solid border-blue">
        <div className="w-[601px] flex flex-row items-start justify-center max-w-full">
          <img
            className="h-[104px] w-[152px] relative object-cover"
            loading="lazy"
            alt=""
            src="/icon0101-11@2x.png"
          />
        </div>
        <h2 className="m-0 w-[601px] relative text-inherit font-medium font-inherit inline-block max-w-full mq1050:text-7xl mq450:text-lgi">
          <p className="m-0">
            <span>
              <span className="capitalize">D</span>
              <span className="lowercase">{`rag and `}</span>
              <span className="capitalize">d</span>
              <span className="lowercase">{`rop `}</span>
              <span className="capitalize">f</span>
              <span className="lowercase">ile here</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="lowercase">o</span>
              <span className="capitalize">{`r `}</span>
            </span>
            <span className="[text-decoration:underline] text-blue">
              <span className="capitalize">c</span>
              <span className="lowercase">hoose file</span>
            </span>
          </p>
        </h2>
      </div>
    </div>
  );
};

export default FrameComponent9;
