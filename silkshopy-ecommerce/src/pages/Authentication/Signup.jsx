import "./Authentication.css";

const Signup = () => {
    return (
        <section className="auth-container">
            <header className="heading-box flex-center">
                <h2 className="auth-heading">Signup</h2>
            </header>

            <div className="input-container auth-name-input-cont flex margin-bottom width-100">

                <div className="auth-name-box flex auth-name-input">
                    <label for="email" className="auth-label">First Name</label>
                    <input className="auth-input" type="email" placeholder="Type first name" />
                </div>

                <div className="auth-name-box auth-name-input flex">
                    <label for="email" className="auth-label">Last Name</label>
                    <input className="auth-input last-name" type="email" placeholder="Type last name" />
                </div>
                
            </div>
    
            <div className="input-container flex margin-bottom width-100">
                <label for="email" className="auth-label">Email address</label>
                <input className="auth-input" type="email" placeholder="Type email" />
            </div>
    
            <div className="input-container flex margin-bottom width-100">
            <label for="password" className="auth-label">Password</label>
            <input className="auth-input" type="password" placeholder="Type password" />
            </div>
    
            <div className="condition-box flex width-100 margin-bottom">
                <div className="remember-me-box">
                    <input type="checkbox" name="remember me" id="remember-me" />
                    <label for="remember me">I accept all Tearms and Conditions</label>
                </div>

            </div>
    
            <div className="auth-btn width-100">
                <button className="btn btn-primary">Create New Account</button>
            </div>
    
            <div className="auth-btn width-100">
                <button className="btn btn-secondary-link"><a href="/auth/login.html">Already have an account</a></button>.
            </div>
        </section>
    )
}

export {Signup};