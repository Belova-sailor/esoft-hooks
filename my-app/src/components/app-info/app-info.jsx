import ButtonGroup from "../button-group/button-group";
import "./app-info.css";

const AppInfo = () => {
  return (
    <div className="app-info">
		<div className="img-wrap">
		<span className="circle-image">
        <img
          src="./assets/images/info-img.jpg"
          className="info-img"
          alt="logo"
        />
      </span>
      <h2 className="info-name">Юлия Белова</h2>
		</div>
    </div>
  );
};

export default AppInfo;
