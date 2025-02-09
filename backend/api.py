from fastapi import FastAPI
from scrape import comment_extractor


app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI Boilerplate!"}

# Example endpoint
@app.get("/url={url}")
def say_hello(url):
    emotion=comment_extractor(url)
    return {"polarity": f"{emotion}!"}