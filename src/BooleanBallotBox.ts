import { BallotBox } from "./vote";
import {ConsensusLevel} from "./ConsensusLevel";

class BooleanBallotBox extends BallotBox<boolean> {
    constructor(size: number, consensus: number, strategy: ConsensusLevel<boolean>) {
        super(size, consensus, strategy);
    }

    getWinningVotes(): [boolean, number, number] {
        let numVotes = 0;
        let yay = 0;
        for (let ballot of this.ballots) {
            if (ballot != null) {
                numVotes++;
                yay += (ballot.vote) ? 1 : 0;
            }
        }
        return [true, yay, numVotes];
    }
}

export default BooleanBallotBox;
