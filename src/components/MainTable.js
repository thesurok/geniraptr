import React from 'react';
import TableHeading from './TableHeading';
import Rows from './Rows';
import AdRow from './AdRow';
import MinusWordsRow from './MinusWordsRow';

const MainTable = (props)=>(
    <div className="table-wrapper">
        <table id='main-table'>
            <thead>
                <TableHeading 
                    forms={props.forms}
                />
            </thead> 
            <tbody>
                {props.minuswords.some(w=>w.length>0) && props.minuswords.map((minusword, i) => (
                    <MinusWordsRow
                        key={`minusword_${i}`}
                        campaignName={props.campaignName}
                        groupName={props.groupName}
                        minuswordsCritType={props.minuswordsCritType}
                        minusword={minusword}
                    />))}
                {props.forms.map((form, i) => (
                    props.anyTrueValues(form) &&
                    <AdRow
                        key={`adrow_${i}`}
                        index={i}
                        campaignName={props.campaignName}
                        groupName={props.groupName}
                        adInfo={form}
                        forms={props.forms}
                    />
                )
                )}
            </tbody>                
                {props.input.map((keywords) => ( keywords.length>0 &&
                    <Rows
                        key={keywords + Math.floor((Math.random() * 10000))}
                        keywords={keywords}
                        campaignName={props.campaignName}
                        groupName={props.groupName}
                        match={props.match}
                        noPlusBefore={props.noPlusBefore}
                        minuswords={props.minuswords}
                    />
                ))}                         
        </table>
    </div>
);

export default MainTable;