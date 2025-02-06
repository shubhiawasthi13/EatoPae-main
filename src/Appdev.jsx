import react from 'react';
import './Appdev.css';
function AppDev(){
    return(
        <>
        <section className="appdev_hero">
        <div className="content">
        <p>App Developer</p>
        <span>We are looking for a talented and passionate App Developer to join our team and help build innovative, high-performance mobile applications. As an App Developer, you will be responsible for designing, developing, and maintaining mobile applications for iOS, Android, or cross-platform environments. You will work closely with UI/UX designers, backend developers, and product managers to create seamless user experiences.</span>
        </div>
        <div className="box-1">
        </div>
        <div className="box-2"></div>
        <div className="box-3">
        </div>
        </section> 

        <section className="appdev-page">
            {/* key-details section start from here */}
                <div className="key-details">
                <div className="dl-list">
                <p>Key Details</p>
                <span>📌 Job Title: App Developer (iOS/Android/Flutter/React Native)</span><br />
                <span>📌 Location: Remote </span><br />
                <span>📌 Experience Required: Entry-Level ,0-1 year experience</span><br />
                <span>📌 Unpaid Internship</span>
                </div>
                 <div className="box">
                 </div>
                </div>
            {/* key-details section end from here */}

            {/* Responsbility section start from here */}
                <div className="respo-join">
                    <p>What You’ll Do (Responsibilities)</p>
                    <ul>
                        <li>Design, develop, and maintain mobile applications for Android and/or iOS.</li>
                        <li>Integrate third-party APIs, Firebase, and backend services.</li>
                        <li>Debug and fix issues to ensure smooth functionality.</li>
                        <li>Stay updated with the latest trends in mobile app development.</li>
                    </ul>
                </div>
            {/* Responsbility section end from here */}

            <div className="respo-join">
                    <p>Why Join Us</p>
                    <ul>
                        <li>Real-World Experience – Work on live projects and gain industry exposure.</li>
                        <li>Skill Development – Improve your coding, debugging, and app deployment skills.</li>
                        <li>Strong Portfolio – Build and showcase real projects in your resume.</li>
                        <li>Networking Opportunities – Connect with industry professionals and teammates.</li>
                        <li>Flexible Work Environment – Remote work options and a supportive team</li>
                    </ul>
                </div>
                <div className="apply-btn">
                <p>Apply</p>
                </div>

                <div className="border-box"></div>
        </section>
        </>
    )
}
export default AppDev;