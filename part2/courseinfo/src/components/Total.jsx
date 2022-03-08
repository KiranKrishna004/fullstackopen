/** @format */

const Total = ({ parts }) => {
	const total = parts.reduce((s, p) => s + p.exercises, 0);
	return <strong>total of {total} exercises</strong>;
};

export default Total;
