import { useState } from "react";
import { useUserData } from "./Context";
import ComponentB from "./ComponentB";
import { useTheme } from "./ThemeContext";

const ComponentA = () => {
    const userContextData = useUserData();
    const themeData = useTheme();
    const [name, setName] = useState("");

    const darkThemeStyle = {
        background: themeData.isDarkTheme ? "#333" : "#CCC",
        color: themeData.isDarkTheme ? "#CCC" : "#333",
        padding: "5px",
        border: "1px solid #000",
    };

    return (
        <>
            <div style={darkThemeStyle}>
                {" "}
                I am context consumer in functional component , Child Component
                <div>My name is {userContextData.user.name}</div>
                <input
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                ></input>
                <button
                    onClick={() => {
                        userContextData.updateUser({
                            ...userContextData.user,
                            name,
                        });
                    }}
                >
                    Change
                </button>
                <button
                    onClick={() => {
                        themeData?.toggleDarkTheme();
                    }}
                >
                    Change Theme
                </button>
                <ComponentB />
            </div>
        </>
    );
};

export default ComponentA;
