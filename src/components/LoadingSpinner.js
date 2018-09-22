import React from 'react';
import Spinner from './img/spinner.gif';


const LoadingSpinner = () => (

    <div style={styles.container}>
        <img src={Spinner} alt="spinner"/>
    </div>

);

const styles = {
    container:{
        height: '100vh',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    }
};

export default LoadingSpinner;

