/** @format */
import StatisticLine from "./StatisticLine";
const Statistics = ({ good, neutral, bad }) => {
	return (
		<div>
			{good + neutral + bad > 0 ? (
				<>
					<h1>statistics</h1>
					<table>
						<tbody>
							<StatisticLine text='good' value={good} />
							<StatisticLine text='bad' value={neutral} />
							<StatisticLine text='bad' value={bad} />
							<tr>
								<td>all</td>
								<td>{good - bad}</td>
							</tr>
							<tr>
								<td>average</td>
								<td>{(good - bad) / (good + neutral + bad)}</td>
							</tr>
							<tr>
								<td>positive</td>
								<td>{(good / (good + neutral + bad)) * 100} %</td>
							</tr>
						</tbody>
					</table>
				</>
			) : (
				<>
					<h1>statistics</h1>
					No feedback given
				</>
			)}
		</div>
	);
};
export default Statistics;
