import React from 'react';
import UserInfo from './UserInfo.jsx';
import ReviewTitle from './ReviewTitle.jsx';
import ReviewBody from './ReviewBody.jsx'

var ReviewListItem = (props) => {
    return (
        <article className='main-review-container'>
            <UserInfo />
            <ReviewTitle review={props.review} />
            <div>
                <span className='gray'>Color: {window.nouns[Math.floor(Math.random() * window.nouns.length)]}</span>
                <span className='seperator'>|</span>
                <span className='verified'>Verified Purchase</span>
            </div>
            
            <ReviewBody body={props.review.body} />
            
            <div className='helpful gray'>
            <a className='underline'>Comment</a><span className='seperator'>|</span>
                <span>{props.review.helpful} people found this review helpful. Was it helpful to you?</span> 
                <button>Yes</button><button>No</button><a className='a-secondary'>Report Abuse</a>
            </div>
        </article>
    )
}

export default ReviewListItem;