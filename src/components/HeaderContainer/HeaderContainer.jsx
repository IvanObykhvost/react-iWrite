import React from 'react';
import Header from './Header/Header';

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        const currentUser = this.props.currentUser;

        this.state = {
            currentUser,
            buttons: this.initButtons(currentUser),
            classPinned: window.localStorage.getItem('pinned')
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.currentUser !== prevProps.currentUser){
            const currentUser = this.props.currentUser;

            this.setState({
                currentUser,
                buttons: this.initButtons(currentUser)
            });
        }
    }

    pin = (e) => {
        e.preventDefault();
        let pinned = 'pinned';
        localStorage.setItem('pinned', 'pinned');

        if (this.state.classPinned) {
            localStorage.setItem('pinned', '');
            pinned = '';
        }
        this.setState({
            classPinned: pinned
        });
    }

    initButtons = currentUser => {
        if(currentUser){
            return {
                main: [
                    { name: 'Home', link: '/', icon: 'home'},
                    { 
                        name: 'Posts', 
                        icon: 'file-alt', 
                        link: '/editor/'
                        // menuItems: [
                        //     {name: 'New post', link: '/editor', icon: 'pencil-alt'}
                        // ]
                    },
                    { name: 'Stories', link: '/settings/', icon: 'book' }
                ],
                tools: [
                    {icon: 'thumbtack', className: 'button-nav-pin'}
                ],
                user: [{
                    src: currentUser.image,
                    name: `${currentUser.name}`,
                    caret: true,
                    menuItems: [
                        {name: 'Profile', link: '/@' + currentUser.name, icon: 'user-alt'},
                        {name: 'Settings', link: '/settings', icon: 'cog'},
                        {name: 'Logout', link: '/logout', icon: 'power-off'}
                    ]
                }]
            }
        }

        return {
            main: [
                { name: 'Home', link: '/', icon: 'home'}
            ],
            tools: [
                {icon: 'thumbtack', className: 'button-nav-pin'}
            ],
            user: [
                { name: 'Sign In', link: '/login/', icon: 'sign-in-alt'},
                { name: 'Sign Up', link: '/register/', icon: 'sign-in-alt'}
            ]
        }
    }


    render() {
        let {state} = this;

        return(
            <Header buttons={state.buttons} pinned={state.classPinned} pin={e => this.pin(e)}/>
        );
    }
}
