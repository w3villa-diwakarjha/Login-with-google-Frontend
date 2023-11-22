import styles from './styles.module.css';

function Home(userDetails){
    // User Detail coming From the Google Api
    const user=userDetails.user;
    const logout=()=>{
        // Perform Logout OPeration at this Api
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,"self"
        );
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Home</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img className={styles.img} src="./images/profile.jpg" alt="profile"/>
                </div>
                <div className={styles.right}>
                    <h2 className={styles.form_heading}>Profile</h2>
                    <img className={styles.profile_img} src={user.picture} alt="profile"/>
                    <input type='text' defaultValue={user.name} className={styles.input} placeholder='UserName'/>
                    <input type='text' defaultValue={user.email} className={styles.input} placeholder='Email'/>
                    
                    <button className={styles.btn} onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Home;