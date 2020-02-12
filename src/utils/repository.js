const CARD_UPPER_LIMIT = 16
const CARD_LOWER_LIMIT = 4

export const EmojiRepository = [
    "🐷",
    "🦉",
    "🐏",
    "🦌",
    "🐿",
    "🦔",
    "🦃",
    "🐪",
    "🦀",
    "🦐",
    "🦀",
    "🐡 ",
    "🐢",
    "🦖",
    "🐙",
    "🐌",
    "🐮"
]

export const POSITIVE_REINFORCEMENTS = [
    "You are smokn'g..🚬",
    "Fireeeeeeeeeee🔥",
    "Somebody has been flawless lateley💅🏻",
    "Are you a hacker?👨🏽‍💻",
    "Never seen someone so perfect 🙈"
]

export const NEGATIVE_REINFORCEMENTS = [
    "Errr!! Are you even trying?👀",
    "Quick fact, Almonds are good for memory🙈",
    "Alert!! The system has been infected by noob9o1🐏",
    "I bet if i give you the answer you would have forgot the question🤸‍♂️",
    "I will find you and i will kill you 🦉",
    "I have lost hope 🦛",
    "You droped 🧠 in the backyard"
]

export const LIMIT_HIGH = "Woahh!!! Slow down cowboy 🤙"
export const LIMIT_LOW = "Are you sure you want to play? 😑"

export function SHUFFLE_ARRAY(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export const checkCardLimits = (presentCardCount) => {
    console.log(presentCardCount)
    return (presentCardCount < CARD_LOWER_LIMIT || presentCardCount > CARD_UPPER_LIMIT) ? false : true
}

export const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}