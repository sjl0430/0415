import React, { useState } from 'react';

export default function MyCheckBox() {
    const [liked, setLiked] = useState(true);
    
    function handleChange(e){
        setLiked(e.target.checked);
    }
    return (
        <div>
            <label>
                <input
                 type='checkbox'
                 checked={liked}
                 onChange={handleChange}/>
                I liked this.
            </label>
            <p>You {liked? "liked":"didn't liked"} this.</p>
        </div>
    );
}
