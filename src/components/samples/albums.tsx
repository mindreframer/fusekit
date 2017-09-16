import * as React from "react";

const data = [
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverURL:
      "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
    albumURL:
      "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverURL:
      "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
    albumURL:
      "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverURL:
      "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
    albumURL:
      "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverURL:
      "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
    albumURL:
      "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverURL:
      "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
    albumURL:
      "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverURL:
      "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
    albumURL:
      "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverURL:
      "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
    albumURL:
      "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverURL:
      "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
    albumURL:
      "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverURL:
      "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
    albumURL:
      "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverURL:
      "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
    albumURL:
      "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
  }
].map(function(currVal, idx) {
  (currVal as AlbumCardProps).key = `album_${idx}`;
  return currVal;
});


const Albums: React.StatelessComponent<{}> = () => {
  return (
    <article>
      <h2 className="f3 fw4 pa3 mv0">Albums</h2>
      <div className="cf pa2">{data.map(AlbumCard)}</div>
    </article>
  );
};

export { Albums };

interface AlbumCardProps {
  key: string;
  title: string;
  artist: string;
  coverURL: string;
  albumURL: string;
}

const AlbumCard: React.StatelessComponent<AlbumCardProps> = props => {
  const { title, artist, albumURL, coverURL, key } = props;
  return (
    <div key={key} className="fl w-50 w-25-m w-20-l pa2">
      <a href={albumURL} className="db link dim tc">
        <img
          src={coverURL}
          alt="Frank Ocean Blonde Album Cover"
          className="w-100 db outline black-10"
        />
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">{title}</dd>
          <dt className="clip">Artist</dt>
          <dd className="ml0 light-blue truncate w-100">{artist}</dd>
        </dl>
      </a>
    </div>
  );
};
