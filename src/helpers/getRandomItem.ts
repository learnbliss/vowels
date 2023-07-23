import {DictionaryFirstVowelsType} from "types/generateImage";

export const getRandomItem = (arr: DictionaryFirstVowelsType[]) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}
