import ComponentA from "./ComponentA";
import UserContextDataProvider from "./Context";
import ThemeProvider from "./ThemeContext";

const FunctionContext = () => {
    const obj = { name: "Sanjay", roll: 21, surname: "Raj" };
    return (
        <ThemeProvider>
            <UserContextDataProvider>
                <div
                    style={{
                        border: "2px solid #333",
                        width: "700px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px",
                    }}
                >
                    I am context provider in functonal component
                    <ComponentA />
                </div>
            </UserContextDataProvider>
        </ThemeProvider>
    );
};

export default FunctionContext;
