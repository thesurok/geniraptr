import React from 'react';

const MatchCheckboxes = (props) => (
    <div>
        <h3>Match Types</h3>
        <div className="row">
            <label className="checkbox-container">
                Broad
                <input type="checkbox"
                    onChange={()=>props.handleMatch('broad')}
                    checked={props.match.broadMatch}  
                />
                <span className="custom-checkbox">
                    <div className="custom-checkbox-inner_circle"></div>
                </span>
            </label>
        </div>
        <div className="row">
            <label className="checkbox-container">
                Phrase
                <input type="checkbox"
                    onChange={()=>props.handleMatch('phrase')}
                    checked={props.match.phraseMatch}  
                />
                <span className="custom-checkbox">
                    <div className="custom-checkbox-inner_circle"></div>
                </span>
            </label>
        </div>
        <div className="row">
            <label className="checkbox-container">
                Exact
                <input type="checkbox"
                    onChange={()=>props.handleMatch('exact')}
                    checked={props.match.exactMatch}  
                />
                <span className="custom-checkbox">
                    <div className="custom-checkbox-inner_circle"></div>
                </span>
            </label>
        </div>
    </div>
)

export default MatchCheckboxes;