/** @format */

import Part from "./Part";

const Content = ({ parts }) => {
	return (
		<>
			{parts.map((item, index) => {
				return (
					<div key={index}>
						<Part name={item.name} exercises={item.exercises} />
					</div>
				);
			})}
		</>
	);
};

export default Content;
