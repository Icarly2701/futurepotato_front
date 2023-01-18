const CommentForm = () => {
    return (
        <>
            <div className="post-content">
                <div className="reaction-wrapper">
                    <img src="/like.PNG" className="icon" alt="" />
                    <img src="/comment.PNG" className="icon" alt="" />
                    <img src="/send.PNG" className="icon" alt="" />
                    <img src="/save.PNG" className="save icon" alt="" />
                </div>
                <p className="likes">1,012 likes</p>
               
            </div>
            <div className="comment-wrapper">
                <img src="/smile.PNG" className="icon" alt="" />
                <input type="text" className="comment-box" placeholder="Add a comment" />
                <button className="comment-btn">post</button>
            </div>
            </>
    );
}

export default CommentForm;