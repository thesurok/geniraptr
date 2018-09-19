import React from 'react';
import BroadMatchRow from './BroadMatchRow';
import PhraseMatchRow from './PhraseMatchRow';
import ExactMatchRow from './ExactMatchRow';
import DefaultRow from './DefaultRow';

const Rows = (props) => {
    return (
        <tbody>
            {Object.values(props.match).every(i=>!i) &&
                <DefaultRow
                    campaignName={props.campaignName}
                    groupName={props.groupName}
                    keywords={props.keywords} />
            }
            {props.match.broadMatch &&
                <BroadMatchRow
                    campaignName={props.campaignName}
                    groupName={props.groupName}
                    keywords={props.keywords}
                    noPlusBefore={props.noPlusBefore}
                />}
            {props.match.phraseMatch &&
                <PhraseMatchRow
                    campaignName={props.campaignName}
                    groupName={props.groupName}
                    keywords={props.keywords}
                />}
            {props.match.exactMatch &&
                <ExactMatchRow
                    campaignName={props.campaignName}
                    groupName={props.groupName}
                    keywords={props.keywords}
                />}
        </tbody>  
    )
}

export default Rows;