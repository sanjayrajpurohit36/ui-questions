import React, { Component } from "react";
import { UserContextConsumer } from "./Context";

export default class ComponentA extends Component {
    render() {
        return (
            <div>
                <h2>Component A</h2>
                <UserContextConsumer>
                    {(contextData) => (
                        <>
                            <div> Name: {contextData.name}</div>
                            <div>Roll: {contextData.roll}</div>
                        </>
                    )}
                </UserContextConsumer>
            </div>
        );
    }
}
