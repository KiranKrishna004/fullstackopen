/** @format */
import Notification from "./Notification";
import phoneService from "../services/phoneService";
const Form = ({
	persons,
	setPersons,
	newName,
	setNewName,
	newNumber,
	setNewNumber,
	setAdd,
	add,
}) => {
	const handleUpdate = (object) => {
		phoneService
			.update(object.id, { name: object.name, number: newNumber })
			.then((response) => {
				phoneService.getAll().then((response) => {
					setPersons(response.data);
				});
				setAdd(`Added ${object.name}`);
				setTimeout(() => {
					setAdd("");
				}, 5000);
			})
			.catch((e) => {
				setAdd(
					`Information of ${object.name} has already been removed from server`
				);
				setTimeout(() => {
					setAdd("");
				}, 5000);
				setPersons(persons.filter((n) => n.id !== object.id));
			});
	};
	const handleAdd = (object) => {
		const condition = window.confirm(
			`${object.name} is already added to phonebook, replace the od number with a new one?`
		);
		condition ? handleUpdate(object) : <></>;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let found = null;
		found = persons.find(({ name }) => name === newName);
		{
			found
				? handleAdd(found)
				: phoneService
						.create({ name: newName, number: newNumber })
						.then((response) => {
							setPersons(persons.concat(response.data));
							setAdd(newName);
							setTimeout(() => {
								setAdd("");
							}, 2000);
						});
		}
	};
	const handleNewName = (e) => {
		setNewName(e.target.value);
	};
	const handleNewNumber = (e) => {
		setNewNumber(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				name: <input value={newName} onChange={handleNewName} />
			</div>
			<div>
				number: <input value={newNumber} onChange={handleNewNumber} />
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	);
};
export default Form;
