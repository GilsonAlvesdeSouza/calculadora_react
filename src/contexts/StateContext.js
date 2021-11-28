import { createContext, useContext, useReducer } from "react";
import HistoricReducer from "../reducer/HistoricReducer";

const initialState = {
    historic: HistoricReducer(),
};

const MainReducer = (state, action) => ({
    historic: HistoricReducer(state.historic, action),
});

export const StateContext = createContext();

export const StateProvider = ({children}) => {

    return (
        <StateContext.Provider value = {useReducer(MainReducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => useContext(StateContext);