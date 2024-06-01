import styles from './ButtonField.module.css';

import { Button } from '@telegram-apps/telegram-ui';

export const ButtonField = () => (
  <div className={styles.buttonField__wrapper}>
    <Button size="l" stretched>
      Take a photo
    </Button>  
    <Button size="l" stretched>
      Share geolocation
    </Button>
    <Button size="l" stretched>
      Pay
    </Button>
  </div>
);