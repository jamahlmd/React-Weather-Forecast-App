import React from 'react';
import { Row, Col } from 'antd';
import propTypes from 'prop-types';



const Header = ({title}) => (

    <div>
        <Row style={styles.headerStyles}>
            <Col md={{span: 6, offset:6}} xs={{span: 20, offset:2}}><h1>{title}</h1></Col>
        </Row>
    </div>

);

const styles = {
    headerStyles: {
        backgroundColor: '#ADD6FF',
        paddingTop: 10,
    }
};

Header.propTypes = {
    title: propTypes.string.isRequired
};

export default Header;