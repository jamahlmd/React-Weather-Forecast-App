import React from 'react';
import { Row, Col } from 'antd';
import propTypes from 'prop-types';

const Footer = ({text}) => (

    <div>
        <Row style={styles.footerStyles}>
            <Col md={{span: 6, offset:18}} xs={{span: 10, offset:14}}>
                <h5>{text}</h5>
            </Col>
        </Row>
    </div>

);

const styles = {
    footerStyles: {
        backgroundColor: '#ADD6FF',
        paddingTop: '6px',
        paddingBottom: '3px'
    }
};

Footer.propTypes = {
  text: propTypes.string.isRequired
};

export default Footer;