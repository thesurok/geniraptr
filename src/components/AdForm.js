import React from 'react';
import { IconContext } from "react-icons";
import { FaTrashAlt, FaCopy, FaEraser, FaPlusCircle } from 'react-icons/fa';

const AdForm = ({adFormData, onAdFormChange, handleClearAdForm, 
    handleDeleteAdForm, handleCopyFromAdForm, index, handleAddAdForm, handleWrapKeyword}) => (
    <div className='adform-container'>
        <div className="adform">
            <div className="adform-wrapper">
                <label>
                    Final URL:
                    <input type="text"
                        value={adFormData.finalURL} 
                        onChange={(e)=> onAdFormChange(e, 'finalURL', index)}
                    />
                </label>
                <span className='counter'>{adFormData.finalURL.length}</span>
            </div>
            <div className="adform-wrapper">
                <label>
                    <span 
                        className="wrap-as-kw"
                        onClick={()=>handleWrapKeyword(index)}
                    >{'{'}Keyword: {'}'}</span>
                    Headline 1:
                    <input type="text"
                        value={adFormData.firstheadline} 
                        onChange={(e) => onAdFormChange(e, 'firstheadline', index)}
            
                    />
                </label>
                <span 
                    className={(adFormData.firstheadline.match(/{|}/) && adFormData.firstheadline.length<40) ? 'counter' : 
                    adFormData.firstheadline.length > 30 ? 'counter danger' : 
                    'counter'}
                    >{adFormData.firstheadline.length}
                </span>
            </div>
            <div className="adform-wrapper">
                <label>
                    Headline 2:
                    <input type="text" 
                        value={adFormData.secondheadline} 
                        onChange={(e) => onAdFormChange(e, 'secondheadline', index)}
            
                    />
                </label>
                <span 
                    className={(adFormData.secondheadline.match(/{|}/) && adFormData.secondheadline.length<40) ? 'counter' : 
                    adFormData.secondheadline.length > 30 ? 'counter danger' : 
                    'counter'}
                    >
                {adFormData.secondheadline.length}
                </span>
            </div>
            <div className="adform-wrapper">
                <label>
                    Headline 3:
                    <input type="text" 
                        value={adFormData.thirdheadline} 
                        onChange={(e) => onAdFormChange(e, 'thirdheadline', index)}
            
                    />
                </label>
                <span 
                    className={(adFormData.thirdheadline.match(/{|}/) && adFormData.thirdheadline.length<40) ? 'counter' : 
                    adFormData.thirdheadline.length > 30 ? 'counter danger' : 
                    'counter'}
                >{adFormData.thirdheadline ? adFormData.thirdheadline.length : 0}
                </span>
            </div>
            <div className="adform-wrapper">
                <label>
                    <div className="label">
                        Description:
                    </div>
                    <textarea
                        rows='4' 
                        value={adFormData.description} 
                        onChange={(e) => onAdFormChange(e, 'description', index)}
            
                    />
                </label>
                <span 
                    className={adFormData.description.length > 90 ? 'counter danger' : 'counter'}
                >{adFormData.description.length}
                </span>
            </div>

            <div className="adform-wrapper">
                <label>
                    <div className="label">
                        Description 2:
                    </div>
                    <textarea
                        rows='4'
                        value={adFormData.seconddescription}
                        onChange={(e) => onAdFormChange(e, 'seconddescription', index)}

                    />
                </label>
                <span
                    className={adFormData.seconddescription.length > 90 ? 'counter danger' : 'counter'}
                >{adFormData.seconddescription ? adFormData.seconddescription.length : 0}
                </span>
            </div>

                <div className="container">
                    <div className="adform-wrapper">
                        <label>
                            Path 1:
                        <input type="text"
                                value={adFormData.firstpath}
                                onChange={(e) => onAdFormChange(e, 'firstpath', index)}

                            />
                        </label>
                        <span
                            className={adFormData.firstpath.length > 15 ? 'counter danger' : 'counter'}
                        >{adFormData.firstpath.length}
                        </span>
                    </div>
                    <div className="adform-wrapper">
                        <label>
                            Path 2:
                        <input type="text"
                                value={adFormData.secondpath}
                                onChange={(e) => onAdFormChange(e, 'secondpath', index)}

                            />
                        </label>
                        <span
                            className={adFormData.secondpath.length > 15 ? 'counter danger' : 'counter'}
                        >{adFormData.secondpath.length}
                        </span>
                    </div>
            </div>

            <div className="adform-wrapper">
                <label>
                    Labels:
                        <input type="text"
                        value={adFormData.label}
                        onChange={(e) => onAdFormChange(e, 'label', index)}

                    />
                </label>
                <span
                    className={adFormData.label.length > 15 ? 'counter danger' : 'counter'}
                >{adFormData.label.length}
                </span>
            </div>

        </div>

        <div className="adform-btns">
            {index === 0 &&<button onClick={handleAddAdForm}>
                <IconContext.Provider value={{ className: 'icon' }}>
                    <div>
                        <FaPlusCircle />
                    </div>
                </IconContext.Provider>
            </button>}
            {index > 0 &&
                <span>
                    <button onClick={() => handleDeleteAdForm(index)}>
                        <IconContext.Provider value={{ className: 'icon icon-delete' }}>
                            <div>
                                <FaTrashAlt />
                            </div>
                        </IconContext.Provider>
                    </button>
                    <button onClick={() => handleCopyFromAdForm(index)}>
                        <IconContext.Provider value={{ className: 'icon' }}>
                            <div>
                                <FaCopy />
                            </div>
                        </IconContext.Provider>
                    </button>
                </span>
            }
            <button onClick={() => handleClearAdForm(index)}>
                <IconContext.Provider value={{ className: 'icon' }}>
                    <div>
                        <FaEraser />
                    </div>
                </IconContext.Provider>
            </button>
        </div>
            
    </div>
);

export default AdForm;