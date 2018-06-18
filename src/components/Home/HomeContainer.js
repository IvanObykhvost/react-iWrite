import { connect } from 'react-redux';
import Home from './Home';

function mapStateToProps(stateProps) {
    return {
        posts: stateProps.posts
    };
}

export default connect(
    mapStateToProps,
    null
)(Home);