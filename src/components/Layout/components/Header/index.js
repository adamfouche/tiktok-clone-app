import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';

const cx = classNames.bind(styles);
const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>
        {/* Search */}
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* Loading icon */}
          {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        {/* Actions */}
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
};

export default Header;
