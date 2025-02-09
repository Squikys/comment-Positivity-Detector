from textblob import TextBlob



def polarity(texts):
    total_polarity = 0

    for text in texts:
        blob = TextBlob(text)
        total_polarity += blob.sentiment.polarity


        average_polarity = total_polarity / len(texts)


    print("Polarity:" ,average_polarity)


    if average_polarity > 0:
        print("Text is positive")
        return "Text is positive"
    elif average_polarity < 0:
        print("text is negaitve")
        return "Text is negaitve"
    else:
        print("Text is neutral")
        return "Text is neutral"