import { connect } from 'react-redux';
import { default as Network } from './network';
import { getAllPost,setAppLoader } from '../../store';

const mapStateToProps = (state) => ({
    userAppLoadere:state.user.userAppLoadere,
    userPost:state.user.userPost
});

const mapDispatchToProps = (dispatch) => ({
    getAllPost:() => dispatch(getAllPost()),
    setAppLoader:(val) => dispatch(setAppLoader(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);

