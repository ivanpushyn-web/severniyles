import * as migration_20260908_131255_initial from './20260908_131255_initial';

export const migrations = [
  {
    up: migration_20260908_131255_initial.up,
    down: migration_20260908_131255_initial.down,
    name: '20260908_131255_initial'
  },
];
