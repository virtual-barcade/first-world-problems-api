# first-world-problems REST api

Link: [https://first-world-problems-api.herokuapp.com/](https://first-world-problems-api.herokuapp.com/)

## API Endpoint Reference

GET `https://first-world-problems-api.herokuapp.com/api/v1/song/:problem`

```json
{
  "problemDesc": "Can't hear the TV over the chips I'm eating.",
  "song": {
    "album": {
      "album_type": "album",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY"
          },
          "href": "https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY",
          "id": "4dpARuHxo51G3z768sgnrY",
          "name": "Adele",
          "type": "artist",
          "uri": "spotify:artist:4dpARuHxo51G3z768sgnrY"
        }
      ],
      "available_markets": ["AR", "BO"],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/1azUkThwd2HfUDdeNeT147"
      },
      "href": "https://api.spotify.com/v1/albums/1azUkThwd2HfUDdeNeT147",
      "id": "1azUkThwd2HfUDdeNeT147",
      "images": [
        {
          "height": 636,
          "url":
            "https://i.scdn.co/image/4dd5a511e378838ef564cc343304019b8f430bcd",
          "width": 640
        },
        {
          "height": 298,
          "url":
            "https://i.scdn.co/image/98e98371cf400f65633822d61bfe66370fa6df16",
          "width": 300
        },
        {
          "height": 64,
          "url":
            "https://i.scdn.co/image/7ace39dafcac6a253a026ffa473e0f14389fa1d8",
          "width": 64
        }
      ],
      "name": "21",
      "release_date": "2011-01-19",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:1azUkThwd2HfUDdeNeT147"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY"
        },
        "href": "https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY",
        "id": "4dpARuHxo51G3z768sgnrY",
        "name": "Adele",
        "type": "artist",
        "uri": "spotify:artist:4dpARuHxo51G3z768sgnrY"
      }
    ],
    "available_markets": ["AR", "BO"],
    "disc_number": 1,
    "duration_ms": 241693,
    "explicit": false,
    "external_ids": {
      "isrc": "GBBKS1000348"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3CKCZ9pfwAfoMZlMncA1Nc"
    },
    "href": "https://api.spotify.com/v1/tracks/3CKCZ9pfwAfoMZlMncA1Nc",
    "id": "3CKCZ9pfwAfoMZlMncA1Nc",
    "is_local": false,
    "name": "Set Fire to the Rain",
    "popularity": 73,
    "preview_url":
      "https://p.scdn.co/mp3-preview/70e56ff5287602e2720bec6838e51cb89fa2ce2d?cid=2350b4886019485187f7c4500ff876a7",
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:3CKCZ9pfwAfoMZlMncA1Nc"
  }
}
```

GET `https://first-world-problems-api.herokuapp.com/api/v1/song/random/problem`

```json
{
  "problemId": 6,
  "song": {
    "album": {
      "album_type": "album",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2wOqMjp9TyABvtHdOSOTUS"
          },
          "href": "https://api.spotify.com/v1/artists/2wOqMjp9TyABvtHdOSOTUS",
          "id": "2wOqMjp9TyABvtHdOSOTUS",
          "name": "Ludwig van Beethoven",
          "type": "artist",
          "uri": "spotify:artist:2wOqMjp9TyABvtHdOSOTUS"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4LYCuV8d6rylb6zjv2k03l"
          },
          "href": "https://api.spotify.com/v1/artists/4LYCuV8d6rylb6zjv2k03l",
          "id": "4LYCuV8d6rylb6zjv2k03l",
          "name": "Paul Lewis",
          "type": "artist",
          "uri": "spotify:artist:4LYCuV8d6rylb6zjv2k03l"
        }
      ],
      "available_markets": ["AD", "AR"],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4bNwPPpk01D8pVV9IFSBde"
      },
      "href": "https://api.spotify.com/v1/albums/4bNwPPpk01D8pVV9IFSBde",
      "id": "4bNwPPpk01D8pVV9IFSBde",
      "images": [
        {
          "height": 640,
          "url":
            "https://i.scdn.co/image/c2658dfce99fa8762dc97bb79113982d44bcda08",
          "width": 640
        },
        {
          "height": 300,
          "url":
            "https://i.scdn.co/image/f083b2f9bba789b09bdacf4208cee2620af3bcf5",
          "width": 300
        },
        {
          "height": 64,
          "url":
            "https://i.scdn.co/image/71e3f2344e2a72cce3a340c2586073536f9a0055",
          "width": 64
        }
      ],
      "name": "Beethoven: Piano Sonatas, Vol.3",
      "release_date": "2007-09-25",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:4bNwPPpk01D8pVV9IFSBde"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2wOqMjp9TyABvtHdOSOTUS"
        },
        "href": "https://api.spotify.com/v1/artists/2wOqMjp9TyABvtHdOSOTUS",
        "id": "2wOqMjp9TyABvtHdOSOTUS",
        "name": "Ludwig van Beethoven",
        "type": "artist",
        "uri": "spotify:artist:2wOqMjp9TyABvtHdOSOTUS"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4LYCuV8d6rylb6zjv2k03l"
        },
        "href": "https://api.spotify.com/v1/artists/4LYCuV8d6rylb6zjv2k03l",
        "id": "4LYCuV8d6rylb6zjv2k03l",
        "name": "Paul Lewis",
        "type": "artist",
        "uri": "spotify:artist:4LYCuV8d6rylb6zjv2k03l"
      }
    ],
    "available_markets": ["AD", "AR"],
    "disc_number": 3,
    "duration_ms": 315426,
    "explicit": false,
    "external_ids": {
      "isrc": "FRZ140632090"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3DNRdudZ2SstnDCVKFdXxG"
    },
    "href": "https://api.spotify.com/v1/tracks/3DNRdudZ2SstnDCVKFdXxG",
    "id": "3DNRdudZ2SstnDCVKFdXxG",
    "is_local": false,
    "name":
      "Sonata No. 14 \"Moonlight\" in C-Sharp Minor\", Op. 27 No. 2: I. Adagio sostenuto",
    "popularity": 66,
    "preview_url":
      "https://p.scdn.co/mp3-preview/7c2b7bbe98f908c395f2c7517760707a20bac794?cid=2350b4886019485187f7c4500ff876a7",
    "track_number": 9,
    "type": "track",
    "uri": "spotify:track:3DNRdudZ2SstnDCVKFdXxG"
  }
}
```

GET `https://first-world-problems-api.herokuapp.com/api/v1/song/:songId/problem/id/:problemId`

```json
{
  "problemId": "4",
  "song": {
    "album": {
      "album_type": "album",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY"
          },
          "href": "https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY",
          "id": "4dpARuHxo51G3z768sgnrY",
          "name": "Adele",
          "type": "artist",
          "uri": "spotify:artist:4dpARuHxo51G3z768sgnrY"
        }
      ],
      "available_markets": ["AR", "BO"],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/1azUkThwd2HfUDdeNeT147"
      },
      "href": "https://api.spotify.com/v1/albums/1azUkThwd2HfUDdeNeT147",
      "id": "1azUkThwd2HfUDdeNeT147",
      "images": [
        {
          "height": 636,
          "url":
            "https://i.scdn.co/image/4dd5a511e378838ef564cc343304019b8f430bcd",
          "width": 640
        },
        {
          "height": 298,
          "url":
            "https://i.scdn.co/image/98e98371cf400f65633822d61bfe66370fa6df16",
          "width": 300
        },
        {
          "height": 64,
          "url":
            "https://i.scdn.co/image/7ace39dafcac6a253a026ffa473e0f14389fa1d8",
          "width": 64
        }
      ],
      "name": "21",
      "release_date": "2011-01-19",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:1azUkThwd2HfUDdeNeT147"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY"
        },
        "href": "https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY",
        "id": "4dpARuHxo51G3z768sgnrY",
        "name": "Adele",
        "type": "artist",
        "uri": "spotify:artist:4dpARuHxo51G3z768sgnrY"
      }
    ],
    "available_markets": ["AR", "BO"],
    "disc_number": 1,
    "duration_ms": 241693,
    "explicit": false,
    "external_ids": {
      "isrc": "GBBKS1000348"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3CKCZ9pfwAfoMZlMncA1Nc"
    },
    "href": "https://api.spotify.com/v1/tracks/3CKCZ9pfwAfoMZlMncA1Nc",
    "id": "3CKCZ9pfwAfoMZlMncA1Nc",
    "is_local": false,
    "name": "Set Fire to the Rain",
    "popularity": 73,
    "preview_url":
      "https://p.scdn.co/mp3-preview/70e56ff5287602e2720bec6838e51cb89fa2ce2d?cid=2350b4886019485187f7c4500ff876a7",
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:3CKCZ9pfwAfoMZlMncA1Nc"
  }
}
```

GET `https://first-world-problems-api.herokuapp.com/api/v1/song/:songId/problem/desc/:problemDesc`

```json
{
  "problemDesc": "Can't hear the TV over the chips I'm eating.",
  "song": {
    "album": {
      "album_type": "album",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY"
          },
          "href": "https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY",
          "id": "4dpARuHxo51G3z768sgnrY",
          "name": "Adele",
          "type": "artist",
          "uri": "spotify:artist:4dpARuHxo51G3z768sgnrY"
        }
      ],
      "available_markets": ["AR", "BO"],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/1azUkThwd2HfUDdeNeT147"
      },
      "href": "https://api.spotify.com/v1/albums/1azUkThwd2HfUDdeNeT147",
      "id": "1azUkThwd2HfUDdeNeT147",
      "images": [
        {
          "height": 636,
          "url":
            "https://i.scdn.co/image/4dd5a511e378838ef564cc343304019b8f430bcd",
          "width": 640
        },
        {
          "height": 298,
          "url":
            "https://i.scdn.co/image/98e98371cf400f65633822d61bfe66370fa6df16",
          "width": 300
        },
        {
          "height": 64,
          "url":
            "https://i.scdn.co/image/7ace39dafcac6a253a026ffa473e0f14389fa1d8",
          "width": 64
        }
      ],
      "name": "21",
      "release_date": "2011-01-19",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:1azUkThwd2HfUDdeNeT147"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY"
        },
        "href": "https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY",
        "id": "4dpARuHxo51G3z768sgnrY",
        "name": "Adele",
        "type": "artist",
        "uri": "spotify:artist:4dpARuHxo51G3z768sgnrY"
      }
    ],
    "available_markets": ["AR", "BO"],
    "disc_number": 1,
    "duration_ms": 241693,
    "explicit": false,
    "external_ids": {
      "isrc": "GBBKS1000348"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3CKCZ9pfwAfoMZlMncA1Nc"
    },
    "href": "https://api.spotify.com/v1/tracks/3CKCZ9pfwAfoMZlMncA1Nc",
    "id": "3CKCZ9pfwAfoMZlMncA1Nc",
    "is_local": false,
    "name": "Set Fire to the Rain",
    "popularity": 73,
    "preview_url":
      "https://p.scdn.co/mp3-preview/70e56ff5287602e2720bec6838e51cb89fa2ce2d?cid=2350b4886019485187f7c4500ff876a7",
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:3CKCZ9pfwAfoMZlMncA1Nc"
  }
}
```
