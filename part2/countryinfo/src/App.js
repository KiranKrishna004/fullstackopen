/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
const App = () => {
	const [filter, setFilter] = useState("");
	const [countries, setCountries] = useState([]);
	const [weather, setWeather] = useState([]);
	useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((response) => {
				setCountries(response.data);
			})
			.catch((e) => console.log(e));
	}, []);
	return (
		<div>
			<Filter filter={filter} setFilter={setFilter} />
			<Countries countries={countries} filter={filter} />
		</div>
	);
};
export default App;
