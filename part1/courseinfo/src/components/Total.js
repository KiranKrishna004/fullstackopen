/** @format */

const Total = ({ parts }) => {
	let sum = 0;
	parts.forEach((e) => (sum += e.exercises));
	return <p>Number of exercises {sum}</p>;
};

export default Total;
