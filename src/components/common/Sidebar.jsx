import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { popularTagsLoad } from '../../actions/app';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    } 

    componentDidMount(){
        this.props.onPopularTags();
    }

    render() { 
        const {tags} = this.props;
        return (
            <div className="sidebar">
                <h6>Popular tags</h6>
                <ul className='tag-list'>
                    {
                        tags.lenght === 0 
                        ? 
                        <div></div>
                        :
                        tags.map((tag, index) => <li  key={index}>{tag}</li>)
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({   
        tags: props.tags
  })
  
  const mapDispatchToProps = dispatch => ({
      onPopularTags: () => {
            dispatch(popularTagsLoad())
      }
  });
          
          
  
SideBar.propTypes = {
    common: PropTypes.object.isRequired,
    onPopularTags: PropTypes.func.isRequired
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(SideBar);