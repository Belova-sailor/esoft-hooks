import ButtonGroup from "../button-group/button-group";

const AppFilter = (props) => {
  const { data, skills } = props;

  const dataAbove50 = [];
  data.map((item) => {
    if (item.skills > 50) {
      dataAbove50.push(item);
      return console.log(dataAbove50);
    }
  });

  const dataLess50 = [];
  data.map((item) => {
    if (item.skills < 50) {
      dataLess50.push(item);
      return console.log(dataAbove50);
    }
  });

  return (
    <div className="appInfo-wrap">
      <ButtonGroup 
	  data={data} 
	  dataAbove50={dataAbove50}
	  dataLess50={dataLess50} />
    </div>
  );
};

export default AppFilter;
