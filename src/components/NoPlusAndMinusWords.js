import React from 'react';

const NoPlusAndMinusWords = ({onNoPlusChange, onMinuswordsChange, onLevelChange}) => (
    <div>
        <label>
            No plus before
            <input type="text"
                onChange={onNoPlusChange}
            />
        </label>
        <label>
            Minuswords
            <textarea
                onChange={onMinuswordsChange}
            />
        </label>
        <div className="row">
            <label className="radio-container">
                Campaign level
                <input type="radio"
                    name="level"
                    value="campaign-level"
                    onClick={onLevelChange}
                />
                <span className="custom-radio"><span className="custom-radio-inner_circle"></span></span>
            </label>
        </div>
        <div className="row">
            <label className="radio-container">
                Group level
                <input type="radio"
                    name="level"
                    value="group-level"
                    onClick={onLevelChange}
                />
                <span className="custom-radio"><span className="custom-radio-inner_circle"></span></span>
            </label>
        </div>
    </div>
);

export default NoPlusAndMinusWords;