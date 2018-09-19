import React from 'react';

const PhraseMatchRow = (props) => (
    <tr>
        <td>{props.campaignName}</td>
        <td>{props.groupName}</td>
        <td>
            {props.keywords}
        </td>
        <td>Phrase</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
)  

export default PhraseMatchRow;