import React from 'react';
import styles from 'modules/PrimaryMenu/PrimaryMenu.module.scss'
import Button from "components/Button";
import {useNavigate} from "react-router-dom";
import {ROUTE_MATCH_FIRST_LETTER} from "constants/route_constants";

const PrimaryMenu: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.primaryMenu}>
            <Button onClick={() => navigate(ROUTE_MATCH_FIRST_LETTER)}>Сопоставить первую букву картинки с гласной
                буквой</Button>
        </div>
    );
};

export default PrimaryMenu;
