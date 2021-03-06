import * as React from "react";

require("./board.scss");

export interface BoardProps { moves: Array<boolean>}

// 'BoardProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Board extends React.Component<BoardProps, {}> {
    
    render() : JSX.Element {
        return (
            <table>
            <tbody>
                <tr>
                    <td className="top-left"></td>
                    <td className="top-middle"></td>
                    <td className="top-right"></td>
                </tr>
                <tr>
                    <td className="middle-left"></td>
                    <td className="middle-middle"></td>
                    <td className="middle-right"></td>
                </tr>
                <tr>
                    <td className="bottom-left"></td>
                    <td className="bottom-middle"></td>
                    <td className="bottom-right"></td>
                </tr>
            </tbody>
        </table>
        );
    }
}