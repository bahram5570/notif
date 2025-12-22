import styles from './styles.module.css';

import { MAX_WIDTH } from '@constants/app.constants';

const LoadingProgressBar = () => {
  return (
    <div className={styles.container} style={{ maxWidth: MAX_WIDTH }}>
      <div className={`bg-impo_Red_500 ${styles.progress}`} />
    </div>
  );
};

export default LoadingProgressBar;
