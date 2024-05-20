import { Avatar, Col, Image, Row } from 'antd';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cover-img')}>
                <Image src={images.coverImg} />
            </div>
            <div className={cx('avatar-wrapper')}>
                <div className={cx('avatar')} >
                    <Avatar size={164} src={images.me} />
                    <div className={cx('avatar-status')} />
                    
                </div>
                <div className={cx('info')}>
                        <h2>Thanh Mai</h2>
                        <i>Active 1 year 9 monts ago</i>
                        <p>Hello everyone ! There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    </div>
            </div>
        </div>
    );
}

export default Profile;
