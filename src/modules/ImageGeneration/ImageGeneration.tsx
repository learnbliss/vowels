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

    const handleGetImage = () => {
        if (isLoading) return;
        dispatch(setRightAnswerLetter(''))
        const words = getRandomItem(DICTIONARY_FIRST_VOWELS);
        setIsLoading(true)
        setOutput(undefined)
        fetchImageFromWord(words.eng).then((res) => {
            setOutput(res)
            setIsLoading(false)
        })
        const word = words.ru;
        dispatch(setTargetWord(word))
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
            </div>
            {error && <div>Ошибка загрузки</div>}
            <div onClick={handleGetImage} className={styles.arrowWrapper}>
               <Arrow/>
            </div>
            {isLoading && <div className={styles.block}/>}
        </>
    );
};

export default ImageGeneration;