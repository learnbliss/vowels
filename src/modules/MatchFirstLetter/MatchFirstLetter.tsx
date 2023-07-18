import React from 'react';
import styles from './MatchFirstLetter.module.scss'
import {VOWELS} from "constants/contants";
import ImageGeneration from "modules/ImageGeneration/ImageGeneration";
import {matchFirstLetterSelector} from "core/matchFirstLetter/matchFirstLetterSelectors";
import {useAppSelector} from "redux/hooks";

const MatchFirstLetter: React.FC = () => {
    const {letter} = useAppSelector(matchFirstLetterSelector)

    const handleClick = (vowel: string) => {

        const targetLetter = vowel.charAt(0).toLowerCase();
        if (targetLetter === letter) {
            console.log('correct')
        } else {
            console.log('wrong')
        }
    }

    return (
        <div className={styles.matchFirstLetter}>
            <div className={styles.vowelsWrapper}>
                {VOWELS.map((vowel) => <div onClick={() => handleClick(vowel)} key={vowel} className={styles.vowel}>{vowel}</div>)}
            </div>
            <ImageGeneration/>
        </div>
    );
}
export default MatchFirstLetter;
