import React from 'react';
import ButtonIcon from '../Form/Buttons/ButtonIcon';
import ArrowIcon from 'material-ui/svg-icons/navigation-arrow-drop-right';

export default class ScrollToTopContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            show: false,
            intervalId: 0
        };
    }

    componentDidMount() {       
        window.addEventListener('scroll', this.handleScroll);      
    }

    componentWillUnmount() {   
        clearInterval(this.state.intervalId);
        window.removeEventListener('scroll', this.handleScroll);        
    }

    handleScroll = () => {        
        if (window.pageYOffset !== 0 && this.state.show == false) {
            this.setState({ show: true })
        }
        else if (window.pageYOffset === 0) {
            this.setState({ show: false })
        }
    };

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
            this.setState({ show: false })
        }

        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }    

    render() {
        return (
            this.state.show &&                
                <div className='scroll'
                onClick={() => { this.scrollToTop(); }}>
                    <ButtonIcon
                        icon={<ArrowIcon className="rotateimg270" />}
                    />
                </div>            
        );        
    }
} 