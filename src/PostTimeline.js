import React from 'react';
import SinglePost from './singlePost';
class PostTimeline extends React.Component{

    render(){
        return(
            <div>
                <ul className = "list-group">
                    {this.props.items.map( i => {
                        return(
                           <SinglePost i={i} handleDelete={this.props.handleDelete} 
                           postComments={this.props.postComments}/>
                            
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default PostTimeline;