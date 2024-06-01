import styles from './Main.module.css';

import { AddPhoto } from '../AddPhoto/AddPhoto';
import { ButtonField } from '../ButtonsField/ButtonField';

export const Main = () => (
  <main className={styles.main}>
    <AddPhoto />
    <ButtonField />
  </main>
);