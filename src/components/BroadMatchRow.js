import React from 'react';
const BroadMatchRow = (props) => {
    const noPlusBefore=props.noPlusBefore
    const allKeywords=props.keywords.trim().split(/\s/)

    return(
      <tr>
        <td>{props.campaignName}</td>
        <td>{props.groupName}</td>
        <td>
            {allKeywords.map(keyword=> noPlusBefore.some(word=>(word === keyword.trim())||(word === keyword.trim()+',')) ? 
            `${keyword} ` :  `+${keyword} ` )}
        </td>
        <td>Broad</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>   
    );
    
}
    
export default BroadMatchRow;