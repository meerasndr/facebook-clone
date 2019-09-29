import React from 'react';
class PostForm extends React.Component{
    state = {input:""}
    handleInputChange = event => {
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit = event => {
        this.props.addItem(this.state.input);
        this.setState({input:''});
    }
   render(){
       return(
           <div style = {{margin: `5%`}}>
                <textarea 
                    className = "form-control"
                    onChange = {this.handleInputChange}
                    value = {this.state.input}
                    />
                <button 
                type = "button" 
                className = "btn btn-primary btn-sm form-control-sm"
                onClick = {this.handleSubmit} 
                style = {{margin: `2%`}}>
                    Add Post!
                </button>
           </div>
       )
   } 
}
export default PostForm;