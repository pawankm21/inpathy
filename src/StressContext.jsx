import React, { createContext,useState } from 'react'


export const StressContext = createContext()

export const StressProvider = (props) => {
    const [stress, setStress] = useState("")
    return (
        <StressContext.Provider value={[stress, setStress]}>
            {props.children}
        </StressContext.Provider>
    )
}