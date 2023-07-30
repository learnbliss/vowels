import React, {FC, useEffect, useMemo, useState} from "react";
import {getRandomItem} from "helpers/getRandomItem";
import {DICTIONARY_FIRST_VOWELS} from "constants/contants";
import styles from './ImageGeneration.module.scss'
import Loader from "components/Loader";
import {fetchImageFromWord} from "core/api_fetch/fetchImage";
import Arrow from "components/Arrow";
import {useAppDispatch, useAppSelector} from "redux/hooks";
import {setRightAnswerLetter, setTargetWord} from "core/matchFirstLetter/matchFirstLetterSlice";
import {matchFirstLetterSelector} from "core/matchFirstLetter/matchFirstLetterSelectors";
import {useSpeech} from "hooks/useSpeech";

const ImageGeneration: FC = () => {
    const dispatch = useAppDispatch();
    const {targetWord, rightAnswerLetter} = useAppSelector(matchFirstLetterSelector)

    const [output, setOutput] = useState<string | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(false);

    const handleGetImage = async () => {
        if (isLoading) return;
        dispatch(setRightAnswerLetter(''))
        const words = getRandomItem(DICTIONARY_FIRST_VOWELS);
        // const words = {eng: 'donkey', ru: 'ослик'}; //для теста конкретного слова
        setIsLoading(true)
        setOutput(undefined)
        try {
            const response = await fetchImageFromWord(words.eng)
            setError(false)
            setIsLoading(false);
            setOutput(response);
            const word = words.ru;
            dispatch(setTargetWord(word))
        } catch (e) {
            setIsLoading(false);
            setError(true)
            console.error('fetchImageFromWord, ошибка загрузки изображения')
        }
    }

    const imgName = `...${targetWord.substring(1)}`;

    useEffect(() => {
        !rightAnswerLetter && handleGetImage();
    }, [rightAnswerLetter]);

    const {handleSpeech} = useSpeech();

    return (
        <>
            <div className={styles.resultImage}>
                {isLoading && <Loader/>}
                {output && <>
                    <div className={styles.imgName}>{imgName}</div>
                    <img onClick={() => handleSpeech(targetWord)} className={styles.img} src={output} alt="art"/>
                </>}
                {error && <div>Ошибка загрузки, возможно не работает интернет</div>}
            </div>
            <div onClick={handleGetImage} className={styles.arrowWrapper}>
               <Arrow/>
            </div>
            {isLoading && <div className={styles.block}/>}
        </>
    );
};

export default ImageGeneration;
