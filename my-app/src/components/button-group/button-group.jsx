import AppButton from "../button/button";
import "./button-group.css";

const ButtonGroup = () => {
  const dataAction = [
    { action: "Показать скилы", id: 1 },
    // {action: 'Скрыть скилы', id: 2},
    { action: "Изучено более 50%", id: 3 },
    { action: "Изучено менее 50%", id: 4 },
  ];

  const buttons = dataAction.map((item) => {
    const { id, ...itemProps } = item;
    const actionName = item.action;

    return <AppButton action={actionName} key={id} {...itemProps} />;
  });

  return (
    <div className="btn-group-wrap">
      <ul className="button-list">{buttons}</ul>
    </div>
  );
};

export default ButtonGroup;
