/** @format */

import Part from "./Part";

const Content = ({ parts }) => {
	return (
		<>
			{parts.map((item) => {
				return (
					<div key={item.id}>
						<Part name={item.name} exercises={item.exercises} />
					</div>
				);
			})}
		</>
	);
};

export default Content;
