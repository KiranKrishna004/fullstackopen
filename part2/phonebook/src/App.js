/** @format */

import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phoneService from "./services/phoneService";
import Notification from "./components/Notification";
const App = () => {
	const [persons, setPersons] = useState([]);
	const [newNumber, setNewNumber] = useState("");
	const [newName, setNewName] = useState("");
	const [filter, setFilter] = useState("");
	const [add, setAdd] = useState("");
	let displayerr = null;
	useEffect(() => {
		phoneService
			.getAll()
			.then((response) => {
				setPersons(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	return (
		<div>
			<h2>Phonebook</h2>
			<Notification add={add} displayerr={displayerr} />
			<Filter filter={filter} setFilter={setFilter} />
			<h3>Add a new</h3>
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
				add={add}
				setAdd={setAdd}
			/>
			<h3>Numbers</h3>
			<Persons persons={persons} filter={filter} setPersons={setPersons} />
		</div>
	);
};

export default App;
