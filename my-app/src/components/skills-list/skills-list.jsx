import { useState } from "react";
import SkillsListItem from "../skills-list-item/skills-list-item";
import "./skills-list.css";

const SkillsList = ({ data}) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    return <SkillsListItem key={id} {...itemProps} />;
  });

    return <ul className="app-list">{elements}</ul>;

};

export default SkillsList;
