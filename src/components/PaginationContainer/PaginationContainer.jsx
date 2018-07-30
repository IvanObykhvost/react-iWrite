import React from 'react';
// import Button from '../Form/Buttons/Button';
import Loader from '../Loader/Loader';

export default class PaginationContainer extends React.Component {
    constructor(props) {
        super(props); 
        
        this.initState = {
            page: 0,
            count: 0,
            limit: 5,
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
        this.handelLoadMore();
        window.addEventListener('scroll', this.handleScroll);
    }


    componentDidUpdate(prevProps){
        if(this.props.title !== prevProps.title){
            this.setState({
                ...this.initState,
                onLoad: this.props.onLoad,
                title: this.props.title
            },
            () => this.handelLoadMore()
        )}
    }

    componentWillUnmount() {
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

        return this.state.onLoad(this.state.page, this.state.limit)
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

    render() {        
        let {state} = this;

        return (
            <div className="load-more height-40">
            {
                state.inProgress ?
                    <Loader />
                    :
                    null
            }
            </div>
            
                      
        );

    }
}