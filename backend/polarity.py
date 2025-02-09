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


    if average_polarity > 0:
        print("Your youtube video positive comments")
        return "Your youtube video has positive comments"
    elif average_polarity < 0:
        print("text is negaitve")
        return "Your youtube video has negative comments"
    else:
        print("Text is neutral")
        return "Your youtube video has balanced negative and postive comments"