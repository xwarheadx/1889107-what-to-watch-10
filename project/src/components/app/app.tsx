import Main from '../../pages/main/main';

type AppProps = {
  mainFilmName: string;
  mainFilmGenre: string;
  mainFilmDate: number;
}

export default function App({mainFilmName, mainFilmGenre, mainFilmDate}: AppProps): JSX.Element {
  return (
    <Main mainFilmName = {mainFilmName} mainFilmGenre = {mainFilmGenre} mainFilmDate = {mainFilmDate}/>
  );
}
