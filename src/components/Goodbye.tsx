import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
// this class is a 'generic'
export class Goodbye extends React.Component<HelloProps, {}> {
    render(): JSX.Element {
        return <h1>Goodbye from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}