import * as React from "react";
const Navigation: React.StatelessComponent<{}> = () => {
  return (
    <header className="bg-black fixed w-100 ph3 pv3 pv3-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        <a className="link dim white dib mr3" href="#" title="MyApp">
          MyApp
        </a>
        <a className="link dim white dib mr3" href="#" title="Store">
          Store
        </a>
        <a className="link dim white dib mr3" href="#" title="About">
          About
        </a>
        <a className="link dim white dib" href="#" title="Contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export { Navigation };
