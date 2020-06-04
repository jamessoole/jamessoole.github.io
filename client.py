import random
import string
import urllib
import requests

class SpotifyClient(object):
    # constructor
    # self denotes this instance
    def __init__(self, api_key):
        self.api_key = api_key
    


    def get_top_tracks(self):
        term = input("Choose term 'long' (ever), 'medium' (1/2 year), or 'short' (month) :  ")
        if (term == 'long'): term = 'long_term'
        if (term == 'medium'): term = 'medium_term'
        if (term == 'short'): term = 'short_term'
        if not (term == 'long_term' or term == 'medium_term' or term == 'short_term'):
            print("Term not recognized. Default: short_term.")
            term = 'short_term'

        limit = input("How many items (max 50)?   ")
        try:
            if not (int(limit) > 0 and int(limit) < 51):
                print("Out of range. Default: 5.")
                limit = 5
        except:
            print("Invalid Input. Default: 5.")
            limit = 5

        url = f'https://api.spotify.com/v1/me/top/tracks?time_range={term}&limit={limit}'

        # make a request
        response = requests.get(
            url,
            headers = {
                "Content-Type" : "application.json", 
                "Authorization" : f"Bearer {self.api_key}"
            }
        )

        # parse response as json
        response_json = response.json()
        if ('error' in response_json):
            print(f"There has been an Error: {response_json['error']}")

        tracks = [ track for track in response_json['items'] ]
        print(f'Found {len(tracks)} tracks')
        return tracks



    def get_top_artists(self):
        term = input("Choose term 'long' (ever), 'medium' (1/2 year), or 'short' (month) :  ")
        if (term == 'long'): term = 'long_term'
        if (term == 'medium'): term = 'medium_term'
        if (term == 'short'): term = 'short_term'
        if not (term == 'long_term' or term == 'medium_term' or term == 'short_term'):
            print("Term not recognized. Default: short_term.")
            term = 'short_term'

        limit = input("How many items (max 50)?   ")
        try:
            if not (int(limit) > 0 and int(limit) < 51):
                print("Out of range. Default: 5.")
                limit = 5
        except:
            print("Invalid Input. Default: 5.")
            limit = 5


        url = f'https://api.spotify.com/v1/me/top/artists?time_range={term}&limit={limit}'

        # make a request
        response = requests.get(
            url,
            headers = {
                "Content-Type" : "application.json", 
                "Authorization" : f"Bearer {self.api_key}"
            }
        )

        # parse response as json
        response_json = response.json()
        if ('error' in response_json):
            print(f"There has been an Error: {response_json['error']}")

        artists = [ artist for artist in response_json['items'] ]
        print(f'Found {len(artists)} artists')
        return artists



    def get_analysis(self, track_id):
        url = f'https://api.spotify.com/v1/audio-features/{track_id}'
        response = requests.get(
            url,
            headers = {
                "Content-Type" : "application.json", 
                "Authorization" : f"Bearer {self.api_key}"
            }
        )
        response_json = response.json()
        if ('error' in response_json):
            print(f"There has been an Error: {response_json['error']}")

        return response_json



    def get_track(self, track_id):
        url = f'https://api.spotify.com/v1/tracks/{track_id}'
        response = requests.get(
            url,
            headers = {
                "Content-Type" : "application.json", 
                "Authorization" : f"Bearer {self.api_key}"
            }
        )
        response_json = response.json()
        if ('error' in response_json):
            print(f"There has been an Error: {response_json['error']}")

        return response_json






    def get_artist_details(self, artist_id):
        url = f'https://api.spotify.com/v1/artists/{artist_id}'
        response = requests.get(
            url,
            headers = {
                "Content-Type" : "application.json", 
                "Authorization" : f"Bearer {self.api_key}"
            }
        )
        response_json = response.json()
        if ('error' in response_json):
            print(f"There has been an Error: {response_json['error']}")

        return response_json



