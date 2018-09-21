import React from 'react';
import AdForm from './AdForm';

const AdForms = (props) => (
    <div className='row3'>
            {props.adForms.forms.map((el, i)=>
                <AdForm
                    key={`adform_${i}`}
                    index={i}
                    adFormData={props.adForms.forms[i]}
                    onAdFormChange={props.onAdFormChange}
                    handleClearAdForm={props.handleClearAdForm}
                    handleDeleteAdForm={props.handleDeleteAdForm}
                    handleCopyFromAdForm={props.handleCopyFromAdForm}
                    handleAddAdForm={props.handleAddAdForm}
                    handleWrapKeyword={props.handleWrapKeyword}
                />
            )}
    </div>
);

export default AdForms