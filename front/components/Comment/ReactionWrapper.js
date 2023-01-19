import Link from "next/link";

const ReactionWrapper = () => {
    return(
        <div className="reaction-wrapper">
            <img src="/like.PNG" className="icon" alt="" />
            <Link href = "/detail" legacyBehavior>
                <img src="/comment.PNG" className="icon" alt="" />
            </Link>
            <img src="/send.PNG" className="icon" alt="" />
            <img src="/save.PNG" className="save icon" alt="" />
        </div>
    );
};

export default ReactionWrapper;