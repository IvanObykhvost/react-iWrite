import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Pagination from "react-js-pagination";

const type = {
    button: 'button', 
    loader: 'loader'
}

export default class PaginationContainer extends React.Component {
    constructor(props) {
        super(props); 
        
        this.initState = {
            type: this.props.type,
            page: 0,
            count: 0,
            limit: this.props.limit,
            inProgress: false,
            isLoadMore: false,
            onLoad: this.props.onLoad,
            title: this.props.title
        };

        this.state = {
           ...this.initState
        };
    }

    componentDidMount() {
        if(this.state.type === type.loader){
            this.handelLoadMore();
            window.addEventListener('scroll', this.handleScroll);
        }
        if(this.state.type === type.button){
            this.setPage(this.state.page);
        }
           
    }


    componentDidUpdate(prevProps){
        if(this.props.title !== prevProps.title){
            if(this.state.type === type.loader){
                this.setState({
                    ...this.initState,
                    onLoad: this.props.onLoad,
                    title: this.props.title,
                    type: this.props.type,
                    limit: this.props.limit
                },
                () => this.handelLoadMore()
            )}
            else if(this.state.type === type.button){
                this.setState({
                    ...this.initState,
                    onLoad: this.props.onLoad,
                    title: this.props.title,
                    type: this.props.type,
                    limit: this.props.limit
                },
                () => this.setPage(this.state.page))
            }
        }
    }

    componentWillUnmount() {
        if(this.state.type === type.loader)
            window.removeEventListener('scroll', this.handleScroll);
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
      }

    handleScroll = () => {
        const wrappedElement = document.getElementById('root');
        if (this.isBottom(wrappedElement) && this.state.isLoadMore) {
            this.handelLoadMore();
            document.removeEventListener('scroll', this.handleScroll);
        }
      };

    handelLoadMore= () => {
        this.setState({
            inProgress: true
        });

        return this.state.onLoad(this.state.page, this.state.limit, this.state.type)
            .then(
                data => {
                    if(!data) return Promise.reject();
                    let {state} = this;
                    
                    if(data.length > 0){
                        state.count = data.count;
                        state.page++;
                        state.isLoadMore = true;
                    }
                    else {
                        state.isLoadMore = false;
                    }   
                        
                    if(state.count <= state.limit * state.page)
                        state.isLoadMore = false;
                    
                    state.inProgress = false;
                    this.setState({state});
                }
            )
            .catch(e => {})
    }

    setPage = page => {
        if(page !== 0 && page === this.state.page) return;
        let currentPage = page;
        currentPage = currentPage === 0 ? currentPage : currentPage - 1;
        this.setState({
            inProgress: true,
            isLoadMore: true,
        });

        return this.state.onLoad(currentPage, this.state.limit, this.state.type)
            .then(
                data => {
                    if(!data) return Promise.reject('');
                    let {state} = this;
                    
                    state.count = data.count;
                    state.inProgress = false;
                    state.page = page === 0 ? 1 : page;
                    this.setState({state});
                }
            )
            .catch(e => {})
    }
    
    render() {        
        let {state} = this;
        return (
            <div className="load-more height-40">
            {
                !state.inProgress ? 
                    state.type === type.button &&
                        <Pagination
                            hideNavigation
                            pageRangeDisplayed={5}
                            activePage={state.page}
                            itemsCountPerPage={state.limit}
                            totalItemsCount={state.count}
                            onChange={this.setPage}
                        />
                    :
                    state.type === type.loader &&
                    <Loader />
            }
            </div>
            
                      
        );

    }
}



PaginationContainer.type = type;

PaginationContainer.propTypes = {
    type: PropTypes.oneOf(Object.keys(type)).isRequired,
    title: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    onLoad: PropTypes.func.isRequired
}

