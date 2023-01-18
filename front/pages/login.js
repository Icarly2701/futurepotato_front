const login = () => {
    return (
        <div className="flex-center">
            <div className="login-container">
                <div className="flex-center logo-wrapper">
                    <span className="logo-text">instagram</span>
                </div>
                <div className="input-wrapper">
                    <div className="login-wrapper flex-center">
                        <input
                            className="login-input"
                            type="text"
                            placeholder="전화번호, 사용자 이름 또는 이메일"/>
                    </div>
                    <div className="login-wrapper flex-center">
                        <input className="login-input" type="password" placeholder="비밀번호" />
                    </div>
                    <div className="flex-center button-wrapper">
                        <button className="login-button" disabled>로그인</button>
                    </div>
                </div>
                <div className="flex-center findpass">
                    <a>비밀번호를 잊으셨나요?</a>
                </div>
            </div>
        </div>
    );
};

export default login;