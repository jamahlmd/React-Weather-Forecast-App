import React from 'react';
import {Button} from 'antd';
import propTypes from 'prop-types';

//Map over the recentSearches array and display every recent search as a Button
//If the recent search is the same as the current city give it the 'primary' class otherwise the 'default' class
const RecentSearches = ({recent,current,onClick,loading}) => (
    <div
        className="recent"
        style={{paddingTop: '8px'}}>
        {
            recent.map( (rec) => <Button
                loading={loading}
                onClick={() => onClick(rec)}
                style={{marginRight: '8px',textTransform: 'capitalize'}}
                key={rec}
                type={rec === current ? 'primary' : 'default'}
                size={'small'}
            >{rec}</Button>)
        }
    </div>
);

RecentSearches.propTypes = {
  recent: propTypes.array.isRequired,
  current: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
};

export default RecentSearches;