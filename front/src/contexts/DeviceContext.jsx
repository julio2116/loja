import { createContext, useContext } from "react";
import { useMediaQuery } from "usehooks-ts";

const DeviceContext = createContext();

const DeviceProvider = ({children}) => {
    const desktop = useMediaQuery("(min-width: 1024px)");
    const largerDesktop = useMediaQuery("(min-width: 1536px)");
    return(
        <>
            <DeviceContext.Provider value={{desktop, largerDesktop}}>
                {children}
            </DeviceContext.Provider>
        </>
    )
}

const useDevice = () => {
    const context = useContext(DeviceContext);
    return context;
}
export { DeviceProvider, useDevice }