/** @format */

const Filter = ({ filter, setFilter }) => {
	const handleFilter = (e) => {
		setFilter(e.target.value);
	};
	return (
		<>
			find countries <input type='text' onChange={handleFilter} />
		</>
	);
};
export default Filter;
