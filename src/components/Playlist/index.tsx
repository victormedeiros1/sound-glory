import { useState } from 'react';
import Controls from '../Controls';
import Header from './Header';
import Song from './Song';
import { PlaylistStyles, Songs } from './styles';

interface Song {
  id: number;
  title: string;
  description: string;
  path: string;
}

const Playlist: React.FC = () => {
  const [songThatWasPlaying, setSongThatWasPlaying] =
    useState<HTMLAudioElement>();

  const songs = [
    {
      id: 0,
      title: 'Não Temos Tempo',
      description: 'Nossa Toca',
      path: '/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3',
    },
    {
      id: 1,
      title: 'Super Herói',
      description: 'Hungria Hip Hop',
      path: '/src/assets/audios/Hungria Hip Hop - Super Herói.mp3',
    },
    {
      id: 2,
      title: 'Hayya Hayya (Better Together) - FIFA World Cup 2022',
      description: 'Trindad Cordona, Davido, Aisha, FIFA Sound',
      path: '/src/assets/audios/Hayya Hayya (Better Together) - FIFA World Cup 2022.mp3',
    },
  ];
  const playSong = (song: Song) => {
    if (!songThatWasPlaying) {
      const audio = new Audio(song.path);
      audio.play();

      setSongThatWasPlaying(audio);
    } else {
      songThatWasPlaying.pause();

      const audio = new Audio(song.path);
      audio.play();
      setSongThatWasPlaying(audio);
    }
  };

  return (
    <PlaylistStyles>
      <Header />

      <Songs>
        {songs.map((song) => (
          <li key={song.id} onClick={() => playSong(song)}>
            <Song title={song.title} description={song.description} />
          </li>
        ))}
      </Songs>

      <Controls />
    </PlaylistStyles>
  );
};

export default Playlist;
