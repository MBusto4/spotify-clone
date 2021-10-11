import React, { createContext, useContext, useReducer } from 'react'

//prepares the dataLayer
export const DataLayerContext = createContext()

// Wrap our app and provide the data layer
export const DataLayer = ({ reducer, initialState, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);


//Pull info from the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);