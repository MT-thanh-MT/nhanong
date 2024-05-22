import { CameraOutlined, CommentOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Button, Space } from 'antd';
import Search from 'antd/es/input/Search';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    const onSearch = (value) => {
        console.log('value', value);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                <Avatar size={60} src={images.logo} /> Photobox
                </div>
                <Search
                    placeholder="Search"
                    onSearch={onSearch}
                    enterButton
                    style={{
                        width: 280,
                    }}
                />

                <div className={cx('actions')}>
                    <Space>
                        <Button type="primary" shape="circle" icon={<CommentOutlined />} />
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<ShoppingCartOutlined />}
                            onClick={() => alert('he')}
                        />
                    </Space>
                </div>
            </div>
        </header>
    );
}

export default Header;
