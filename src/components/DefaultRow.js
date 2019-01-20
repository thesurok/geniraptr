import React from 'react';

const DefaultRow = (props) => (
    <tr>
        <td>{props.campaignName}</td>
        <td>{props.groupName}</td>
        <td>
            {props.keywords}
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
)  

export default DefaultRow;