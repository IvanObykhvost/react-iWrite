import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col, Container, Card, CardHeader, CardBody, Label, FormGroup } from 'reactstrap';
import Input from '../../../components/Form/Inputs/Input';
import InputCheckbox from '../../../components/Form/Inputs/InputCheckbox';
import Button from '../../../components/Form/Buttons/Button';
import Alert from '../../../components/Form/Alert/Alert';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonIcon from "../../../components/Form/Buttons/ButtonIcon";
import ButtonLink from "../../../components/Form/Buttons/ButtonLink";
import LibraryBookIcon from 'material-ui/svg-icons/av/library-books';
import RichTextEditor from 'react-rte';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class StoryEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {          
            value: RichTextEditor.createValueFromString(props.story.longDescription, "html"),        
        }               
    }    


    render() {
        const { story, onChange, setCategories, onSubmit, inProgress, error } = this.props;

        return (
            <Container className="editor-story">
                <Card>
                    <CardHeader>
                    <FontAwesomeIcon icon='book'/>
                    {
                        story.id ?
                            'Update story' :
                            'Add story'
                    }
                    <div className='editor-story-tools'>
                        <ButtonLink
                            name='Manage Stories'
                            to='/manage/posts'
                        />
                    </div>
                    </CardHeader>
                    <CardBody>
                    {
                        error &&
                        <Row>
                            <Col>
                                <Alert
                                    message={error}
                                    color={Alert.color.danger}
                                />
                            </Col>
                        </Row>
                    }
                    <Row>
                        <Col md={3} className="left-col">
                             Help
                        </Col>
                        <Col md={9} className="right-col">
                            <span className="topic">Tips</span>
                            <ol className="list">
                                <li>If you need any help with grammar, story construction, or just general advice on writing Fanfiction, please check out this excellent guide by Ezn</li>
                                <li>Once you've created your story, youll be able to add chapters for it.</li>
                                <li>Don't forget to submit your story on the story page when you're ready for it to be seen by others.</li>
                                <li>Not accepting stories that are just links to gdocs. If your story is heavily formatted, provide a link to the gdocs version at the top but still provide a copy here.</li>
                            </ol>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="title">
                            Basic Information
                        </Col>
                    </Row>
                    <form onSubmit={onSubmit}>
                        <Row>
                            <Col md={3} className='left-col'>
                                Title
                            </Col>
                            <Col md={9} className='right-col'>
                                <Input
                                    type={Input.type.text}
                                    name='title'
                                    placeholder='Title'
                                    value={story.title}
                                    onChange={onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className='left-col'>
                                Short description
                            </Col>
                            <Col md={9} className='right-col'>
                                <Input
                                    type={Input.type.text}
                                    name='shortDescription'
                                    placeholder='Short description'
                                    value={story.shortDescription}
                                    onChange={onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className='left-col'>
                                Long description
                            </Col>
                            <Col md={9} className='right-col'>
                                <RichTextEditor                                   
                                         value={this.state.value}
                                         onChange={this.onChange}
                                     />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className='left-col'>
                                Feedback
                            </Col>
                            <Col md={9} className='right-col'>
                                <div className='editor-story-feedback'>
                                    <InputCheckbox
                                        id='disableComments'
                                        defaultChecked={story.disableComments}
                                        label='Disable Comments'
                                        onChange={onChange}
                                    />
                                    <InputCheckbox
                                        id='disableRatings'
                                        defaultChecked={story.disableRatings}
                                        label='Disable Ratings'
                                        onChange={onChange}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="title">
                                Finish
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className='left-col'>
                                Guidelines and Rules
                            </Col>
                            <Col md={9} className='right-col'>
                                <span className="topic">Don't Post (Content)</span>
                                <ol className="list">
                                    <li>Stories that plagiarize other stories. This means intentionally copying another author's words and presenting them as your own.</li>
                                    <li>Stories you did not write. If you are not the original author or a co-author, you cannot post it, even with permission. This includes "novelizing" a comic, movie, game, etc. that you did not create. For example: a Halo crossover with the same plot, scenes, dialogue, etc. but with the characters replaced by ponies.</li>
                                    <li>The same story twice. This does not include variants of the same story where the two versions differ on a rating tag, such as a Teen version and a Mature version.</li>
                                    <li>Stories you have deleted and are now resubmitting. Please contact a moderator to have your original deleted story recovered.</li>
                                    <li>Stories that are not related to My Little Pony. Your story must be related to the MLP universe at the time of submission, or else it will be rejected.</li>
                                    <li>Stories containing copyrighted song lyrics. Lyrics from MLP songs are allowed.</li>
                                    <li>"Rewrites" of an old story posted as a new story, unless the changes are substantial. If you are not rewriting your story from the ground up, please just edit your changes into the original story.</li>
                                </ol>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className='left-col'>
                            </Col>
                            <Col md={9} className='right-col'>
                                <Button
                                    name='Create story'
                                    type={Button.type.submit}
                                    color={Button.color.primary}
                                    disabled={inProgress}
                                />
                            </Col>
                        </Row>
                    </form>
                    </CardBody>
                </Card>
            </Container>
                
            //     <Container className="editor-page">
            //         <Row>
            //             <Col className="title">
            //                 <h1>
            //                     <div className="icon">
            //                         <ButtonIcon
            //                             icon={<LibraryBookIcon />}
            //                         />
            //                     </div>
            //                     <div className="text-big">
            //                         {
            //                             story.id ?
            //                                 'Update story' :
            //                                 'Add story'
            //                         }
            //                     </div>
            //                 </h1>
            //             </Col>
            //         </Row>
            //         <Row>
            //             <Col xs="3" className="left-col">
            //                 Help
            //             </Col>
            //             <Col xs="9" className="right-col">
            //                 <span className="topic">Tips</span>
            //                 <ol className="list">
            //                     <li>If you need any help with grammar, story construction, or just general advice on writing Fanfiction, please check out this excellent guide by Ezn</li>
            //                     <li>Once you've created your story, youll be able to add chapters for it.</li>
            //                     <li>Don't forget to submit your story on the story page when you're ready for it to be seen by others.</li>
            //                     <li>Not accepting stories that are just links to gdocs. If your story is heavily formatted, provide a link to the gdocs version at the top but still provide a copy here.</li>
            //                 </ol>
            //             </Col>
            //         </Row>
            //         <Row>
            //             <Col className="title">
            //                 <div className="text-small">
            //                     Basic Information
            //                 </div>
            //             </Col>
            //         </Row>
            //         <form onSubmit={onSubmit}>
            //             <Row>
            //                 <Col xs="3" className="left-col">
            //                     Title
            //                  </Col>
            //                 <Col xs="9" className="right-col">
            //                     <Input
            //                         type={"text"}
            //                         name="title"
            //                         placeholder="Title"
            //                         value={story.title}
            //                         onChange={onChange}
            //                     />
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col xs="3" className="left-col">
            //                     Short description
            //                 </Col>
            //                 <Col xs="9" className="right-col">
            //                     <Input
            //                         type={"text"}
            //                         name="shortDescription"
            //                         placeholder="Short description"
            //                         value={story.shortDescription}
            //                         onChange={onChange}
            //                     />
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col xs="3" className="left-col">
            //                     Long description
            //             </Col>
            //                 <Col xs="9" className="right-col">
            //                     <RichTextEditor                                   
            //                         value={this.state.value}
            //                         onChange={this.onChange}
            //                     />
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col xs="3" className="left-col">
            //                     Feedback
            //                 </Col>
            //                 <Col xs="9" className="right-col">
            //                     <div className="feedback">
            //                         <Input
            //                             type="checkbox"
            //                             name="disableComments"
            //                             defaultChecked={story.disableComments}
            //                             onChange={onChange}
            //                         />{' '}
            //                         Disable Comments
            //                     </div>
            //                     <div className="feedback">
            //                         <Input
            //                             type="checkbox"
            //                             name="disableRatings"
            //                             defaultChecked={story.disableRatings}
            //                             onChange={onChange}
            //                         />{' '}
            //                         Disable Ratings
            //                     </div>
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col className="title">
            //                     <div className="text-small">
            //                         Categorization
            //                     </div>
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col xs="3" className="left-col">
            //                     Status
            //                 </Col>
            //                 <Col xs="9" className="right-col">
            //                     <Input
            //                         type="select"
            //                         name="status"
            //                         defaultValue={story.status}
            //                         onChange={onChange}
            //                         className="status-select"
            //                     >
            //                         <option value="incomplete">Incomplete</option>
            //                         <option value="complete">Complete</option>                                    
            //                     </Input>                                
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col xs="3" className="left-col">
            //                     Genres 
            //                 </Col>
            //                 <Col xs="9" className="right-col">
            //                     {
            //                         story.categories.map((category) => {
            //                             return (<Button className="category-button" outline onClick={() => setCategories(category.id)} key={category.id} active={category.selected} color="primary" name={category.text} />)
            //                         })
            //                     }
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col className="title">
            //                     <div className="text-small">
            //                         Finish
            //                     </div>
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col xs="3" className="left-col">
            //                     Guidelines and Rules
            //                 </Col>
            //                 <Col xs="9" className="right-col">
            //                     <span className="topic">Don't Post (Content)</span>
            //                     <ol className="list">
            //                         <li>Stories that plagiarize other stories. This means intentionally copying another author's words and presenting them as your own.</li>
            //                         <li>Stories you did not write. If you are not the original author or a co-author, you cannot post it, even with permission. This includes "novelizing" a comic, movie, game, etc. that you did not create. For example: a Halo crossover with the same plot, scenes, dialogue, etc. but with the characters replaced by ponies.</li>
            //                         <li>The same story twice. This does not include variants of the same story where the two versions differ on a rating tag, such as a Teen version and a Mature version.</li>
            //                         <li>Stories you have deleted and are now resubmitting. Please contact a moderator to have your original deleted story recovered.</li>
            //                         <li>Stories that are not related to My Little Pony. Your story must be related to the MLP universe at the time of submission, or else it will be rejected.</li>
            //                         <li>Stories containing copyrighted song lyrics. Lyrics from MLP songs are allowed.</li>
            //                         <li>"Rewrites" of an old story posted as a new story, unless the changes are substantial. If you are not rewriting your story from the ground up, please just edit your changes into the original story.</li>
            //                     </ol>
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col xs="3" className="left-col">
            //                 </Col>
            //                 <Col xs="9" className="right-col">
            //                     <Button
            //                         type="submit"
            //                         name="Create story"
            //                         color="primary"
            //                         disabled={inProgress}
            //                         className="create-story"
            //                     />
            //                 </Col>
            //             </Row>                        
            //         </form>                   
            //     </Container>
            // </Container>
        );
    }
}

/*StoryEditor.propTypes = {
    postId: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}*/