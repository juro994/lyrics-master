# Lyrics Master
This is my first attempt at simple React application. It's a tool that helps me find the lyrics of a specific song. It uses 2 public APIs:
- [musicbrainz.org](https://musicbrainz.org/doc/MusicBrainz_API) for song listing,
- [lyrics.ovh](https://lyricsovh.docs.apiary.io/#) for retreiving the lyrics,

## React and Typescript
The scaffolding of the app was bootstrapped using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) with typescript template by running

```
yarn create react-app my-app --template typescript
```

I've tried to write it using functional React components, instead of class-based ones, taking advantage of [React Hooks](https://reactjs.org/docs/hooks-intro.html).

## Styled components
I am using [styled components](https://styled-components.com/) to leverage the possibility of using component's props inside CSS as well as theming.

## Running the project
To run the project locally, just run the `yarn start`.

## Screenshots
Start page:
![alt text][start_page]
Lyrics found:
![alt text][lyrics_found]

[start_page]: start_page.png "Start page"
[lyrics_found]: lyrics_found.png "Lyrics have been found"