import React from 'react';

const TableHeading = (props) => (
    <tr>
        <th>Campaign</th>
        <th>Ad Group</th>
        <th>Keyword</th>
        <th>Criterion Type</th>
        <th>Headline 1</th>
        <th>Headline 2</th>
        {props.forms.some((form)=>form.thirdheadline) && <th>Headline 3</th>}
        <th>Description</th>
        {props.forms.some((form)=>form.seconddescription) &&<th>Description 2</th>}
        <th>Path 1</th>
        <th>Path 2</th>
        <th>Final URL</th>
        <th>Labels</th>
    </tr>
);

export default TableHeading;