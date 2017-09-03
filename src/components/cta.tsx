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
              <h2 className="fw4 helvetica blue mt0 mb3">{title}</h2>
              <p className="black-70 measure lh-copy mv0 ">
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
  ].map(function(currVal, idx){
    (currVal as AlbumCardProps).key = `album_${idx}`
    return currVal
  })
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
  key: string
  title: string
  artist: string
  coverURL: string
  albumURL: string
}

const AlbumCard: React.StatelessComponent<AlbumCardProps> = (props) => {
  const {title, artist, albumURL, coverURL, key}= props
  return(
    <div key={key} className="fl w-50 w-25-m w-20-l pa2">
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

const FullColorPage: React.StatelessComponent<{}> = ()=> {
  return(
    <article className="vh-100 dt w-100 bg-dark-pink">
      <div className="dtc v-mid tc white ph3 ph4-l">
        <h1 className="f6 f2-m f-subheadline-l fw6 tc">Vertically centering things in css is easy!</h1>
      </div>
    </article>
  )
}

export {FullColorPage}


const FollowerNotifications: React.StatelessComponent<{}> = () =>{
  return(
    <main className="mw6 center">
      <article className="dt w-100 bb b--black-05 pb2 mt2">
        <div className="dtc w2 w3-ns v-mid">
          <img src="http://mrmrs.github.io/photos/p/2.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
        </div>
        <div className="dtc v-mid pl3">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">Young Gatchell </h1>
          <h2 className="f6 fw4 mt0 mb0 black-60">@yg</h2>
        </div>
        <div className="dtc v-mid">
          <form className="w-100 tr">
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
          </form>
        </div>
      </article>
      <article className="dt w-100 bb b--black-05 pb2 mt2">
        <div className="dtc w2 w3-ns v-mid">
          <img src="http://mrmrs.github.io/photos/p/3.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
        </div>
        <div className="dtc v-mid pl3">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">Arnoldo Degraff</h1>
          <h2 className="f6 fw4 mt0 mb0 black-60">@99xx88randomhandle</h2>
        </div>
        <div className="dtc v-mid">
          <form className="w-100 tr">
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
          </form>
        </div>
      </article>
      <article className="dt w-100 bb b--black-05 pb2 mt2">
        <div className="dtc w2 w3-ns v-mid">
          <img src="http://mrmrs.github.io/photos/p/4.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
        </div>
        <div className="dtc v-mid pl3">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">Deirdre Lachance</h1>
          <h2 className="f6 fw4 mt0 mb0 black-60">@favfavfav</h2>
        </div>
        <div className="dtc v-mid">
          <form className="w-100 tr">
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
          </form>
        </div>
      </article>
      <article className="dt w-100 bb b--black-05 pb2 mt2">
        <div className="dtc w2 w3-ns v-mid">
          <img src="http://mrmrs.github.io/photos/p/5.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
        </div>
        <div className="dtc v-mid pl3">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">Frederic Starner</h1>
          <h2 className="f6 fw4 mt0 mb0 black-60">@hungryhippofanatic</h2>
        </div>
        <div className="dtc v-mid">
          <form className="w-100 tr">
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
          </form>
        </div>
      </article>
      <article className="dt w-100 bb b--black-05 pb2 mt2">
        <div className="dtc w2 w3-ns v-mid">
          <img src="http://mrmrs.github.io/photos/p/6.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
        </div>
        <div className="dtc v-mid pl3">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">Cleveland Ridout</h1>
          <h2 className="f6 fw4 mt0 mb0 black-60">@purethinking</h2>
        </div>
        <div className="dtc v-mid">
          <form className="w-100 tr">
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
          </form>
        </div>
      </article>
      <article className="dt w-100 bb b--black-05 pb2 mt2">
        <div className="dtc w2 w3-ns v-mid">
          <img src="http://mrmrs.github.io/photos/p/7.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
        </div>
        <div className="dtc v-mid pl3">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">Leticia Fearon</h1>
          <h2 className="f6 fw4 mt0 mb0 black-60">@retrofeels</h2>
        </div>
        <div className="dtc v-mid">
          <form className="w-100 tr">
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
          </form>
        </div>
      </article>
      <article className="dt w-100 bb b--black-05 pb2 mt2">
        <div className="dtc w2 w3-ns v-mid">
          <img src="http://mrmrs.github.io/photos/p/10.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
        </div>
        <div className="dtc v-mid pl3">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">Ahmad Backer</h1>
          <h2 className="f6 fw4 mt0 mb0 black-60">@ahmadBB</h2>
        </div>
        <div className="dtc v-mid">
          <form className="w-100 tr">
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
          </form>
        </div>
      </article>
      <article className="dt w-100 bb b--black-05 pb2 mt2">
        <div className="dtc w2 w3-ns v-mid">
          <img src="http://mrmrs.github.io/photos/p/11.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
        </div>
        <div className="dtc v-mid pl3">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">Carlie Noakes</h1>
          <h2 className="f6 fw4 mt0 mb0 black-60">@carnoakes99</h2>
        </div>
        <div className="dtc v-mid">
          <form className="w-100 tr">
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
          </form>
        </div>
      </article>
    </main>
  )
}

export {FollowerNotifications}


const Navigation:React.StatelessComponent<{}> = ()=> {
  return(
    <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        <a className="link dim white dib mr3" href="#" title="MyApp">MyApp</a>
        <a className="link dim white dib mr3" href="#" title="Store">Store</a>
        <a className="link dim white dib mr3" href="#" title="About">About</a>
        <a className="link dim white dib" href="#" title="Contact">Contact</a>
      </nav>
    </header>
  )
}

export {Navigation}




const SingleColumnBlog:React.StatelessComponent<{}> = () => {
  return(
    <article className="baskerville pb5">
      <header className="avenir tc-l ph3 ph4-ns pt4 pt5-ns">
        <h1 className="f3 f2-m f-subheadline-l measure lh-title fw1 mt0">A Night of Taking Photos at the Spooky Ruins of the Sutro Baths</h1>
        <time className="f5 f4-l db fw1 baskerville mb4"> March 19th, 2015</time>
        <img className="w-100 dib measure f3" src="http://mrmrs.github.io/photos/009.jpg" alt="A photo of sutro baths by Adam Morse"/>
      </header>
    <div className="ph3 ph4-m ph5-l">
      <p className="f4 mb4 center measure lh-copy">
        On <time>March 14, 1896</time>, the Sutro Baths were opened to the public as the world's largest indoor swimming pool establishment. </p>
      <div className="measure db center f5 f4-ns lh-copy">
        <img className="db w-100 mt4 mt5-ns" src="http://mrmrs.github.io/photos/013.jpg" alt="Photo of the foundations of a building on a cliff overlooking a lighthouse." />
        <p>
          Before it burned to the ground, the structure filled a small beach
          inlet below the Cliff House, also owned by Adolph Sutro at the time.
          Shortly after closing, a fire in 1966 destroyed the building
          while it was in the process of being demolished.
        </p>
        <img className="db w-100 mt4 mt5-ns" src="http://mrmrs.github.io/photos/012.jpg" alt="Photo of the sea with mist covering the rocky formations near the shore." />
        <p>
          During high tides, water would flow directly into the pools from the
          nearby ocean, recycling the two million US gallons of water in about an hour.
        </p>
        <img className="db w-100 mt4 mt5-ns" src="http://mrmrs.github.io/photos/010.jpg" alt="Photo of a dusk skyline above a grassy rockface covered in trees." />
        <p>
          All that remains
          of the site are concrete walls, blocked off stairs and
          passageways, and a tunnel with a deep crevice in the middle. The
          cause of the fire was arson. Shortly afterwards, the developer
          left San Francisco and claimed insurance money.
        </p>
        <img className="db w-100 mt4 mt5-ns" src="http://mrmrs.github.io/photos/011.jpg" alt="Photo of the sea and sky on the horizon with the foundations of a demolished house." />
        <p>
          During low tides, a powerful turbine water pump,
          built inside a cave at sea level, could be switched on from a control
          room and could fill the tanks at a rate of 6,000 US gallons a minute,
          recycling all the water in five hours.
        </p>
      </div>
    </div>
  </article>
  )
}


export {SingleColumnBlog}
