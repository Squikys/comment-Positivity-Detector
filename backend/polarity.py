from textblob import TextBlob

def polarity(texts):
    total_polarity = 0

    for text in texts:
        blob = TextBlob(text)
        total_polarity += blob.sentiment.polarity

    if len(texts)==0:
        return "this video has no comments"
    average_polarity = total_polarity / len(texts)


    print("Polarity:" ,average_polarity)
    
    if average_polarity > 0.5:
        return "Your youtube video has strongly positive comments"
    elif 0.1 < average_polarity <= 0.5:
        return "Your youtube video has postive comments"
    elif -0.1 <= average_polarity <= 0.1:
        return "Your youtube video has balanced negative and postive comments"
    elif -0.5 <= average_polarity < -0.1:
        return "Your youtube video has negative comments"
    else:
        return "Your youtube video has strongly neagtive comments"

   