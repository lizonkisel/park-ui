import styles from './AddPhoto.module.css';
import plate from '../../plate.png';

import { FileInput, Placeholder } from '@telegram-apps/telegram-ui';

export const AddPhoto = () => (
  <div className={styles.addPhoto__wrapper}>
    <Placeholder
      className={styles.addPhoto_photoField}
      action={<FileInput label="Upload a photo" />}
      header="Upload a photo"
      description="Tap one of the buttons below to upload or take a license plate photo"
    >
      <img
        className={styles.addPhoto_img}
        alt="Telegram sticker"
        src={plate}
      />
  </Placeholder>
  </div>
);