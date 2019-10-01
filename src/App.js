import React from 'react';
import Navbar from './Navbar';
import PostForm from './PostForm';
import PostTimeline from './PostTimeline';
import axios from 'axios';


class App extends React.Component {
    state = {
        list:[]
    };
    componentDidMount(){
        axios
            .get("http://localhost:8080/posts")
            .then(result =>
                {   console.log('Printing First Result Data',result.data)
                    this.setState({
                        list: result.data
                    })
                })
    }

    addItem = item => {
        axios
            .post(`http://localhost:8080/posts`,{
                posttext: item,
                postcomments: []
            })
            .then(result => {
                this.setState({
                    list: [result.data, ...this.state.list]
                });
            })
    };
    handleDelete = id => {
        axios
            .delete(`http://localhost:8080/posts/${id}`)
            .then(result => {
                this.setState({
                    list:this.state.list.filter(result =>
                        result.id !== id)
                })
            })
    }
  postComments = (id, comments) => {
    const existingComments =
      this.state.list.find(post => post.id === id).postcomments || []
    axios
      .patch(`http://localhost:8080/posts/${id}`, {
        postcomments: [comments, ...existingComments],
      })
      .then(result => {
        // https://stackoverflow.com/a/35206193
        const foundIndex = this.state.list.findIndex(post => post.id === id)
        const list = [...this.state.list]
        list[foundIndex] = result.data
        this.setState({ list })
      })
  }
    

    render(){
        return(
        <div>
            <Navbar/>
            <PostForm addItem = {this.addItem}/>
            <PostTimeline items = {this.state.list} handleDelete = {this.handleDelete} 
            postComments = {this.postComments}/>
        </div>
        );
    }

}
export default App;
