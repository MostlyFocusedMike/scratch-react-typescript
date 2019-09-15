import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Goodbye } from "./components/Goodbye";

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <Goodbye compiler="TypeScript" framework="React" />
    </div>,
    document.getElementById("example")
);