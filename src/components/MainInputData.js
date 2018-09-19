import React from 'react';
import MainTable from './MainTable';
import KeywordsTextArea from './KeywordsTextArea';
import GroupAndCampaignName from './GroupAndCampaignName';
import MatchCheckboxes from './MatchCheckboxes';
import NoPlusAndMinusWords from './NoPlusAndMinusWords';
import AdForms from './AdForms';
import Header from './Header';
import { IconContext } from 'react-icons';
import { FaCopy } from 'react-icons/fa';


export default class MainInputData extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
            groupName: '',
            campaignName: '',
            noPlusBefore: [],
            minuswords: [],
            minuswordsCritType: '',
            match: {
                broadMatch: false,
                phraseMatch: false,
                exactMatch: false
            },
            adForms: {
                count: 1,//does nothing
                forms: [{
                    finalURL: '',
                    firstheadline: '',
                    secondheadline: '',
                    thirdheadline: '',
                    firstpath: '',
                    secondpath: '',
                    description: '',
                    seconddescription:'',
                    label: ''
                }]
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
        this.handleCampaignNameChange = this.handleCampaignNameChange.bind(this);
        this.handleMatch = this.handleMatch.bind(this);
        this.onNoPlusChange = this.onNoPlusChange.bind(this);
        this.onMinuswordsChange = this.onMinuswordsChange.bind(this);
        this.onLevelChange = this.onLevelChange.bind(this);
        this.onAdFormChange = this.onAdFormChange.bind(this);
        this.handleAddAdForm = this.handleAddAdForm.bind(this);
        this.handleClearAdForm = this.handleClearAdForm.bind(this);
        this.handleDeleteAdForm = this.handleDeleteAdForm.bind(this);
        this.handleCopyFromAdForm = this.handleCopyFromAdForm.bind(this);
    }

    anyTrueValues = (obj) => {
        if (typeof obj === 'object') return Object.values(obj).some(i => i.length > 0);
    }

    handleInputChange = (e) => {
        const input = e.target.value;
        this.setState(() => ({
            input
        }));
    }
    handleGroupNameChange = (e) => {
        const groupName = e.target.value;
        this.setState(() => ({
            groupName
        }));
    }
    handleCampaignNameChange = (e) => {
        const campaignName = e.target.value;
        this.setState(() => ({
            campaignName
        }));
    }
    handleMatch = (match) => {
        switch (match) {
            case 'broad':
                this.setState((prevState) => ({
                    match: {
                        ...prevState.match,
                        broadMatch: !prevState.match.broadMatch
                    }
                }));
                break;
            case 'phrase':
                this.setState((prevState) => ({
                    match: {
                        ...prevState.match,
                        phraseMatch: !prevState.match.phraseMatch
                    }
                }));
                break;
            case 'exact':
                this.setState((prevState) => ({
                    match: {
                        ...prevState.match,
                        exactMatch: !prevState.match.exactMatch
                    }
                }));
                break;

            default:
                break;
        }

    }
    onNoPlusChange = (e) => {
        const noPlusBefore = e.target.value.trim().toLowerCase().split(/,\s/);
        this.setState(() => ({
            noPlusBefore
        }));
    }
    onMinuswordsChange = (e) => {
        const minuswords = e.target.value.trim().toLowerCase().split(/\r?\n/);
        this.setState(() => ({
            minuswords
        }));
    }
    onAdFormChange = (e, inputName, i) => {
        const forms = [...this.state.adForms.forms];
        forms[i][inputName] = e.target.value;
        this.setState(() => ({
            adForms: {
                forms: forms
            }
        }));
    }
    handleAddAdForm = () => {
        const emptyForm = {
            finalURL: '',
            firstheadline: '',
            secondheadline: '',
            thirdheadline: '',
            firstpath: '',
            secondpath: '',
            description: '',
            seconddescription: '',
            label: ''
        }
        this.setState((prevState) => ({
            adForms: {
                forms: [...prevState.adForms.forms,
                    emptyForm
                ]
            }
        }));
    }
    handleDeleteAdForm = (i) => {
        const forms = [...this.state.adForms.forms];
        forms.splice(i, 1);
        this.setState(() => ({
            adForms: {
                forms
            }
        }));
    }
    handleCopyFromAdForm = (i) => {
        const forms = [...this.state.adForms.forms];
        forms[i]={...forms[i-1]}


        this.setState(() => ({
            adForms:{
                forms
            }
        }));
    }
    handleClearAdForm = (i) => {
        const forms = [...this.state.adForms.forms];
        const emptyForm = {
            finalURL: '',
            firstheadline: '',
            secondheadline: '',
            thirdheadline: '',
            firstpath: '',
            secondpath: '',
            description: '',
            seconddescription: '',
            label: ''
        }
        forms[i]=emptyForm;
        this.setState(() => ({
            adForms:{
                forms
            }
        }));
    }
    onLevelChange = (e) => {
        const level = e.target.value
        this.setState(() => ({
            minuswordsCritType: level
        }));
    }

    copyTable = () => {
        const range = document.createRange(),
        selection = window.getSelection(),
        table = document.getElementById('main-table');
        selection.removeAllRanges();
        if(table){ 
            range.selectNodeContents(table);
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();  
        }    
    }

    render() {
        return (
            <div>
                <Header />
            <div className="container">                
                <KeywordsTextArea
                    input={this.state.input}
                    handleInputChange={this.handleInputChange}
                />
                <div className="row2">
                    <GroupAndCampaignName
                        handleCampaignNameChange={this.handleCampaignNameChange}
                        handleGroupNameChange={this.handleGroupNameChange}
                        campaignName={this.state.campaignName}
                        groupName={this.state.groupName}
                    />
                    <MatchCheckboxes
                        handleMatch={this.handleMatch}
                        match={this.state.match}
                    />
                    <NoPlusAndMinusWords
                        onMinuswordsChange={this.onMinuswordsChange}
                        onNoPlusChange={this.onNoPlusChange}
                        onLevelChange={this.onLevelChange}
                    />
                    <button 
                        className="copy-table"
                        onClick={this.copyTable}>
                        <IconContext.Provider value={{className: 'icon copy'}}>
                            <div>
                                <FaCopy />
                            </div>
                        </IconContext.Provider>
                    </button>
                </div>
                
                <AdForms
                    handleAddAdForm={this.handleAddAdForm}
                    handleClearAdForm={this.handleClearAdForm}
                    handleDeleteAdForm={this.handleDeleteAdForm}
                    handleCopyFromAdForm={this.handleCopyFromAdForm}
                    adForms={this.state.adForms}
                    onAdFormChange={this.onAdFormChange}
                />
            </div>                 
                {(this.anyTrueValues(this.state) || this.anyTrueValues(this.state.adForms.forms[0])) &&
                    <MainTable
                        input={this.state.input.trim().split(/\r?\n/g)}
                        match={this.state.match}
                        campaignName={this.state.campaignName}
                        groupName={this.state.groupName}
                        noPlusBefore={this.state.noPlusBefore}
                        minuswords={this.state.minuswords}
                        minuswordsCritType={this.state.minuswordsCritType}
                        forms={this.state.adForms.forms}
                        anyTrueValues={this.anyTrueValues}
                    />}

            </div>
        );
    }
} 
