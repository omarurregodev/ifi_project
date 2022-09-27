import React, { useState, createContext } from "react";


export const dataContext = createContext();
const { Provider } = dataContext;

const DataProvider = ({ children }) => {

    const [dataFriccion, setDataFriccion] = useState([]);
    const [dataIri, setDataIri] = useState([]);

    const addDataFriccion = (data) => {
        setDataFriccion(data);
    }

    const addDataIri = (data) => {
        setDataIri(data);
    }

    return (
        <Provider value={{dataFriccion, dataIri, addDataFriccion, addDataIri}}>
            {children}
        </Provider>
    )
}

export default DataProvider;
