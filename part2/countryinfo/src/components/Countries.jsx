/** @format */
import CountryButton from "./CountryButton";
import CountryDetail from "./CountryDetail";
const Countries = ({ countries, filter }) => {
	const countriesFiltered = countries.filter(({ name }) =>
		name.common.toLowerCase().includes(filter.toLowerCase())
	);
	return (
		<div>
			{countriesFiltered.length > 10 ? (
				<>Too many matches, specify another filter</>
			) : countriesFiltered.length === 1 ? (
				<CountryDetail countriesFiltered={countriesFiltered} />
			) : (
				<CountryButton countriesFiltered={countriesFiltered} />
			)}
		</div>
	);
};

export default Countries;
