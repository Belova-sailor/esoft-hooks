import { useEffect, useState } from "react";

const Timer = () => {
	const [timer, setTimer] = useState(10);
	
	useEffect(() => {
		console.log('таймер')
		const timerId = setInterval(() => {
			setTimer(prev => prev > 0?(prev - 1): '0')
		}, 1000)
		return () => clearInterval(timerId);
	}, [timer])

	return <div><span>Таймер: {timer}</span></div>;
}

export default Timer;