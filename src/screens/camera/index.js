import { connect } from 'react-redux';
import { default as Camera } from './camera';
import { setCameraCaptureImage} from '../../store';

const mapStateToProps = (state) => ({
    userCameraCapture:state.user.userCameraCapture
});

const mapDispatchToProps = (dispatch) => ({
    setCameraCaptureImage:(image) => dispatch(setCameraCaptureImage(image))
});

export default connect(mapStateToProps, mapDispatchToProps)(Camera);

