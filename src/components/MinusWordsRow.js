import React from 'react';

const MinusWordsRow = (props) => (
    <tr>
        <td name="Campaign Name">{props.campaignName}</td>
        <td name="Group Name">{props.minuswordsCritType === 'group-level' ? props.groupName : null}</td>
        <td name="Keyword">{props.minusword}</td>
        <td name="Criterion Type">{
            props.minusword[0] === '"' ? (props.minuswordsCritType === 'group-level' ? 'Negative Phrase' : 'Campaign Negative Phrase') :
                props.minusword[0] === '[' ? (props.minuswordsCritType === 'group-level' ? 'Negative Exact' : 'Campaign Negative Exact') :
                    (props.minuswordsCritType === 'group-level' ? 'Negative Broad' : 'Campaign Negative Broad')
        }</td>
        <td name="Headline 1"></td>
        <td name="Headline 2"></td>
        <td name="Description"></td>
        <td name="Path 1"></td>
        <td name="Path 2"></td>
        <td name="Final URL"></td>
        <td name="Labels"></td>
    </tr>
);

export default MinusWordsRow;