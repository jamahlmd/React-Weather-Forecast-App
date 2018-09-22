import React from 'react';
import { Row, Col, Input } from 'antd';
import Refresh from './Refresh';
import RecentSearches from './RecentSearches';
import propTypes from 'prop-types';


const Search = Input.Search;


const SearchForm = ({onSearch,recent,current,loading,refresh,lastSearch}) => (
    <div>
        <Row style={styles.searchFormContainer} gutter={16}>
            <Col md={{span: 8, offset:0}} xs={{span: 20, offset:2}} style={{display: 'flex', justifyContent: 'space-around'}}>
                <Refresh
                    lastSearch={lastSearch}
                    refresh={refresh}
                />
            </Col>
            <Col md={{span: 8, offset:0}} xs={{span: 20, offset:2}}>
                <Search
                    placeholder="Enter a city"
                    enterButton="Search"
                    size="large"
                    onSearch={value => onSearch(value)}
                />
            </Col>
            <Col md={{span: 8, offset:0}} xs={{span: 24, offset:0}}>
                <RecentSearches
                    loading={loading}
                    current={current}
                    recent={recent}
                    onClick={onSearch}
                />
            </Col>
        </Row>
    </div>
);

const styles = {
    searchFormContainer:{
        borderBottom: '1px solid #ADD6FF',
        padding: '13px 0'
    }
};

SearchForm.propTypes = {
  onSearch: propTypes.func.isRequired,
  recent: propTypes.array.isRequired,
  current: propTypes.string.isRequired,
  lastSearch: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired,
  refresh: propTypes.bool.isRequired,
};

export default SearchForm;

