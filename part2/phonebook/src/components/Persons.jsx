/** @format */

import phoneService from "../services/phoneService";

const Persons = ({ persons, filter, setPersons }) => {
	const handleDelete = (e, id) => {
		e ? (
			phoneService.del(id).then((response) => {
				phoneService.getAll().then((response) => {
					setPersons(response.data);
				});
			})
		) : (
			<></>
		);
	};
	const personList = persons
		.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
		.map((item, index) => {
			return (
				<tr key={index}>
					<td>{item.name}</td>
					<td>{item.number}</td>
					<td>
						<button
							onClick={(e) => {
								e = window.confirm(`Delete ${item.name}`);
								handleDelete(e, item.id);
							}}>
							delete
						</button>
					</td>
				</tr>
			);
		});
	return (
		<table>
			<tbody>{personList}</tbody>
		</table>
	);
};
export default Persons;
