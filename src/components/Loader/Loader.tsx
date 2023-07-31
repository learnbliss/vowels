import React, {FC} from 'react';
import styles from './Loader.module.scss'
import cx from "classnames";

type LoaderTypes = {
    page?: boolean
}

const Loader: FC<LoaderTypes> = ({page = false}) => {
    return (
        <div className={cx({[styles.page]: page })}>
            <div className={styles.loader}>Loading...</div>
        </div>
    )
};

export default Loader;
