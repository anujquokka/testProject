import { connect } from 'react-redux';
import { default as LocalDb } from './localdb';
import {setLocalDummyData } from '../../store';

const mapStateToProps = (state) => ({
    userLocalData:state.user.userLocalData
});

const mapDispatchToProps = (dispatch) => ({
    setLocalDummyData: (data) => dispatch(setLocalDummyData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocalDb);

