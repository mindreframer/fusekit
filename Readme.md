# Perfect Frontend Stack

## Plan:

    FuseBox
      - Bundle split
        - Vendor split (@done)
        - App split (@done)
        - section1 split
        - section2 split
      - Typescript
        - linting

      - MobX stores setup
        - MobX root store (@done)
        - MobX UI store (@done)
        - MobX domain store(s)
        - Provider / inject with React (@done)
        - Typescript interfaces (IStore + ...) (not needed?)
        - hot-code-reload with stateful stores
          - custom HMR loader, that ignores stores / other stateful components

      - Router
        - pick a simple, declarative router that can be wrapped into some simple custom logic / maybe DIY

      - Tests
        - either Jest / or the runner provided by FuseBox (likely not...)
