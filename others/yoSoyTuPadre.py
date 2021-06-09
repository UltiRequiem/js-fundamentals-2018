# ./yoSoyTuPadre.js en Python
import requests

API_URL = "https://swapi.dev/api/people/n".replace("n", "5")

DATA = requests.get(API_URL).json()

if DATA["name"] == "Darth Vader":
    print("Yo soy tu padre.")
else:
    print(f"Me llamo {DATA['name']}.")
