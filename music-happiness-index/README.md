# Music Happiness Index

### Visualize values on the 'Happiness Scale' for my most-played songs based on audio features pulled from Spotify API.

Currently hosted [Here](https://jamessoole.github.io).

![alt text](https://github.com/jamessoole/music-happiness-index/blob/master/preview-image-both.png?raw=true)


Python script `run.py` calls `client.py`, writing data to `track-data-short_term.js`,`track-data-medium_term.js`, or `track-data-long_term.js`

From-scratch front end in `index.html` , `music-mood.css`, `music-mood.js`

Features: 
- energy
- valence
- mode (major/minor key)
- danceability
- tempo
- self-made aggregate total


## To Run:
- get OAUTH token from [Spotify Developers](https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/)
- run `export token=<paste token here>` on cmd line
- optional `env | grep token` to check if token's loaded
- `python3 run.py`

Notes:
- `export` is linux keyword, use `set` for windows
- tokens expires after an hour
- `KeyError: 'tracks'` likely caused by expired token
- current syntax for python3 (f-strings)
