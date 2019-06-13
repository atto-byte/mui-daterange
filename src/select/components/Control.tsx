import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import * as React from 'react';
import { OptionType } from '../';
import { ControlProps } from '../lib/components/Control';
import { inputComponent } from './inputComponent';
function Control(props: ControlProps<OptionType>) {
  const { children, innerProps, innerRef, selectProps: { classes, TextFieldProps }, } = props;
  return (<TextField fullWidth InputProps={{
    inputComponent,
    inputProps: {
      className: classes.input,
      ref: innerRef,
      children,
      ...innerProps,
    },
  }} {...TextFieldProps} />);
}
Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired,
} as any;
export { Control };

