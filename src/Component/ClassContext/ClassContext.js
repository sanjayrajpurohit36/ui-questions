import React, { Component } from "react";
import ComponentA from "./ComponentA";
import { UserContextProvider } from "./Context";

export default class ClassContext extends Component {
    state = {
        user: {
            name: "Sanjay",
            surname: "Raj",
            roll: 21,
        },
    };

    render() {
        return (
            <div>
                <h2>Component Wrapper</h2>
                <UserContextProvider value={this.state.user}>
                    <ComponentA />
                </UserContextProvider>
            </div>
        );
    }
}
