import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, Media } from 'reactstrap';
import ButtonLink from '../../../components/Form/Buttons/ButtonLink';
import TabContainer from '../../../components/TabContainer/TabContainer';
import { CheckImage } from "../../../utils/Operations";
import ButtonFollowContainer from '../../../components/Form/Buttons/ButtonFollowContainer/ButtonFollowContainer';
// import ButtonIcon from '../../../components/Form/Buttons/ButtonIcon';

export default function Profile({profile, isUser, currentUser, tabList}) {
    return (                 
        <Container className="user-info">
            <div className="profile">
                <Row>
                    <Col md={12}>
                        <div className='profile-display'>
                            {/* <div className='profile-display-bio'>
                                {profile.bio}
                            </div> */}
                            <div className='profile-display-cover'>
                                <Media
                                    src={CheckImage('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0ICA0HBw0HBwcHBw0HBwcHDQ8ICQcNFREWFhURExMYHSggGBolGxMTITEhJSkrLi4uFx8zODMsNyg5LisBCgoKDg0NDw0NEisZFRkrLS0rKysrLSsrKysrKzcrKysrLSsrKystLSsrKysrKy0rKysrKy0tKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAHBABAQEBAAMBAQAAAAAAAAAAAAIBAxESEwQU/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGhEBAQEBAQEBAAAAAAAAAAAAAAECERIDE//aAAwDAQACEQMRAD8A+Q8CyTfRuQ9njwLoGYOcHkDmRhLQzhk42YMmTxO6DmDyRzBmQPU7S8keSbnMecx6XpGS31U5yFnJusm9HeivOQs4l6yP0d81ucRZwLaPEHzF812cBZwLabiDOQs5L8/OLPzl6aZQZyFnJfnAWcG6PlDnMWc1vwb8R6PEeQ30V/Jm8h6CTZBUq65l1zHoI6wm8WXBFwJajvCaxXcEXLNKlvCqxVUlVIKSpawHhRUB9S8UmjvmLIU5zbnM6HtPkDyFE8jJ5MW6TzzNnmonkdPFul6mnkbPJVHA6OAdbiSeJk8Vs8DZ4B6GZQzxHnB6E/nNn84XZ5h5ucB5+d6c/nHn5yXZ583mZ+cefnenn5x5+ct2efJ5efmFn5nq5+cWfnLdnnyeXn525+d6ufnb8C+z/k8r+dv871fgz4N7H83l/Bnwer8A7wH2F+by94h3i9TeIK4mmyXDyq4k3yetXEq+J5pO4eRfJPfJ698U/TiaaSuXkdOSe+b1unFP04m6SvLvmTUPSvkTfIW9PP2A+i2uYPmxvavOQs5LM5GTxbqKOeJ0cVccT44BaaRHHA+OCyOCiOBLpWYRRwPjgtjgdPAl2rPmingdPBbPE2eJLtWfJDPA2eC2eJk8iXas+SLOA84Lc5DzkS7VnyRZxHnFZnIecy+zz5os4iziszm35l9HnzR/JvyWfN3zb0PhH8mfJb6M+bem8It5M3kt+bN5j6LcIN5Ark9DeYN5jNkvzedXEm+L065l1yPNp35vKvin6cXr3yIvipNo6+bxunBL04vb6cU3TirNOfWHi9OKe+L2OnFPfFSVDWXk1yL3k9O+JfyN1NZnI2eSnOZs8k7pWYTxxURxOjmojmndL4+ZMcT44nRzPjmldOnPzJnkbPI6eZswndLz5kzyMnmdMDyCXSkwTnMeczsgWSW6UmCsgWQbkiyS9NMlZDfQ31b4DpvJXo31M9W+A6PCvV3qb4d4brcK9Wepvh3hutwn1ZsneGeo9DhOyDYUbLNkeluU2wXUK9kGyaUtyirmTfNfUFVB5pPWHnXyT9OT07gi+amdOffzeV05JunJ63TmmvmtnTl383lXyL3k9K+ZXyVmnNcKsg2YHkGzKN06s4DEHxDok6JSunRjDog6ZdMnTKVrozlkyZMtnDMwlqsjMkWS3MHmF6eQOSLMbmCzA6eQPgXhrfACHw3w1odYPh3gTgYPh3gXhzdYPh3gTvDdYHh3gXhgsHwHcMYIcL3A7hm4HcHocK2S6k/cLrDSksTXJNyrrCbk8qWso7hPcLrki5Vzpz7whuC/mtqC/RWac1wbkjmW5g8xO10TLZw2cDOGzidq2YOcNnASZJKtIPMHmBweEqkbgsZgsKZuNZjcAWtY0Bc1zmZznOAHOc4Gc5zhZjBMFmMazRZgdEwQBoKwzQaMClVhVYdRdHidiesKrFFYVWHlS1E9SD1PrAeFJUbl2DwGaLNKaGSZJeaOdLVIdJklTpk6SqQzB4XmizS1SGYLAZrc0poPBAzRZoCJoWgInMcDNcxrM5znADnOYzNY5hoLmOZos5mu3Q7rAzQ63dDumLQUChbpdaaEoKKoytLrTxOg0At0Jk6Vmiyk+UPKNxOVTNDnU00ZNFsUlUzRmUmyjJotikqjKHlJ8oWUXh5VGULKT5Q8ovDyn5os0jKHlBw3Ts1uaVlCzS8Ezy3yXlN8sI/Lg+XeQ4w3A8t8txhMD5d5bjC8s8h8s8sAvId1m6HdFhbod0O0HaHhei3QbodoG0aQtra0utdVF1R5CWurS91lUXVGkTtFuh8l7YfY3CWpcseWjyx50V455pZNmTaObMmy2Hmlk2ZlossedC2KTSzLHlo86CzoXh5pZljy0eWPOheHmleWPLSZY8svDzSvLHlJcseWHDelOU32T5YssvB9H+zvYn3b7NweneXeSfdvuHB6b5Z5L92ezcbpm0zaL2g7Q8Dpm0HaL2gbY8LabtA2i9sG2aQt0btF7Ze2XtmkLdG1ZVWXVl1ZpE7odWXVl1ZdWaRO6M22e5G2D3NxP0jzoOeiLLHNq8QlWzZk9EU2PLDh5VudB50RZ0FnQOGlW50HnRDnQWdC3J5pdnQedEOdB50JYaaXZ0MnognoZPQvDTa+eg86IZ6GZ0Dhva3Ogs6Is6CzoHk02ty2+6POgs6Bw02r93e6X6N+gcH2p93e6b6M9243pRth2yNsO9B4Hs/bBtkb0BvQeF9H70Btkb0BvQ0hbo/ehddCN6A3oaZJdHVZddCa6F10PMkuja6FVZVWXVm4ndG7YfcjbB7jwnpHljm0uUOaURlVzY8tLNDygUirLFlpspuUHDxTliy02ULKCwVWWPLSZQ8otjdVzZk9EeUZNF4PpZnQedEeUPKDg+ledBZ0SZYstuD6V50FnRJltyw4abWfRv0SZbfcOD7VfRn0T+7PduN7Ub0Dtk+wdpuB7O2wbZW0DaHjejNsG2XtF7RpA6bVl7Ze0XtGkC0yrLqwbRe0bhLR1ZdWCqLqh4S0e2H3L2g+wp2p8HLnCWGyPGOZWDwTnAeCwWMcWiPB45wFHg8c4GMwWOcDCxuNcwtwWMcBhNxzgFrnOZnaHXOYA6DXOFgUDXONBL0FOcaNS9BrnCSl0XTnCnQaFzmI/9k=')}
                                    alt={profile.name}
                                />
                            </div>
                            <div className='profile-display-bottom'>
                                <div className='profile-display-id'>
                                    <Media
                                        className='profile-display-avatar'
                                        src={CheckImage(profile.image)} 
                                        alt={profile.name}
                                    />
                                    <div className='profile-display-name'>
                                        {profile.name}
                                    </div>
                                </div>
                                <div className='profile-display-stats'>
                                    <div className='profile-display-setting'>
                                    {
                                    currentUser && 
                                        isUser ? 
                                            <ButtonLink 
                                                to="/settings/"
                                                className="btn btn-sm btn-outline-secondary action-btn"
                                                name="Edit Settings"
                                            />
                                            :
                                            <ButtonFollowContainer
                                                username={profile.name}
                                                following={profile.following}
                                            />
                                    }
                                    </div>
                                    <div className='profile-display-stat'>
                                        <span className='profile-display-stat-counter'>
                                            25
                                        </span>
                                        <span className='profile-display-stat-title'>
                                            Posts
                                        </span>
                                    </div>
                                    <div className='profile-display-stat'>
                                        <span className='profile-display-stat-counter'>
                                            25
                                        </span>
                                        <span className='profile-display-stat-title'>
                                            Stories
                                        </span>
                                    </div>
                                    <div className='profile-display-stat'>
                                        <span className='profile-display-stat-counter'>
                                            {profile.followersCount}
                                        </span>
                                        <span className='profile-display-stat-title'>
                                            Follower
                                        </span>
                                    </div>
                                    <div className='profile-display-stat'>
                                        <span className='profile-display-stat-counter'>
                                            {profile.followingsCount}
                                        </span>
                                        <span className='profile-display-stat-title'>
                                            Following
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='profile-tabs'>
                    <Col md={9} xs={10}>
                        <TabContainer tabList={tabList}/>
                    </Col>
                    <Col md={3}>
                    </Col>
                </Row>
            </div>
        </Container>   
        )
}

Profile.propTypes = {
    currentUser: PropTypes.object,
    profile: PropTypes.object.isRequired,
    isUser: PropTypes.bool.isRequired,
    tabList: PropTypes.array.isRequired
}
