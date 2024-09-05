import { createContext, useState, useContext } from "react";

const ChangePageContext = createContext();

export const ChangePageProvider = ({children}) => {
    const [changePage, setChangePage] = useState({});

    return (
        <ChangePageContext.Provider value={{changePage, setChangePage}}>
            {children}
        </ChangePageContext.Provider>
    );
};

export const useChangePageContext = () => {
    return useContext(ChangePageContext);
}