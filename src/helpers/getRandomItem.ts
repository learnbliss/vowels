import {DictionaryFirstVowelsType} from "types/generateImage";

export const getRandomItem = (arr: DictionaryFirstVowelsType[]) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log('arr[randomIndex]:', arr[randomIndex])
    return arr[randomIndex]
}
