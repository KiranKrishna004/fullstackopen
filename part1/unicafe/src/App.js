/** @format */

import { useState } from "react";
import Statistics from "./components/Statistics";
const App = () => {
	// tallenna napit omaan tilaansa
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<h1>give feedback</h1>
			<button onClick={() => setGood(good + 1)}>good</button>
			<button onClick={() => setNeutral(neutral + 1)}>neutral</button>
			<button onClick={() => setBad(bad + 1)}>bad</button>
			<br />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
};

export default App;