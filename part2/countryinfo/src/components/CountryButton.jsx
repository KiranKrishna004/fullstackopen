/** @format */
import CountryDetail from "./CountryDetail";
import { useState } from "react";
const CountryButton = ({ countriesFiltered }) => {
	const [click, setClick] = useState({ clicked: false, country: "" });
	return (
		<>
			{click.clicked ? (
				<CountryDetail countriesFiltered={click.country} />
			) : (
				<>
					{countriesFiltered.map((items) => {
						return (
							<div key={items.name.common}>
								{items.name.common}
								<button
									onClick={() => {
										setClick({ clicked: true, country: [items] });
									}}>
									show
								</button>
								<br />
							</div>
						);
					})}
				</>
			)}
		</>
	);
};
export default CountryButton;
