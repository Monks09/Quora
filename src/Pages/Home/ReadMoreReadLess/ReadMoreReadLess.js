import React, { useState } from 'react';
import styles from "./ReadMoreReadLess.module.css";

function ReadMoreReadLess({ children }) {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(prevState => !prevState);
    }
    return (
        <div>
            {showMore ? children : children.substr(0, 200)}
            <button className={styles.toggleShowBtn} onClick={toggleShowMore}>
                {showMore ? "Show Less" : "...Show More"}
            </button>
        </div>

    );
}

export default ReadMoreReadLess;