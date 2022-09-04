import dayjs from 'dayjs';
import {MINS_IN_HOUR, ID_NUMBER} from './const';
export function transformTime (runTime: number | undefined) {
  if (typeof runTime === 'number') {
    return `${Math.floor(runTime / MINS_IN_HOUR)}h ${runTime % MINS_IN_HOUR}m`;
  }
  return 'undefined';

}

export const humanizeCommentDate = (dueDate: string) => dayjs(dueDate).format('MMMM D, YYYY');
export function getRegularForCheckId (id: number, countFilms: number) {
  return `^[1-9]$|^[${Math.floor(id / ID_NUMBER)}][${Number(id) % ID_NUMBER}]$|^(${countFilms})`;
}
