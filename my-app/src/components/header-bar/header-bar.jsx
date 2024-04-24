import "./header-bar.css";
import Timer from "../timer/timer";
import WindowSize from "../window-size/window-size";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <div className="left-bar-wrap">
        <img
          src="./assets/images/App-logo.png"
          className="App-logo"
          alt="logo"
        />
        <h1 className="header-logo">My skills</h1>
      </div>

      <div className="right-bar-wrap">
        <WindowSize />
        <Timer />
      </div>
    </div>
  );
};

export default HeaderBar;
