import React from 'react';
import styles from 'modules/PrimaryMenu/PrimaryMenu.module.scss'
import Button from "components/Button";
import {useNavigate} from "react-router-dom";
import {MatchTheFirstLetter} from "route_constants";

const PrimaryMenu: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.primaryMenu}>
            <Button onClick={() => navigate(MatchTheFirstLetter)}>Сопоставить первую букву картинки с гласной буквой</Button>
        </div>
    );
};

export default PrimaryMenu;
