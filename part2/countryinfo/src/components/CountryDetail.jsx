/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "./Weather";

const CountryDetail = ({ countriesFiltered }) => {
	const [weather, setWeather] = useState([]);
	useEffect(() => {
		const name = countriesFiltered[0].name.common;
		const api_key = process.env.REACT_APP_API_KEY;
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?lat=${countriesFiltered[0].capitalInfo.latlng[0]}&lon=${countriesFiltered[0].capitalInfo.latlng[1]}&appid=${api_key}`
			)
			.then((response) => {
				setWeather(response.data);
			})
			.catch((e) => console.log(e));
	}, []);
	return (
		<div key={countriesFiltered[0].name.common}>
			<h1>{countriesFiltered[0].name.common}</h1>
			<>Capital: {countriesFiltered[0].capital}</>
			<br />
			<>Area: {countriesFiltered[0].area}</>
			<br />
			<h3>Languages:</h3>
			<ul>
				{Object.values(countriesFiltered[0].languages).map((items, index) => {
					return <li key={index}>{items}</li>;
				})}
			</ul>
			<img src={countriesFiltered[0].flags.png} alt='Oops' />
			<h2>Weather in {countriesFiltered[0].capital}</h2>
			{weather.length !== 0 ? (
				<>
					<Weather weather={weather} />
				</>
			) : (
				<>Empty</>
			)}
		</div>
	);
};
export default CountryDetail;
