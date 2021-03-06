import * as React from "react";
import { IPlayer } from "shared/models/player";
import PlayersGridRow from 'containers/Players/PlayersGridRowContainer';

export interface IOwnProps { }

export interface IConnectedState {
    players : IPlayer[]
}

export interface IConnectedDispatch { }

export class PlayersGrid extends React.Component<IOwnProps & IConnectedState & IConnectedDispatch, {}> {

    private renderRows(players: IPlayer[]): JSX.Element[] {
        var returnElements: JSX.Element[] = [];
        for (let i = 0; i < players.length; i++) {
            returnElements.push((<PlayersGridRow key={players[i].id} player={players[i]}></PlayersGridRow>));
        }
        return returnElements;
    }

    render() {
        const { players } = this.props;
        return (
            <div>
                <h3>Existing Players</h3>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows(players)}
                    </tbody>
                </table>
            </div>
        );
    }
}