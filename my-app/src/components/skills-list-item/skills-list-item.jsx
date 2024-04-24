import './skills-list-item.css';

const SkillsListItem = (props) => {
  const { name, src, skills } = props;
  const skillsLevel = `Изучено: ${skills}%`;

  return (

    <li className="app-list-item">
      <div className="card">
        <a href="#" target="_blank">
          <img src={src} className="img_card" alt="skills image" />
        </a>
		<div className="text-wrap">
		<span>{skillsLevel}</span>
        <h3>{name}</h3>
		</div>
		
      </div>
    </li>
  );
};

export default SkillsListItem;
