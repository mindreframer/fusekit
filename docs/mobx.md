TLDR:
    - separate state from UI
    - state drives UI, so UI = f(state)
    - routing is an UI issue, so route change -> action.
    - no need to any advanced router implementations
    - use observables instead of setState() in React (https://medium.com/@mweststrate/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e)
    VIDEOS: divide & conquer, state management patterns, link under best practices



Objections:
    Mobx is not pubsub, events or spooky action at a distance.  It’s a pretty well defined synchronous observable graph.


Objections:
    https://twitter.com/mrjjwright/status/861676993716289537
    Mobx is not pubsub, events or spooky action at a distance.  It’s a pretty well defined synchronous observable graph.

VIDEOS:


Course
    - https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx

Complexity: Divide and Conquer! - Michel Weststrate (2017/05) - GREAT VIDEO
    - https://www.youtube.com/watch?v=3J9EJrvqOiM&list=TLGG8kFs45xUMH0xMjA2MjAxNw

Advanced state management patterns with JavaScript & MobX with Michel Weststrate (MUST WATCH!)
https://www.youtube.com/watch?v=uWIT9M95mqQ
    - very interesting from 42 mins. (state drives the UI)

Next generation state management - Michel Weststrate aka @mweststrate at @ReactEurope 2017 -
- https://www.youtube.com/watch?v=rwqwwn_46kA
very interesting ideas, typecheking, typescript, snapshots with mobx!


Michel Weststrate: Real World MobX — ReactNext 2016
    - https://www.youtube.com/watch?v=Aws40KOx90U
    after min. 28: rules engine, comples rules, many teams working on the same codebase…

Mobdux: Combining the good parts of MobX and Redux (2017/06)
    - https://www.youtube.com/watch?v=oGE4GyLDZwY
    - https://medium.com/@cameronfletcher92/mobdux-combining-the-good-parts-of-mobx-and-redux-61bac90ee448
    https://bitbucket.org/cfletcheratlassian/mobdux



Little Intro
    - https://www.youtube.com/watch?v=Dp75-DnGFrU - Introduction to Mobx and React (2017/07)

#9 - MobX over Redux
    - https://www.youtube.com/watch?v=qcp1IGFmlI0&t=45s

Preethi Kasireddy - MobX vs Redux: Comparing the Opposing Paradigms - React Conf 2017 (2017/03)
    - https://www.youtube.com/watch?v=76FRrbY18Bs


Andrey Kogut, Gregory Shehet: React Jedi with MobX - React Kyiv March (2017/03) - russian, over 1h, very solid introduction to Mobx
    - https://www.youtube.com/watch?v=P_5-W76y9yY

Real Users
    - https://github.com/mobxjs/mobx/issues/681#issuecomment-262348294

Links
    - https://github.com/mobxjs/awesome-mobx
    - https://github.com/xgrommx/mobx-ecosystem/


Best Practices:
    - https://hackernoon.com/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37
    - https://mobx.js.org/best/store.html
    - http://mobx-patterns.surge.sh/#39
    - https://alexhisen.gitbooks.io/mobx-recipes/content/auto-save.html
    - https://github.com/mobxjs/mobx/issues/300 - How to structure your stores
    https://www.reddit.com/r/reactjs/comments/4fojit/what_is_your_structure_when_using_mobx_with/?st=j4uyf2p7&- sh=dd3db62f
    - https://www.google.de/amp/s/amp.reddit.com/r/reactjs/comments/5xst3t/mobx_store_structure/
    - https://blog.pixelingene.com/2016/10/effective-mobx-patterns-part-3/
    - https://github.com/mweststrate/state-routing-blog-sources
    - https://medium.com/@mweststrate/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e
    - https://vincent.is/testing-a-different-spa-routing-update/ (generic Router example) + -https://vincent.is/testing-a-different-spa-routing/


Routing
    - https://github.com/LeonardoGentile/react-mobx-router5
    - http://jamesknelson.com/routing-with-raw-react/
    - http://unicornstandard.com/packages/uniloc.html

Slides;
    - http://magixmobx.surge.sh/#/35?_k=qigcgb
    - http://slides.com/mattruby/deck#/6 (https://www.youtube.com/watch?v=XGwuM_u7UeQ) Practical React with MobX
    - https://de.slideshare.net/darko3/react-state-management-with-redux-and-mobx (2017/06)


Libs
    - https://github.com/foxhound87/mobx-react-form
    - https://github.com/mobxjs/serializr
    - https://github.com/pinqy520/mobx-persist
    - https://github.com/masylum/mobx-rest -
    - https://github.com/kitze/mobx-router
    - https://github.com/elefanty/offramp (router)
    - http://basarat.com/yester/#/ - router
    - https://github.com/zalmoxisus/mobx-remotedev
    - cans: https://medium.com/@djyde/building-curd-in-a-few-minutes-with-cans-and-antd-ba2b08a3919f


Example Projects
    - https://github.com/gothinkster/react-mobx-realworld-example-app/
    - https://github.com/mobxjs/mobx-examples/tree/master/mobx-standalone (ALL THE EXAMPLES, CHECK OUT)
    - https://github.com/mattruby/reactSwatchMobxDemo
    - https://github.com/fcsonline/react-transmission (real project, must read!)
    - https://github.com/lionsharecapital/lionshare-desktop/tree/master/src/stores
    - https://github.com/mweststrate/react-mobx-shop/tree/react-amsterdam-2017
    - https://github.com/jenkinsci/blueocean-plugin/tree/master/blueocean-core-js/src/js


Posts
    https://hackernoon.com/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37 - How to decouple state and UI (a.k.a. you don’t need componentWillMount)
    https://github.com/mweststrate/state-routing-blog-sources (example!)

    https://blog.wearewizards.io/a-mobx-introduction-and-case-study (tutorial)
    https://tech.xogrp.com/rebuilding-the-guest-list-manager-with-react-mobx-at-the-knot-e34e32920571


    https://news.ycombinator.com/item?id=12537614  -> Typescript + MobX discussion


Tricks
    https://twitter.com/AdamRackis/status/853253274845184004 (vertical align with mobx + react.js)



Mobx Forms
    https://formstate.github.io/#/
    https://formstate.github.io/demos/
    https://github.com/vict-shevchenko/reactive-mobx-form
    https://github.com/foxhound87/mobx-react-form-demo
        https://vict-shevchenko.github.io/reactive-mobx-form/#/examples/sync-validation/SyncFieldValidation


    https://medium.com/@KozhukharenkoN/react-form-validation-with-mobx-8ce00233ae27 -> little DIY intro with Mobx + validatorjs
    https://blog.risingstack.com/handling-react-forms-with-mobx-observables/
    https://www.npmjs.com/package/mobx-input


    ValueLink pattern
        https://medium.com/@gaperton/managing-state-and-forms-with-react-part-1-12eacb647112
        https://medium.com/@gaperton/react-forms-with-value-links-part-2-validation-9d1ba78f8e49
        https://github.com/Volicon/NestedLink/tree/master/src
        https://github.com/Volicon/NestedLink/blob/master/example/src/databinding.jsx

        https://github.com/Volicon/NestedTypes
