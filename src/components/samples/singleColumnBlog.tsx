import * as React from "react";

const SingleColumnBlog: React.StatelessComponent<{}> = () => {
  return (
    <article className="baskerville pb5">
      <header className="avenir tc-l ph3 ph4-ns pt4 pt5-ns">
        <h1 className="f3 f2-m f-subheadline-l measure lh-title fw1 mt0">
          A Night of Taking Photos at the Spooky Ruins of the Sutro Baths
        </h1>
        <time className="f5 f4-l db fw1 baskerville mb4">
          {" "}
          March 19th, 2015
        </time>
        <img
          className="w-100 dib measure f3"
          src="http://mrmrs.github.io/photos/009.jpg"
          alt="A photo of sutro baths by Adam Morse"
        />
      </header>
      <div className="ph3 ph4-m ph5-l">
        <p className="f4 mb4 center measure lh-copy">
          On <time>March 14, 1896</time>, the Sutro Baths were opened to the
          public as the world's largest indoor swimming pool establishment.{" "}
        </p>
        <div className="measure db center f5 f4-ns lh-copy">
          <img
            className="db w-100 mt4 mt5-ns"
            src="http://mrmrs.github.io/photos/013.jpg"
            alt="Photo of the foundations of a building on a cliff overlooking a lighthouse."
          />
          <p>
            Before it burned to the ground, the structure filled a small beach
            inlet below the Cliff House, also owned by Adolph Sutro at the time.
            Shortly after closing, a fire in 1966 destroyed the building while
            it was in the process of being demolished.
          </p>
          <img
            className="db w-100 mt4 mt5-ns"
            src="http://mrmrs.github.io/photos/012.jpg"
            alt="Photo of the sea with mist covering the rocky formations near the shore."
          />
          <p>
            During high tides, water would flow directly into the pools from the
            nearby ocean, recycling the two million US gallons of water in about
            an hour.
          </p>
          <img
            className="db w-100 mt4 mt5-ns"
            src="http://mrmrs.github.io/photos/010.jpg"
            alt="Photo of a dusk skyline above a grassy rockface covered in trees."
          />
          <p>
            All that remains of the site are concrete walls, blocked off stairs
            and passageways, and a tunnel with a deep crevice in the middle. The
            cause of the fire was arson. Shortly afterwards, the developer left
            San Francisco and claimed insurance money.
          </p>
          <img
            className="db w-100 mt4 mt5-ns"
            src="http://mrmrs.github.io/photos/011.jpg"
            alt="Photo of the sea and sky on the horizon with the foundations of a demolished house."
          />
          <p>
            During low tides, a powerful turbine water pump, built inside a cave
            at sea level, could be switched on from a control room and could
            fill the tanks at a rate of 6,000 US gallons a minute, recycling all
            the water in five hours.
          </p>
        </div>
      </div>
    </article>
  );
};

export { SingleColumnBlog };
