import CommentForm from "./Comment/CommentForm";
import CommentList from "./Comment/CommentList";
import UserInfo from "./UserInfo";

const DetailPage = () => {
    return(
        <div className = 'detail_window'>
                    <div className='wrapper-detail'>
                        <div className="left-col-detail">
                            <img src="/cover 1.png" className="options" alt="" />
                        </div>
                    <div className="right-col-detail">
                        <UserInfo />
                            <div style={{borderBottom:"1px solid lightgray;"}}>
                                <p className="description"><span>username </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?</p>
                                <p className="post-time">2 minutes ago</p>
                            </div>
                        <CommentList />
                        <CommentForm />
                    </div>
                </div>
        </div>
    );
};

export default DetailPage;