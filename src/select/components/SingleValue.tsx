import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { SingleValueProps } from 'react-select/lib/components/SingleValue';
import { OptionType } from '../index';
function SingleValue(props: SingleValueProps<OptionType>) {
  return (<Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
    {props.children}
  </Typography>);
}
SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
} as any;
export { SingleValue }
