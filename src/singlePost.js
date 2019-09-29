import React from 'react';
class SinglePost extends React.Component{
    state = {input:""}
    handleCommentChange = event => {
        this.setState({
            input: event.target.value,
        })
    }

    handleCommentSubmit = e => {
        this.props.postComments(e,this.state.input)
        this.setState({input:''});
    }

    render(){
        const { i } = this.props

        return(
            <li key = {i.id} className = "list-group-item"
            style = {{marginRight: `5%`, marginLeft: `5%`, marginTop: `2%`,marginBottom: `2%`}}>
                                
                <div className = "card-body" style = {{margin: `2%`}}>
                    <p>{i.posttext}</p>

                    <input type = "text" 
                    onChange = {this.handleCommentChange}
                    value = {this.state.input}
                    />
                     <a className = "card-link"
                        href = "#" 
                        onClick = {this.handleCommentSubmit.bind(this, i.id)}>
                        Comment</a>

                    <a className = "card-link float-right"
                        href = "#"
                        style = {{margin: `2%`}}
                        onClick = {this.props.handleDelete.bind(this, i.id)}>
                        Delete Post</a>

                    <ul class="list-group list-group-flush">
                    {   
                        i.postcomments.map(element => {
                        return(
                        <li class="list-group-item">{element}</li>
                            ) 
                        })     
                    }
                    </ul>

                </div>
            </li>
        )
    }
}
export default SinglePost;