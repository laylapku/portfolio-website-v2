---
path: "/portfolio/eloqua"
type: ["Production", "Frontend", "Backend"]
name: "Eloqua Speech Listening App"
madeFor: "Open Source"
tagline: "Listen to great speeches on your smartphone"
thumb: ../../images/projects/eloqua/thumb.png
pics: [../../images/projects/eloqua/speechlist.png, ../../images/projects/eloqua/speakerlist.png, ../../images/projects/eloqua/ctglist.png, ../../images/projects/eloqua/script.png]
url: "//speech-pwa.web.app/"
github: "//github.com/laylapku/eloqua-pwa"
highlights: [
"Multi layered many-to-many, one-to-many related data(speaker-theme-speech-text-audio) stored on Firebase Firestore for easier content updates.",
"Full control of the player from notification bar/lockscreen with Media Session API",
"State management with React Hooks and Context API (replacing Redux)",
"Speeches filterable by speaker, theme, or just a custom keyword.",
"Common features like playlist, favorites list, loop/random toggle, playback speed switch, dark mode"]
techs: ["PWA","React","JavaScript","Firebase","Redux","Material-UI","CSS","Webpack"]
summa: "Co-creator of open source project Eloqua, a React progressive web app for speech listening, made in collaboration with my coding mentor Sean Lee. Highlights: full player control from notification, many-to-many relationship data on Firestore, filter through speaker/topic/keyword, playlist, favlist, loop, playback speed switch, dark mode."
order: 100
featured: true
---

#### Table of Contents

- [Introduction](#introduction)
- [Speeches View](#speeches-view)
- [Playing Bar](#playing-bar)
- [Script View](#script-view)
- [Playlist View](#playlist-view)
- [Favorites View](#favorites-view)
- [Notification Controls](#notification-controls)
- [Dark Mode](#dark-mode)
- [Acknowledgment](#acknowledgment)

#### Introduction

The Eloqua app offers, in both audio and text, greatest speeches in history from 30+ public figures, including politicians, entrepreneurs, authors, celebrities, etc., covering a wide range of themes.

#### Speeches View

Find a speech by its speaker, theme or do a keyword search, click on title to play it or add it to playlist queue or favorites list.

![Speeches View](../../images/projects/eloqua/speechlist.png "Speeches View")

#### Playing Bar

Skip Next, Pause/Resume, Go to Playlist, or View Speech Script from the Playing Bar which is present most of the times.

![Playing Bar](../../images/projects/eloqua/toolbar.png "Playing Bar")

#### Script View

Click the title area of the playing bar to view the script text of currently playing speech.
Extended control features like loop/random toggle and playback speed switch are also in this view.

![Script View](../../images/projects/eloqua/script.png "Script View")

#### Playlist View

Showing the queued speeches to be played.
You can remove any/all speech(es) from the playlist or add one/all to the favorites list.

![Playlist View](../../images/projects/eloqua/playlist.png "Playlist View")

#### Favorites View

List of your favorite speeches list for easier access.

![Favorites View](../../images/projects/eloqua/favorites.png "Favorites View")

#### Notification Controls

View, play/resume, rewind/fast forward, go to previous/next from the notification bar or even lockscreen of your smartphone with Eloqua running in background.

![Notification Controls](../../images/projects/eloqua/notification.png "Notification Controls")

#### Dark Mode

Don’t forget to take better care of your eyes. Toggle dark mode in the Settings View for the optimal bedtime reading experience.

![Dark Mode](../../images/projects/eloqua/dark-mode.png "Dark Mode")

#### Acknowledgment

- [react](https://github.com/facebook/react/)
- [react-player](https://github.com/CookPete/react-player)
- [material-ui](https://github.com/mui-org/material-ui)
- [redux](https://github.com/reduxjs/redux)
