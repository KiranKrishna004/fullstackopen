/** @format */

const Weather = ({ weather }) => {
	return (
		<div>
			<>Temperature {weather.main.temp}</>
			<br />
			<img
				src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
				alt='oops'
			/>
			<br />
			<>Wind {weather.wind.speed} m/s</>
		</div>
	);
};
export default Weather;
