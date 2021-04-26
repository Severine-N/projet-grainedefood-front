import { connect } from 'react-redux';
import HeaderMenu from '/src/components/Header/HeaderMenu.js';
import {
    logout
} from 'src/actions/user';

const mapStateToProps = (state) => ({
    logged: state.logged,
});

const mapDispatchToProps = (dispatch) => ({
logout: ()=> dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
