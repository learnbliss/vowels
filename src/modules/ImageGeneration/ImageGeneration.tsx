import React, {FC, useEffect, useState} from "react";
import {getRandomItem} from "helpers/getRandomItem";
import {DICTIONARY_FIRST_VOWELS} from "constants/contants";
import styles from './ImageGeneration.module.scss'
import Loader from "components/Loader";
import {DictionaryFirstVowelsType} from "types/generateImage";
import {fetchImageFromWord} from "core/api_fetch/fetchImage";
import Arrow from "components/Arrow";

const ImageGeneration: FC = () => {
    const [output, setOutput] = useState<string | undefined>();
    const [words, setWords] = useState<DictionaryFirstVowelsType>(getRandomItem(DICTIONARY_FIRST_VOWELS));
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleGetImage = () => {
        const targetWords = getRandomItem(DICTIONARY_FIRST_VOWELS);
        setIsLoading(true)
        fetchImageFromWord(words.eng).then((res) => {
            setOutput(res)
            setWords(targetWords)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        handleGetImage()
    }, []);

    return (
        <>
            {isLoading ? <Loader/>
                : <>
                    {output && (
                        <div className={styles.resultImage}>
                            <img className={styles.img} src={output} alt="art"/>
                        </div>
                    )}
                    <div onClick={handleGetImage} className={styles.arrowWrapper}><Arrow/></div>
                </>
            }
        </>
    );
};

export default ImageGeneration;
