//import { useFormik } from 'formik';
import cities from "../Data/cities.json";
import { useCityData } from "../Context/CityContext";


function Cities() {

    const { cityData, setCityData } = useCityData();

    const handleChange = (e) => {

        setCityData(cities.filter(city => city.name === e.target.value && city)[0])
    }

    return (
        <div>
            <form className="city">
                <select name="cityData" onChange={handleChange} value={cityData.name}>
                    {
                        cities.map(city =>
                            <option key={city.id}>{city.name}</option>
                        )
                    }
                </select>

                {/* <p>{JSON.stringify(cityData)}</p> */}
            </form>
        </div >
    )
}

export default Cities