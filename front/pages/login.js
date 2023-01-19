import Link from "next/link";

const login = () => {
    return (
        <div className="flex-login">
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
            <div className="signup-container">
                <div>계정이 없으신가요?</div>
                <Link href = "/signup" legacyBehavior>
                    <div className="signup">가입하기</div>
                </Link>
            </div>
        </div>
    );
};

export default login;