import React, { useEffect } from 'react';
import Select from 'react-select';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const EventTypesValues = [
    {label:'Engagement'},
    {label:'Mehendi'},
    {label:'Barat'},
    {label:'Walima'}
].map(suggestion => ({
    value:suggestion.label,
    label:suggestion.label,
}));

const EventTimesValues = [
    {label:'Lunch'},
    {label:'Dinner'},
].map(suggestion => ({
    value:suggestion.label,
    label:suggestion.label
}));

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 0,
        minWidth: 223,
        [theme.breakpoints.only('xs')]: {
            marginTop: 0,
        },
    },
}));

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'white'
    background: '#f2fcff',
};

const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

function RenderDropDown(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [single, setSingle] = React.useState(null);
    const opt = props.option;
    const placeholder = props.placeholder;

    function handleChangeSingle(value) {
        setSingle(value);
        props.getOption(value);
    }

    useEffect(() => {
        if (props.selectedOption) {
            setSingle(props.selectedOption);
        }
    } , [props.selectedOption])


    return (
        <div className={classes.root}>
            <Select
                // inputId="react-select-single"
                styles={{
                    control: styles => ({
                        ...styles,
                        height: 40,
                        marginBottom: '10px',
                        // backgroundColor: 'white',
                        color: 'black',
                        border: '1px solid #AD365C',
                        '&:hover': {
                            border: '1px solid #AD365C',
                        },
                    }),
                    container: styles => ({
                        ...styles,
                        marginBottom: '10px',
                        // backgroundColor: 'transparent',
                        color: 'black',
                        border: 'none',
                        notchedOutline: {
                        },
                        '&:focus': {
                            borderBottom: '1px solid #008081',
                        },

                    }),
                    input: styles => ({ ...styles, marginLeft: theme.spacing(2), }),
                    placeholder: styles => ({ ...styles, marginLeft: theme.spacing(2) }),
                }}
                TextFieldProps={{
                    label: 'Brand',
                    InputLabelProps: {
                        htmlFor: 'react-select-single',
                        shrink: true,
                    },
                }}
                placeholder={placeholder}
                formatGroupLabel={formatGroupLabel}
                options={opt}
                value={single}
                // defaultInputValue={defaultOption}
                onChange={handleChangeSingle}
            />
        </div>
    )
};

export  class EventTypes extends React.Component {

    state = {
        option: null,
        completeValues: [],
    }

    getOption = (option) => {
        const { opt } = this.props;
        console.log(option)
        opt(option);
    }

    render() {
        return (
            <React.Fragment>
                {/* <RenderDropDown opt={groupedOptionsForMobileMake} /> */}
                <RenderDropDown option={EventTypesValues} selectedOption={this.props.selectedItem} placeholder={'Event Type'} getOption={this.getOption} />
            </React.Fragment>
        );
    }
};

export  class EventTimes extends React.Component {

    state = {
        option: null,
        completeValues: [],
    }

    getOption = (option) => {
        const { opt } = this.props;
        console.log(option)
        opt(option);
    }

    render() {
        return (
            <React.Fragment>
                {/* <RenderDropDown opt={groupedOptionsForMobileMake} /> */}
                <RenderDropDown option={EventTimesValues} selectedOption={this.props.selectedItem} placeholder={'Event Time'} getOption={this.getOption} />
            </React.Fragment>
        );
    }
};