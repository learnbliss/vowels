import React from 'react';
import styles from 'modules/PrimaryMenu/PrimaryMenu.module.scss'
import Button from "components/Button";
import {useNavigate} from "react-router-dom";
import {PATH_VOWELS_MATCH_FIRST_LETTER} from "constants/route_constants";
import {useSpeech} from "hooks/useSpeech";
import Loader from "components/Loader";

const PrimaryMenu: React.FC = () => {
    const navigate = useNavigate();
    const {onLoad, errorSupportSpeech} = useSpeech();

    if (errorSupportSpeech) {
        return <div className={styles.primaryMenu}>Приложение не поддерживается вашим браузером, рекомендуется обновить или поставить последнюю версию chrome</div>
    }

    return (
        <div className={styles.primaryMenu}>
            {onLoad ?
                <Button onClick={() => navigate(PATH_VOWELS_MATCH_FIRST_LETTER)}>Сопоставить первую букву картинки с гласной
                    буквой</Button> : <Loader/>}

        </div>
    );
};

export default PrimaryMenu;
