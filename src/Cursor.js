import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import useHandsfreeHook from './useHandsfreeHook';

const Cursor = ({ listening }) => {
    const [position, setActive] = useHandsfreeHook();

    useEffect(() => {
        setActive(listening);
    }, [listening]);

    return (
        <div id="pointer" style={{top: position.y, left: position.x}} />
    );
}

const mapStateToProps = ({listening}) => {
    return {
        listening,
    }
}

export default connect(mapStateToProps)(Cursor);