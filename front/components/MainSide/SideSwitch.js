const SideSwitch = () => {
    return(
        <div className="profile-card">
            <div className="profile-pic">
                <img src="/profile-pic.png" alt="" />
            </div>
            <div>
                <p className="username">iyusung2</p>
                <p className="sub-text">이유성</p>
            </div>
            <div className="action-btn-wrapper">
                <button className="action-btn">전환</button>
            </div>
        </div>
    );
}

export default SideSwitch;