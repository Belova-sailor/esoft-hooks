const UserItem = (props) => {
	const {name} = props;

	return (
		<li className="user-list-item">
			<span>{name}</span>
		</li>
	)
}

export default UserItem;