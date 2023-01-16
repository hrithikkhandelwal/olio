import React from "react";

const Social = () => {
    return(
        <div className="home__social">
            <a href="https://www.linkedin.com/in/hrithik-khandelwal-92161117b/" className="home__social-icon"  target="_blank" rel="noreferrer">
                <i class="uil uil-linkedin"></i>
            </a>

            <a href="https://leetcode.com/hrithikkhandelwal/" className="home__social-icon" target="_blank" rel="noreferrer ">
                <i class="uil uil-brackets-curly"></i>
            </a>

            <a href="https://github.com/hrithikkhandelwal" className="home__social-icon" target="_blank" rel="noreferrer noopener">
                <i class="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social;