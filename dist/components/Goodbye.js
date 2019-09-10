"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
// this class is a 'generic'
class Goodbye extends React.Component {
    render() {
        return React.createElement("h1", null,
            "Goodbye from ",
            this.props.compiler,
            " and ",
            this.props.framework,
            "!");
    }
}
exports.Goodbye = Goodbye;
//# sourceMappingURL=Goodbye.js.map