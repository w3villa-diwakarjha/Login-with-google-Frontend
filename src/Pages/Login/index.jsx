import {Link} from 'react-router-dom'
import styles from './styles.module.css';

function Login(){
    const googleAuth=()=>{
        // Login with Google Api
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,"self"
        );
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Log in Form</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img className={styles.img} src="./images/login.jpg" alt="login"/>
                </div>
                <div className={styles.right}>
                    <h2 className={styles.form_heading}>Members Log in</h2>
                    <input type='text' className={styles.input} placeholder='Email'/>
                    <input type='text' className={styles.input} placeholder='Password'/>
                    <button className={styles.btn}>Login</button>
                    <p className={styles.text}>or</p>
                    <button className={styles.google_btn} onClick={googleAuth}>
                        <img src='./images/google.png' alt="google icon"/>
                        <span>Sign in with Google</span>
                    </button>
                    <p className={styles.text}> New Here?<Link to='/signup'> Sign UP </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;