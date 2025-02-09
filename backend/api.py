from fastapi import FastAPI
from scrape import comment_extractor
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class url(BaseModel):
    url: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI Boilerplate!"}



@app.post("/url/")
async def comment_extractor2(url:url):
    emotion=comment_extractor(url.url)
    return {"polarity": f"{emotion[0]}!",
            "id":f"{emotion[1]}"}