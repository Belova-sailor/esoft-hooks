// import AppButton from "../button/button";
import { useEffect, useState } from "react";
import SkillsList from "../skills-list/skills-list";
import "./button-group.css";

const ButtonGroup = (props) => {
  const {data, dataAbove50, dataLess50} = props;
  const [activeAll, setActiveAll] = useState(false);
  const [activeAbove50, setActiveAbove50] = useState(false);
  const [activeLess50, setActiveLess50] = useState(false);

  const showAllSkills = () => {
    setActiveAll(activeAll => !activeAll)
  };

  const showSkillsAbove50 = () => {
    setActiveAbove50(activeAbove50 => !activeAbove50)
  };

  const showSkillsLess50 = () => {
    setActiveLess50(activeLess50 => !activeLess50)
  };

  useEffect(() => {
    const buttonAll = document.querySelector(".skills-all");

    buttonAll.addEventListener("click", showAllSkills);

    return () => {
      buttonAll.removeEventListener("click", showAllSkills);
    };
  }, [activeAll]);

  useEffect(() => {
    const buttonAbove50 = document.querySelector(".skills-above50");

    buttonAbove50.addEventListener("click", showSkillsAbove50);

    return () => {
      buttonAbove50.removeEventListener("click", showSkillsAbove50);
    };
  }, [activeAbove50]);

  useEffect(() => {
    const buttonLess50 = document.querySelector(".skills-less50");

    buttonLess50.addEventListener("click", showSkillsLess50);

    return () => {
      buttonLess50.removeEventListener("click", showSkillsLess50);
    };
  }, [activeLess50]);

  return (
    <div className="btn-wrap">
      <ul className="button-list">
        <button type="submit" className="btn btn-outline-light skills-all">Показать все скилы</button>
        <button type="submit" className="btn btn-outline-light skills-above50">Изучено более 50%</button>
        <button type="submit" className="btn btn-outline-light skills-less50">Изучено менее 50%</button>
        {activeAll && <SkillsList data={data} />}
        {activeAbove50 && <SkillsList data={dataAbove50} />}
        {activeLess50 && <SkillsList data={dataLess50} />}

    </ul>
    </div>
  );
};

export default ButtonGroup;
