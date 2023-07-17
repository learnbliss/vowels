import React from 'react';
import styles from './MatchFirstLetter.module.scss'
import {VOWELS} from "constants/contants";
import ImageGeneration from "modules/ImageGeneration/ImageGeneration";

const MatchFirstLetter: React.FC = (props) => {

    return (
        <div className={styles.matchFirstLetter}>
            <div className={styles.vowelsWrapper}>
                {VOWELS.map((vowel) => <div key={vowel} className={styles.vowel}>{vowel}</div>)}
            </div>
            <ImageGeneration/>
        </div>
    );
}
export default MatchFirstLetter;
