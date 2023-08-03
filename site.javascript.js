var quotes = [
    "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "The greater the difficulty, the more glory in surmounting it. Skillful pilots gain their reputation from storms and tempests. - Epictetus",
    "Wealth consists not in having great possessions, but in having few wants. - Epictetus",
    "You have power over your mind, not outside events. Realize this, and you will find strength. - Marcus Aurelius",
    "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. - Epictetus",
    "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has. - Epictetus",
    "Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours. - Marcus Aurelius",
    "It is not the man who has too little that is poor, but the one who hankers after more. - Seneca",
    "We suffer more often in imagination than in reality. - Seneca",
    "The world turns aside to let any man pass who knows where he is going. - Epictetus",
    "Until we have begun to go without them, we fail to realize how unnecessary many things are. We\'ve been using them not because we needed them but because we had them.- Lucius Annaeus Seneca",
    "Remember, it is not enough to be hit or insulted to be harmed, you must believe that you are being harmed. If someone succeeds in provoking you, realize that your mind is complicit in the provocation. Which is why it is essential that we not respond impulsively to impressions; take a moment before reacting, and you will find it easier to maintain control. ― Epictetus",
    "The things you think about determine the quality of your mind.- Marcus Aurelius, Meditations",
    "For what prevents us from saying that the happy life is to have a mind that is free, lofty, fearless and steadfast - a mind that is placed beyond the reach of fear, beyond the reach of desire, that counts virtue the only good, baseness the only evil, and all else but a worthless mass of things, which come and go without increasing or diminishing the highest good, and neither subtract any part from the happy life nor add any part to it? A man thus grounded must, whether he wills or not, necessarily be attended by constant cheerfulness and a joy that is deep and issues from deep within, since he finds delight in his own resources, and desires no joys greater than his inner joys ― Lucius Annaeus Seneca"
];

function randomGen(arr) {
    var item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}

function load_quote() {
    document.getElementById("quote").innerHTML = "<i>" + randomGen(quotes) + "</i>";
}

load_quote();