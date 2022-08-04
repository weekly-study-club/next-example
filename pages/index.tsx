import { classNames } from "../utils/ClassNames";
import Styles from './index.module.scss';

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className={classNames(Styles.Box, Styles.RedBox)}>
        Box
      </div>
    </div>
  );
};

export default HomeScreen;
