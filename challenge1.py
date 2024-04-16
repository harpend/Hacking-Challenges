import os
from dotenv import load_dotenv
import base64
#c2hyZWtpc2xvdmVzaHJla2lzbGlmZQ==
load_dotenv()

password = os.getenv("PASSWORD")

if not password:
    print("error")
else:
    guess = input("Enter input: ")
    encoded_guess = base64.b64encode(guess.encode('utf-8'))
    guess = encoded_guess.decode('utf-8')
    if guess == password:
        print("Yippeee")
