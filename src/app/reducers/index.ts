import {createReducer,
  on
} from '@ngrx/store';

import * as Actions from '../actions';

export interface State {
  home: number
  away: number;
}

const initialState: State = {
  home: 0,
  away: 0,
}

export const reducer = createReducer(
  initialState,
  on(Actions.homeScore, state => ({ ...state, home: state.home + 1 })),
  on(Actions.awayScore, state => ({ ...state, away: state.away + 1 })),
  on(Actions.resetScore, state => ({ home: 0, away: 0 })),
  on(Actions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
)
