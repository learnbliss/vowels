import React from 'react';
import styles from 'modules/App/App.module.scss'

type AppTypes = {
    children: React.ReactNode
}

const App: React.FC<AppTypes> = ({children}) => {
    return (
        <div className={styles.primaryContainer}>
            <div className={styles.secondaryContainer}>{children}</div>
        </div>
    );
}

export default App;
