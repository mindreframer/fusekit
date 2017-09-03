import * as React from 'react'

interface Props {
  title: string
  desc: string
  cta: string
 }

const CTA: React.StatelessComponent<Props> = (props)=> {
  const {title, desc, cta} = props
  return(
    <section className="ph3 ph5-ns pv5">
      <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
        <div className="dt-ns dt--fixed-ns w-100">
          <div className="pa3 pa4-ns dtc-ns v-mid">
            <div>
              <h2 className="fw4 blue mt0 mb3">{title}</h2>
              <p className="black-70 measure lh-copy mv0">
                {desc}
              </p>
            </div>
          </div>
          <div className="pa3 pa4-ns dtc-ns v-mid">
            <a href="#" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">{cta}</a>
          </div>
        </div>
      </article>
    </section>
  )
}

export {CTA}


const ProductCard: React.StatelessComponent<{}> = ()=> {
  return(
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src="http://placekitten.com/g/600/300" className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">Cat</h1>
          </div>
          <div className="dtc tr">
            <h2 className="f5 mv0">$1,000</h2>
          </div>
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">
          If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
          and touch water with paw then recoil in horror.
        </p>
      </div>
    </article>
  )
}


export {ProductCard}

const Albums: React.StatelessComponent<{}> = () => {

  const data = [
    {
      title: "Blonde",
      artist: "Frank Ocean",
      coverURL: "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
      albumURL: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      coverURL: "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
      albumURL: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      coverURL: "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
      albumURL: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      coverURL: "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
      albumURL: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      coverURL: "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
      albumURL: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      coverURL: "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
      albumURL: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      coverURL: "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
      albumURL: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      coverURL: "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
      albumURL: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      coverURL: "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
      albumURL: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
    },
    {
      title: "Blonde",
      artist: "Frank Ocean",
      coverURL: "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
      albumURL: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
    }
  ]
  return(
    <article>
      <h2 className="f3 fw4 pa3 mv0">Albums</h2>
      <div className="cf pa2">
        {data.map(AlbumCard)}
      </div>
    </article>
  )
}


export {Albums}


interface AlbumCardProps  {
  title: string
  artist: string
  coverURL: string
  albumURL: string
}

const AlbumCard: React.StatelessComponent<AlbumCardProps> = (props) => {
  const {title, artist, albumURL, coverURL}= props
  return(
    <div className="fl w-50 w-25-m w-20-l pa2">
      <a href={albumURL} className="db link dim tc">
        <img src={coverURL} alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">{title}</dd>
          <dt className="clip">Artist</dt>
          <dd className="ml0 light-blue truncate w-100">{artist}</dd>
        </dl>
      </a>
    </div>
  )
}
