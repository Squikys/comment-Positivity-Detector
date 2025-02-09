from youtube_comment_downloader import YoutubeCommentDownloader
from itertools import islice
from polarity import polarity
import re

def get_video_id(url):
    pattern = r"(?:v=|\/(?:embed|v|shorts)\/|youtu\.be\/|\/v\/|vi\/|watch\?v=)([^#&?]*)"
    match = re.search(pattern, url)
    return match.group(1) if match else None


def comment_extractor(video_url):
    video_id=get_video_id(video_url)
    emotion=[]
    downloader = YoutubeCommentDownloader()
    comments = downloader.get_comments(video_id)
    com=[]
    for comment in islice(comments, 100):
        #print(comment["text"])
        com.append(comment["text"])
    emotion.append(polarity(com))
    emotion.append(video_id)
    return emotion
