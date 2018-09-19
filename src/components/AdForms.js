import React from 'react';
import AdForm from './AdForm';
import {FaPlusCircle} from 'react-icons/fa';
import { IconContext } from "react-icons";

const AdForms = (props) => (
    <div className='row3'>
            <div className="add-form">
                <button onClick={props.handleAddAdForm}>
                    <IconContext.Provider value={{ className: 'icon'}}>
                        <div>
                            <FaPlusCircle/>
                        </div>
                    </IconContext.Provider>
                </button>
            </div>
            {props.adForms.forms.map((el, i)=>
                <AdForm
                    key={`adform_${i}`}
                    index={i}
                    adFormData={props.adForms.forms[i]}
                    onAdFormChange={props.onAdFormChange}
                    handleClearAdForm={props.handleClearAdForm}
                    handleDeleteAdForm={props.handleDeleteAdForm}
                    handleCopyFromAdForm={props.handleCopyFromAdForm}
                />
            )}
    </div>
);

export default AdForms