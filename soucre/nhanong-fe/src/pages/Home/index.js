import { Avatar, Carousel, Col, Image, Row } from 'antd';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Row justify="center" gutter={[10, 10]}>
                <Col span={24} justify="center" align="center">
                    <Avatar size={84} src={images.me} />
                    he
                </Col>
                <Col span={24}>
                    <Carousel autoplay>
                        <div>
                            <Image src={images.timthumb} />
                        </div>
                        <div>
                            <Image src={images.timthumb} />
                        </div>
                        <div>
                            <Image src={images.timthumb} />
                        </div>
                        <div>
                            <Image src={images.timthumb} />
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
