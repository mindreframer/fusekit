const { FuseBox, HTMLPlugin, Sparky, WebIndexPlugin } = require("fuse-box");

const fuse = FuseBox.init({
homeDir: "src",
  output: "dist/$name.js",
  plugins: [WebIndexPlugin({ title: "Welcome to FuseBox" })]
});

fuse.dev({ port: 4445 });

fuse
  .bundle("vendor")
  // Watching (to add dependencies) it's damn fast anyway
  .watch()
  // first bundle will get HMR related code injected
  // it will notify as well
  .hmr()
  .instructions(" ~ index.tsx"); // nothing has changed here

fuse
  .bundle("app")
  .watch()
  // this bundle will not contain HRM related code (as only the first one gets it)
  // but we would want to HMR it
  .hmr()
  // enable sourcemaps for our package
  .sourceMaps(true)
  // bundle without deps (we have a vendor for that) + without the api
  .instructions(" !> [index.tsx]");

Sparky.task("default", () => {
  //   fuse.bundle("app").instructions(`>index.ts`);
  fuse.run();
});

Sparky.task("test", () => {
  fuse.bundle("app").test("[**/**.test.ts]");
});