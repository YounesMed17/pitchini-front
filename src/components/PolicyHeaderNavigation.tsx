import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const PolicyHeaderNavigation: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/joint-freelancer-p1");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    // Please sync "Contact Page " to the project
  }, []);

  const onLoginTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <header className="absolute top-[17px] left-[41px] w-[1416px] h-[92px] flex flex-row items-center justify-start gap-[516px]">
      <img
        className="w-[304px] relative h-[92px] object-cover"
        alt=""
        src="/logo-pitchini-11@2x.png"
      />
      <div className="w-[596px] h-10 flex flex-row items-center justify-end gap-[56px]">
        <nav className="m-0 flex flex-row items-start justify-start gap-[54px] text-center text-xl text-gray-200 font-join-text">
          <div className="relative tracking-[-0.01em] font-medium">
            Policies
          </div>
          <div className="relative tracking-[-0.01em] font-medium">
            Discover
          </div>
          <div
            className="relative tracking-[-0.01em] font-medium cursor-pointer"
            onClick={onContactTextClick}
          >
            Contact
          </div>
          <div
            className="relative tracking-[-0.01em] font-medium cursor-pointer"
            onClick={onLoginTextClick}
          >
            Login
          </div>
        </nav>
        <Button
          actionButtonText="Join"
          buttonWidth="86px"
          buttonPosition="relative"
          rectangleDivBackgroundColor="#000"
          registerTop="20%"
          registerLeft="25%"
          registerFontSize="20px"
          onButtonContainerClick={onButtonContainerClick}
        />
      </div>
    </header>
  );
};

export default PolicyHeaderNavigation;
