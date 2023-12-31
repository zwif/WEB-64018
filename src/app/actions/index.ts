import { createAction, props } from '@ngrx/store';
import {Game} from "../models/game";

export const homeScore = createAction('[Scoreboard Page] Home Score');
export const awayScore = createAction('[Scoreboard Page] Away Score');
export const resetScore = createAction('[Scoreboard Page] Score Reset');
export const setScores = createAction('[Scoreboard Page] Set Scores', props<{game: Game}>());
export const gameAdd = createAction('[Scoreboard Page] Game Add', props<{game: Game}>());
