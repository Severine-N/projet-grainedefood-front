import { connect } from 'react-redux';
import SubscribeInformations from '/src/pages/UserPage/SubscribeInformations.js';


const mapStateToProps = (state) => ({
    orderStartDate: state.orderStartDate,
    orderEndDate: state.orderEndDate,

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeInformations);
