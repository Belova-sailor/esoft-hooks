import { useState } from "react";
import "./button.css";

const AppButton = ({action}) => {
  const [buttonState, setButtonState] = useState(false);

  function ChangeButtonState() {
    setButtonState(!buttonState);
  }
  
  return (
    <div className="btn-wrap">
      <button
        type="submit"
        className="btn btn-outline-light"
        onClick={() => {
          ChangeButtonState();
        }}
      >
        {action}
      </button>
    </div>
  );
};

export default AppButton;
