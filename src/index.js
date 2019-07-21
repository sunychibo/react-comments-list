import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div className="warning__message">
                    <h4 className="warning__heading">Warning!</h4>
                    <div className="warning__content">Are you sure you want to do this</div>
                </div>
            </ApprovalCard>    
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 6:00PM"
                    avatar={faker.image.avatar()}
                    comment="Nice blog post!"/>
            </ApprovalCard>    
            <ApprovalCard>    
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 7:00PM"
                    avatar={faker.image.avatar()}
                    comment="Nice blog post!"/>
            </ApprovalCard>    
            <ApprovalCard>
                <CommentDetail
                    author="Dany"
                    timeAgo="Today at 8:00PM"
                    avatar={faker.image.avatar()}
                    comment="Nice blog post!"/>
            </ApprovalCard>        
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)