import { useUserData } from "./Context";

const ComponentB = () => {
    const userContextData = useUserData();

    return (
        <>
            <div style={{ border: "1px solid #000", padding: "5px" }}>
                Hi, I am the grand child component consuming the context
                <div>My name is {userContextData.user.name}</div>
            </div>
        </>
    );
};

export default ComponentB;
