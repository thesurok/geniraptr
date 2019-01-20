import React from 'react';

const ExactMatchRow = (props) => (
    <tr>
        <td>{props.campaignName}</td>
        <td>{props.groupName}</td>
        <td>
            {props.keywords}
        </td>
        <td>Exact</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
)  

export default ExactMatchRow;