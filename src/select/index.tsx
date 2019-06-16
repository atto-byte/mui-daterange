import React, { CSSProperties } from 'react';
import Select from 'react-select';
import { useTheme } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import { useStyles } from './styles';
import * as components from './components'
import { Props } from '../../node_modules/@types/react-select/lib/Select';
export interface OptionType {
  label: string;
  value: string;
}

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

import SelectBase from './lib/Select';
import { default as StateManager } from './lib/stateManager';

export { SelectBase };
export { default as Async } from './lib/Async';
export { default as AsyncCreatable } from './lib/AsyncCreatable';
export { default as Creatable } from './lib/Creatable';
export { createFilter } from './lib/filters';
export { default as makeAnimated } from './lib/animated/index';
export { components } from './lib/components/index';
export { mergeStyles } from './lib/styles';