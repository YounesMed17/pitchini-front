import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonType = {
  actionButtonText?: string;

  /** Style props */
  buttonWidth?: CSSProperties["width"];
  buttonPosition?: CSSProperties["position"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  registerTop?: CSSProperties["top"];
  registerLeft?: CSSProperties["left"];
  registerFontSize?: CSSProperties["fontSize"];

  /** Action props */
  onButtonContainerClick?: () => void;
};

const Button: FunctionComponent<ButtonType> = ({
  actionButtonText,
  buttonWidth,
  buttonPosition,
  rectangleDivBackgroundColor,
  registerTop,
  registerLeft,
  registerFontSize,
  onButtonContainerClick,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonWidth,
      position: buttonPosition,
    };
  }, [buttonWidth, buttonPosition]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const registerStyle: CSSProperties = useMemo(() => {
    return {
      top: registerTop,
      left: registerLeft,
      fontSize: registerFontSize,
    };
  }, [registerTop, registerLeft, registerFontSize]);

  return (
    <div
      className="w-[130px] h-10 text-center text-[15px] text-white font-montserrat"
      style={buttonStyle}
      onClick={onButtonContainerClick}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-actionable-item"
        style={rectangleDivStyle}
      />
      <div
        className="absolute top-[27.5%] left-[26.15%] tracking-[-0.01em] font-medium"
        style={registerStyle}
      >
        {actionButtonText}
      </div>
    </div>
  );
};

export default Button;
