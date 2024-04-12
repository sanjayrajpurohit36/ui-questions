import React from "react";

const UserContext = React.createContext(true);

export const UserContextProvider = UserContext.Provider;
export const UserContextConsumer = UserContext.Consumer;

export default UserContext;
