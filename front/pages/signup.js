const signup = () => {
    return(
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
                        placeholder="휴대폰 번호 또는 이메일 주소"/>
                </div>
                <div className='login-wrapper flex-center'>
                    <input
                        className="login-input"
                        type='text'
                        placeholder='성명'
                    />
                </div>
                <div className='login-wrapper flex-center'>
                    <input
                        className="login-input"
                        type='text'
                        placeholder='사용자 이름'
                    />
                </div>
                <div className="login-wrapper flex-center">
                    <input className="login-input" type="password" placeholder="비밀번호" />
                </div>
                <div className="flex-center button-wrapper">
                    <button className="login-button" disabled>가입</button>
                </div>
            </div>
            <div className="flex-center findpass">
                <a>계정이 있으신가요? 로그인</a>
            </div>
        </div>
    </div>
    );
};

export default signup;