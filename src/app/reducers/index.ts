import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState, Update } from "@ngrx/entity";
import { produce } from 'immer';

import * as Actions from '../actions';
import { Game } from "../models/game";

export const myAdapter = createEntityAdapter<Game>();

export interface State {
  games: EntityState<Game>
  home: number;
  away: number;
}

const initialState: State = {
  games: myAdapter.getInitialState(),
  home: 0,
  away: 0,
}

export const reducer = createReducer(
  initialState,

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

  on(Actions.homeScore, state => produce(state, (draft) => {
    draft.home = state.home + 1
  })),

  on(Actions.awayScore, state => produce(state, (draft) => {
    draft.away = state.away + 1
  })),

  on(Actions.resetScore, state => produce(state, (draft) => {
    draft.home = 0;
    draft.away = 0;
  })),

  on(Actions.setScores, (state, { game }) => produce(state, (draft) => {
    draft.home = game.home;
    draft.away = game.away;
  })),

  on(Actions.gameAdd, (state, {game}) => produce(state, (draft) => {
    const update: Update<Game> = {
      id: game.id,
      changes: {
        ...game
      }
    };

    draft.games = myAdapter.updateOne(update, state.games);
  })),

)
