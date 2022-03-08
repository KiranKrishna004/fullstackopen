/** @format */
const Filter = ({ filter, setFilter }) => {
	const handleFilter = (e) => {
		setFilter(e.target.value);
	};
	return (
		<div>
			filter shown with{" "}
			<input type='text' value={filter} onChange={handleFilter} />
		</div>
	);
};
export default Filter;
