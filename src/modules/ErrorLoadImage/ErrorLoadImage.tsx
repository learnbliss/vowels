import React from 'react';
import styles from './ErrorLoadImage.module.scss';

type ErrorLoadImageProps = {
    test?: any;
}

const ErrorLoadImage: React.FC<ErrorLoadImageProps> = (props) => {
    return (
        <div className={styles.error}>Ошибка загрузки изображения, но вы всё равно можете нажимать на выделенную область и воспринимать слово на
            слух</div>
    );
};

export default ErrorLoadImage;
