import React, {useEffect, useState} from 'react';
import styles from './MatchFirstLetter.module.scss'
import {VOWELS} from "constants/contants";
import ImageGeneration from "modules/ImageGeneration/ImageGeneration";
import {matchFirstLetterSelector} from "core/matchFirstLetter/matchFirstLetterSelectors";
import {useAppDispatch, useAppSelector} from "redux/hooks";
import {getFirstLowerCaseLetter} from "helpers/commonHelpers";
import {useSpeech} from "hooks/useSpeech";
import {setRightAnswerLetter, setTargetWord} from "core/matchFirstLetter/matchFirstLetterSlice";
import cx from 'classnames';


const MatchFirstLetter: React.FC = () => {
    const {targetWord, rightAnswerLetter} = useAppSelector(matchFirstLetterSelector)
    const dispatch = useAppDispatch();

    const isEndSpeech = () => {
        dispatch(setRightAnswerLetter(''));
    }

    const {handleSpeech} = useSpeech(isEndSpeech);

    const handleClick = (vowel: string) => {
        if (rightAnswerLetter) return;
        const vowelLetter = getFirstLowerCaseLetter(vowel)
        const targetLetter = getFirstLowerCaseLetter(targetWord)

        if (vowelLetter === targetLetter) {
            handleSpeech(`правильно, это... ${targetLetter.toUpperCase()}...! ;${targetWord}`);
            dispatch(setTargetWord(''))
            dispatch(setRightAnswerLetter(targetLetter))
        } else {
            handleSpeech(`${vowelLetter.toUpperCase()}! ;неправильно`)
        }
    }

    return (
        <div className={styles.matchFirstLetter}>
            <div className={styles.vowelsWrapper}>
                {VOWELS.map((vowel) =>
                    (<div onClick={() => handleClick(vowel)} key={vowel}>
                        <div
                            className={cx(styles.vowel, {[styles.rightAnswer]: rightAnswerLetter === getFirstLowerCaseLetter(vowel)})}>
                            {vowel}</div>
                    </div>)
                )}
            </div>
            <ImageGeneration/>
        </div>
    );
}
export default MatchFirstLetter;
