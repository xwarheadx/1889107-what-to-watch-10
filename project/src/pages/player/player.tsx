import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {AppRoute, MINS_IN_HOUR} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchAloneFilmAction} from '../../store/api-action';
import {getAloneFilmFromServer} from '../../store/film-process/selectors';

export default function Player() {
  const FULL_TIME_IN_PERCENT = 100;
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchAloneFilmAction(id));
    }
  }, [dispatch, id]);

  const navigate = useNavigate();
  const film = useAppSelector(getAloneFilmFromServer);

  const clickExitHandler = (evt: React.MouseEvent) => {
    evt.preventDefault();
    navigate(AppRoute.Main);
  };

  const video = useRef<HTMLVideoElement>(null);
  const [stateVideo, setStateVideo] = useState({
    playText: 'Pause',
    useLink: '#pause',
    viewBox: '0 0 14 21',
    widthButton: '14',
    heightButton: '21',
    timeValue: video.current?.currentTime ? Math.floor(video.current.currentTime) : 0,
  });

  useEffect(() => {
    setStateVideo({
      ...stateVideo,
      timeValue: video.current?.currentTime ? Math.floor(video.current.currentTime) : 0
    });
  }, [stateVideo]);

  function getDurationVideo (duration: number | undefined, currentTime: number | undefined) {
    if (duration && currentTime) {
      const time = Math.floor(duration - currentTime);
      return `-${Math.floor(time / 3600)}${Math.floor(time % 3600 / MINS_IN_HOUR)}:${time % MINS_IN_HOUR}`;
    }
  }

  const [currentWatchedPercent, setCurrentWatchedPercent] = useState(0);
  function updateTime () {
    if (video.current?.currentTime || video.current?.duration) {
      const percent = FULL_TIME_IN_PERCENT * Number((video.current.currentTime).toFixed(2)) / Number((video.current.duration).toFixed(2));
      setCurrentWatchedPercent(Math.round(percent));
    }
  }
  useEffect(() => {

    if (video.current) {
      video.current.addEventListener('timeupdate', updateTime);
      return () => video.current?.removeEventListener('timeupdate', updateTime);
    }
  },[]);

  const clickPlayPauseHandler = () => {
    if (video.current?.paused) {
      setStateVideo({
        ...stateVideo,
        playText: 'Pause',
        useLink: '#pause',
        viewBox: '0 0 14 21',
        widthButton: '14',
        heightButton: '21',
      });
      video.current?.play();

    } else {
      setStateVideo({
        ...stateVideo,
        playText: 'Play',
        useLink: '#play-s',
        viewBox: '0 0 19 19',
        widthButton: '19',
        heightButton: '19',
      });
      video.current?.pause();

    }

  };

  const ckickFullScreenHandler = () => {
    const player = document.querySelector('.player');
    if (!document.fullscreenElement && player) {
      player.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="player">
      <video src={film.videoLink} ref={video} autoPlay className="player__video" poster={film.posterImage}>

      </video>

      <button type="button" className="player__exit" onClick={clickExitHandler}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${(Number(video.current?.currentTime.toFixed(3)))}`} max={`${(video.current?.duration ? video.current?.duration : 0)}`}></progress>
            <div className="player__toggler" style={{
              left: `${currentWatchedPercent}%`,
            }}
            >Toggler
            </div>
          </div>
          <div className="player__time-value">{getDurationVideo(video.current?.duration, video.current?.currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={clickPlayPauseHandler} >
            <svg viewBox={stateVideo.viewBox} width={stateVideo.widthButton} height={stateVideo.heightButton}>
              <use xlinkHref={stateVideo.useLink}></use>
            </svg>
            <span>{stateVideo.playText}</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={ckickFullScreenHandler} >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
