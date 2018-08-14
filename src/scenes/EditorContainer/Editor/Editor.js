import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
//import React from 'react';
import Input from '../../../components/Form/Inputs/Input';
import Button from '../../../components/Form/Buttons/Button';
import InputComboBox from '../../../components/Form/Inputs/InputComboBox';
// import Label from '../../../components/Form/Label/Label';
import Alert from '../../../components/Form/Alert/Alert';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonIcon from "../../../components/Form/Buttons/ButtonIcon";
import LibraryBookIcon from 'material-ui/svg-icons/av/library-books';
import RichTextEditor from 'react-rte';



export default class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: RichTextEditor.createEmptyValue(),        
        }
    }    

    

    onChange = (value) => {
        this.setState({ value });
        //console.log("are saving long description: ");
        //console.log(value);
        value.toString('html');
        //console.log(value._cache.html);    
        this.props.onChangeLongDescription(value);
    };   

    

    render() {
        const { post, onChange, setCategories, onChangeTag, onSubmit, inProgress, error } = this.props;

        return (
            <div>
                <Container className="editor-page">
                    <Row>
                        <Col className="title">
                            <h1>
                                <div className="icon">
                                    <ButtonIcon
                                        icon={<LibraryBookIcon />}
                                    />
                                </div>
                                <div className="text-big">
                                    {
                                        post.id ?
                                            'Update post' :
                                            'Add post'
                                    }
                                </div>
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3" className="left-col">
                            Help
                    </Col>
                        <Col xs="9" className="right-col">
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
                            <div className="text-small">
                                Basic Information
                            </div>
                        </Col>
                    </Row>
                    <form onSubmit={onSubmit}>
                        <Row>
                            <Col xs="3" className="left-col">
                                Title
                        </Col>
                            <Col xs="9" className="right-col">
                                <Input
                                    type={"text"}
                                    name="title"
                                    placeholder="Title"
                                    value={post.title}
                                    onChange={onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3" className="left-col">
                                Short description
                            </Col>
                            <Col xs="9" className="right-col">
                                <Input
                                    type={"text"}
                                    name="shortDescription"
                                    placeholder="Short description"
                                    value={post.shortDescription}
                                    onChange={onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3" className="left-col">
                                Long description
                        </Col>
                            <Col xs="9" className="right-col">
                                <RichTextEditor                                   
                                    value={this.state.value}
                                    onChange={this.onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3" className="left-col">
                                Feedback
                            </Col>
                            <Col xs="9" className="right-col">
                                <div className="feedback">
                                    <Input
                                        type="checkbox"
                                        name="disableComments"
                                        defaultChecked={post.disableComments}
                                        onChange={onChange}
                                    />{' '}
                                    Disable Comments
                                </div>
                                <div className="feedback">
                                    <Input
                                        type="checkbox"
                                        name="disableRatings"
                                        defaultChecked={post.disableRatings}
                                        onChange={onChange}
                                    />{' '}
                                    Disable Ratings
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="title">
                                <div className="text-small">
                                    Categorization
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3" className="left-col">
                                Status
                            </Col>
                            <Col xs="9" className="right-col">
                                <Input
                                    type="select"
                                    name="status"
                                    defaultValue={post.status}
                                    onChange={onChange}
                                >
                                    <option value="incomplete">Incomplete</option>
                                    <option value="complete">Complete</option>                                    
                                </Input>                                
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3" className="left-col">
                                Genres 
                            </Col>
                            <Col xs="9" className="right-col">
                                {
                                    post.categories.map((category) => {
                                        return (<Button className="category-button" outline onClick={() => setCategories(category.id)} key={category.id} active={category.selected} color="primary" name={category.name} />)
                                    })
                                }
                            </Col>
                        </Row>
                    </form>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <Alert
                                message={error}
                                color={Alert.color.danger}
                            />
                            <form onSubmit={onSubmit}>
                                <Input
                                    type={"text"}
                                    name="title"
                                    placeholder="Title"
                                    value={post.title}
                                    onChange={onChange}
                                />
                                <Input
                                    type={"text"}
                                    name="topic"
                                    placeholder="Topic"
                                    value={post.topic}
                                    onChange={onChange}
                                />
                                <Input
                                    type="textarea"
                                    name="message"
                                    placeholder="Message"
                                    value={post.message}
                                    onChange={onChange}
                                    rows={4}
                                />
                                <InputComboBox
                                    name="tags"
                                    placeholder="Tags"
                                    onChange={onChangeTag}
                                    value={post.tags.map(tag => ({ value: tag, label: tag }))}
                                    noResultsText="Create new tags"
                                />
                                <Button
                                    type="submit"
                                    name="Publish article"
                                    color="primary"
                                    disabled={inProgress}
                                />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Editor.propTypes = {
    postId: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}