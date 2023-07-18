import React, {FC, useEffect, useState} from "react";
import {getRandomItem} from "helpers/getRandomItem";
import {DICTIONARY_FIRST_VOWELS} from "constants/contants";
import styles from './ImageGeneration.module.scss'
import Loader from "components/Loader";
import {fetchImageFromWord} from "core/api_fetch/fetchImage";
import Arrow from "components/Arrow";
import {useAppDispatch} from "redux/hooks";
import {setLetter} from "core/matchFirstLetter/matchFirstLetterSlice";

const ImageGeneration: FC = () => {
    const dispatch = useAppDispatch();

    const [output, setOutput] = useState<string | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleGetImage = () => {
        const targetWords = getRandomItem(DICTIONARY_FIRST_VOWELS);
        setIsLoading(true)
        fetchImageFromWord(targetWords.eng).then((res) => {
            setOutput(res)
            setIsLoading(false)
        })
        const letter = targetWords.ru.charAt(0).toLowerCase();
        dispatch(setLetter(letter))
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
