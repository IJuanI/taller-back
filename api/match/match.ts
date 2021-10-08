import { Identificable } from 'api/common';

export interface IMatch {
  equipo_local: string;
  equipo_visitante: string;
  score_local: number;
  score_visitante: number;
}

export type Match = IMatch & Identificable;
