import os
from client import SpotifyClient


# IMPORTANT - set token w/ following on cmd line
# export token=<paste token here>

# get OAUTH from
# https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/
# optional - env | grep token     linux keywords to check if loaded
# note - export is linux command, use 'set' for windows

# note - Tokens expire after an hour
# KeyError: 'tracks' likely caused by expired token

# current syntax for python3 (f-strings)

# # if you'd prefer an input for token, must be reentered every time
# token = input("What's your OAUTH Token? ")
# client = SpotifyClient(token)

def run():

    # set token
    client = SpotifyClient(os.getenv('token'))
    print(f"token is: {os.getenv('token')}")

    # # choose artists or tracks
    # choice = input("Return top 'artists' or 'tracks'?  ")
    # if not (choice == 'artists' or choice== 'tracks'):
    #     print("Term not recognized. Default: tracks.")
    #     choice = 'tracks'

    choice = 'tracks'
    
    if choice == 'tracks':
        # choose term/limit
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
        

        # get tracks
        want_analysis = input("Print audio analysis (y,n)?  ")
        tracks = client.get_top_tracks(term, limit)

        print()
        print('The following are your top tracks, starting with the most played')
        print()

        # create string of names like js array
        names = "const names = ["
        artists = "const artists = ["
        energies = "const energies = ["
        valences = "const valences = ["
        modes = "const modes = ["
        danceabilities = "const danceabilities = ["
        tempos = "const tempos = ["

        artworks = "const artworks = ["
        previews = "const previews = ["
  
        for track in tracks:
            names += ("\"" + track['name'] + "\"" + ', ')
            artists += ("\"" + track['artists'][0]['name'] + "\"" + ', ')
            
            print(f"'{track['name']}' by {track['artists'][0]['name']} ")
            
            features = client.get_analysis(track["id"])

            energies += (str(features['energy']) + ', ')
            valences += (str(features['valence']) + ', ')
            modes += (str(features['mode']) + ', ')
            danceabilities += (str(features['danceability']) + ', ')
            tempos += (str(features['tempo']) + ', ')

            if (want_analysis == 'y'):
                print(f"energy: {features['energy']}")
                print(f"valence: {features['valence']}")
                print(f"mode: {features['mode']}")
                print(f"danceability: {features['danceability']}")
                print(f"tempo: {features['tempo']}")
                print()
            
            # track artwork and preview
            track = client.get_track(track["id"])
            artworks += ("\"" + track['album']['images'][0]['url'] + "\"" + ', ')
            if (track['preview_url'] == None):
                previews += ("\"" + " " + "\"" + ', ')
            else:
                previews += ("\"" + track['preview_url'] + "\"" + ', ')



        # remove last space and comms
        names = names[:-2]
        artists = artists[:-2]
        energies = energies[:-2]
        valences = valences[:-2]
        modes = modes[:-2]
        danceabilities = danceabilities[:-2]
        tempos = tempos[:-2]
        # lst commas weird but still fine
        artworks[:-2]
        previews[:-2]

        names += "]"
        artists += "]"
        energies += "]"
        valences += "]"
        modes += "]"
        danceabilities += "]"
        tempos += "]"
        artworks += "]"
        previews += "]"

        fname = 'track-data-' + term + '.js'
        # print(f'filemane: {fname}')

        f = open(fname, 'w')
        f.write(names)
        f.write("\n")
        f.write(artists)
        f.write("\n")
        f.write(energies)
        f.write("\n")
        f.write(valences)
        f.write("\n")
        f.write(modes)
        f.write("\n")
        f.write(danceabilities)
        f.write("\n")
        f.write(tempos)
        f.write("\n")
        f.write(artworks)
        f.write("\n")
        f.write(previews)
        f.write("\n")
        f.close()







    # if choice == 'artists':
    #     want_details = input("Include audio analysis (y,n)?  ")
    #     artists = client.get_top_artists()
    #     print()
    #     print('The following are your top artists, starting with the most played')
    #     print()
    #     for artist in artists:
    #         print(f"{artist['name']} ")
    #         if (want_details == 'y'):
    #             details = client.get_artist_details(artist["id"])
    #             print(f"main genre: {details['genres'][0]}")
    #             print(f"popularity: {details['popularity']}")
    #             print()


    # # testing
    # for track in tracks:
    #     print(track['name'])


if __name__ == "__main__":
    run()