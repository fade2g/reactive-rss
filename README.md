## Reactive Reader

This project is designed as a mobile web frontend for [Tiny Tiny RSS}(https://tt-rss.org/) reader.

Currently it is under initial development.

Reactive Reader is using - tata - react for the UI. It is targeted to be deployed independently from the original
frontend of TTRSS. As a consequence, the Reactive Reader needs CORS enabled access to the API Backend.

Reactive Reader is mainly a personal edcuation project with the aim to play around with frontend technologies.
The ultimate goal is to develop a PWA, using service worker for offline caching and poucDB or something similar
for caching the articles data (and potentially cleaning that data up).

Aethetics are not so much an aim and highly responsive layouts neither. I target for personal use on a mobile
device.

Unit tests are part of training, but currently not the main focus. So sad.


## Background Information and pointers

* Basis is [create-react-app](https://github.com/facebookincubator/create-react-app)
* Handling of CORS, enabiling preflight checs on apache: [Stack Overflow, Apache CORS](https://stackoverflow.com/questions/42558221/preflight-request-not-being-handled-by-apache-cors)
* UI Widgets are from [Semantic UI React](https://react.semantic-ui.com/introduction)

