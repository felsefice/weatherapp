import { createContext, useContext, useState } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
    const [cityData, setCityData] = useState({
        "id": 34,
        "name": "İstanbul",
        "latitude": "41.0053",
        "longitude": "28.9770",
        "population": 14657434,
        "region": "Marmara",
        "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    });
    const values = { cityData, setCityData };

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}

export const useCityData = () => useContext(CityContext);