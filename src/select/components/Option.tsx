import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { OptionType } from '../index';
import { OptionProps } from '../lib/components/Option';

function Option(props: OptionProps<OptionType>) {
  return (<MenuItem ref={props.innerRef} selected={props.isFocused} component="div" style={{
    fontWeight: props.isSelected ? 500 : 400,
  }} {...props.innerProps}>
    {props.children}
  </MenuItem>);
}
Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
} as any;
export { Option };

