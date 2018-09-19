import React from 'react';

const AdRow = (props) => (
    <tr>
        <td >{props.campaignName}</td>
        <td >{props.groupName}</td>
        <td ></td>{/* "Keyword" */}
        <td ></td>{/* "Criterion Type" */}
        <td >{props.adInfo.firstheadline}</td>
        <td >{props.adInfo.secondheadline}</td>
        {props.forms.some(ad => ad.thirdheadline) && 
        <td >{props.adInfo.thirdheadline}</td>}
        <td >{props.adInfo.description}</td>
        {props.forms.some(ad => ad.seconddescription) &&
        <td >{props.adInfo.seconddescription}</td>}
        <td >{props.adInfo.firstpath}</td>
        <td >{props.adInfo.secondpath}</td>
        <td >{props.adInfo.finalURL}</td>
        <td >{props.adInfo.label}</td>
    </tr>
);

export default AdRow;
