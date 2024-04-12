import { useState } from "react";
import { useUserData } from "./Context";
import ComponentB from "./ComponentB";

const ComponentA = () => {
    const userContextData = useUserData();
    const [name, setName] = useState("");

    return (
        <>
            <div style={{ border: "1px solid #000", padding: "5px" }}>
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
                <ComponentB />
            </div>
        </>
    );
};

export default ComponentA;
