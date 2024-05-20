import { HeartOutlined, HomeOutlined, MessageOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);
function Sidebar() {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu', { active })}>
                <div className={cx('avatar-toggle')} onClick={handleToggle}>
                    <Avatar size={84} src={images.me} />
                </div>
                <li style={{ '--i': 2 }}>
                    <a href="#1">
                        <Tooltip title="Message">
                            <MessageOutlined />
                        </Tooltip>
                    </a>
                </li>
                <li style={{ '--i': 3 }}>
                    <a href="#2">
                        <Tooltip title="Like">
                            <HeartOutlined />
                        </Tooltip>
                    </a>
                </li>
                <li style={{ '--i': 4 }}>
                    <a href="/profile">
                        <Tooltip title="About">
                            <UserOutlined />
                        </Tooltip>
                    </a>
                </li>
                <li style={{ '--i': 5 }}>
                    <a href="#4">
                        <Tooltip title="Good Videos">
                            <VideoCameraOutlined />
                        </Tooltip>
                    </a>
                </li>
                <li style={{ '--i': 6 }}>
                    <Link to="/home">
                        <Tooltip title="Home">
                            <HomeOutlined />
                        </Tooltip>
                    </Link>
                </li>
            </div>
        </div>
    );
}

export default Sidebar;
