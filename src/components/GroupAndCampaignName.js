import React from 'react';

const GroupAndCampaignName = (props) => (
    <div>
        <label>
            Group Name:
            <input type="text"
                value={props.groupName}
                onChange={props.handleGroupNameChange}
            />
        </label>
        <label>
            Campaign Name:
            <input type="text"
                value={props.campaignName}
                onChange={props.handleCampaignNameChange}
            />
        </label>
    </div>
);

export default GroupAndCampaignName;