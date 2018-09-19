import React from 'react';

const KeywordsTextArea = (props) => (
    <div className='row1'>
        <textarea
            placeholder='Put your keywords here'
            onFocus={(e) => e.target.placeholder = ''} 
            onBlur = {
                (e) => e.target.placeholder = 'Put your keywords here'
            }
            cols="30"
            onChange={props.handleInputChange}
            value={props.input}
        >
        </textarea>
    </div>
    
)
    


export default KeywordsTextArea;