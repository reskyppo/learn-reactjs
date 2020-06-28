import React, { Component, Fragment } from 'react'
import './BlogPost.css'
import Post from '../../../component/Post/Post'
import API from '../../../services'

class BlogPost extends Component{
    state = {
        post: [],
        formBlogPost: {
            id    : 1,
            title : '',
            body  : '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    }
    
    componentDidMount(){
        this.getPostAPI()
    }
    
    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })
        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
    }
    
    putDataAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id)
        .then ((res) => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id    : 1,
                    title : '',
                    body  : '',
                    userId: 1
                }
            })
        })
    }
        
    postDataAPI = () =>{
        API.postNewsBlog(this.state.formBlogPost)
        .then ((res) => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id    : 1,
                    title : '',
                    body  : '',
                    userId: 1
                }
            })
        })
    }
    
    handleUpdate = (data) => {
            console.log(data);
        this.setState({
            isUpdate    : true,
            formBlogPost: data
        })
    }

    handleRemove = (data) => {
        API.deleteNewsBlog(data)
        .then(res => {
            this.getPostAPI();
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp       = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost : formBlogPostNew
        }, () => {
            console.log('value form blogpost', this.state.formBlogPost)
        })
    }
    
    handleSubmit = () => {
        if (this.state.isUpdate){
            this.putDataAPI()
        }else{
            this.postDataAPI()
        }
    }



    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    render(){
        return(
            <Fragment>
                <p     className = 'selection-title'>Blog Post</p>
                <div   className = "form-add-post">
                <label htmlFor   = "title">title</label>
                <input value     = {this.state.formBlogPost.title} type = "text" name = "title" placeholder = "add title"  onChange = {this.handleFormChange}/>
                <label htmlFor   = "body">body content</label>
                    <textarea 
                            value       = {this.state.formBlogPost.body}
                            name        = "body" id            = "body" cols = "30" rows = "10"
                            placeholder = "add body content"
                            onChange    = {this.handleFormChange}></textarea>
                    <button className   = "btn-submit" onClick = {this.handleSubmit} >Simpan</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                    return <p> {comment.name} - {comment.email} </p>
                    })
                } */}
                {
                  this.state.post.map(post => {
                        return <Post 
                        key      = {post.id}
                        data     = {post}
                        remove   = {this.handleRemove}
                        update   = {this.handleUpdate}
                        goDetail = {this.handleDetail}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;