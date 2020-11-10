import React from 'react';
import Nav from '../Nav/Nav';

const Slide = ({ str, color }) => {
    return (
        <div className={'assd'} style={{ backgroundColor: color }}>
            <Nav tabs={['Model F', 'Model U', 'Model C', 'Model K']} />
        </div>
    );
}
export default Slide;