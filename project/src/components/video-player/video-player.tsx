import {useRef} from 'react';
import {TIME_OUT} from '../../const';
type VideoPlayerType = {
  video: string;
}

export default function VideoPlayer ({video}: VideoPlayerType) {
  const playRef = useRef<HTMLVideoElement>(null);

  const playVideoTimeout = () => {
    playRef.current && playRef.current.play();
  };
  setTimeout(playVideoTimeout, TIME_OUT);

  return(
    <video ref={playRef} src={video} muted loop width='280' height='175'>

    </video>
  );
}
