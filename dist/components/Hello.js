"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// you don't need to include the JSX.Element, that's implied
// components have to return a JSX.Element or null
exports.Hello = (props) => {
    return (React.createElement("h1", null,
        "Hello from ",
        props.compiler,
        " and ",
        props.framework,
        "!"));
};
//# sourceMappingURL=Hello.js.map