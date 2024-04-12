import React, { useState, useContext } from "react";

export const UserContext = React.createContext(true);

export const UserContextProvider = UserContext.Provider;

export function useUserData() {
    return useContext(UserContext);
}

export default function UserContextDataProvider({ children }) {
    const [user, setUser] = useState({
        name: "Sanjay",
        roll: 21,
        surname: "Raj",
    });

    function updateUser(data) {
        setUser(data);
    }

    return (
        <UserContextProvider value={{ user, updateUser }}>
            {children}
        </UserContextProvider>
    );
}
