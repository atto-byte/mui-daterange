import React, { CSSProperties } from 'react';
import Select from 'react-select';
import { useTheme } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import { useStyles } from './styles';
import * as components from './components'
import { Props } from './lib/Select';
export interface OptionType {
  label: string;
  value: string;
}

const suggestions: OptionType[] = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

export interface IntegrationReactSelectProps extends Props {
  label: string;
}
function IntegrationReactSelect(props: IntegrationReactSelectProps) {
  const classes = useStyles();
  const theme = useTheme();
  
  const selectStyles = {
    input: (base: CSSProperties) => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };
  return (
      <NoSsr>
        <Select
          {...props}
          classes={classes}
          styles={selectStyles}
          inputId="react-select-single"
          TextFieldProps={{
            label: props.label,
            InputLabelProps: {
              htmlFor: 'react-select-single',
              shrink: true,
            },
            placeholder: props.placeholder,
          }}
          options={props.options}
          components={components}
          value={props.value}
          onChange={props.onChange}
          isMulti={props.isMulti}
        />
      </NoSsr>
  );
}

export default IntegrationReactSelect;