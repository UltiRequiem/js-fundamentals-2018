# ./yoSoyTuPadre.js en Python
import requests

API_URL = "https://swapi.dev/api/"
PEOPLE_URL = "people/n"

PERSON = f"{API_URL}{PEOPLE_URL.replace('n','4')}"

r = requests.get(PERSON)
data = r.json()

if data["name"] == "Darth Vader":
    print("Yo soy tu padre.")
else:
    print(f'Me llamo {data["name"]}.')
