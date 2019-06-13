import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { MultiValueProps } from '../lib/components/MultiValue';
interface OptionType {
  label: string;
  value: string;
}
function MultiValue(props: MultiValueProps<OptionType>) {
  return <Chip tabIndex={-1} label={props.children} className={clsx(props.selectProps.classes.chip, {
    [props.selectProps.classes.chipFocused]: props.isFocused
  })} onDelete={props.removeProps.onClick} deleteIcon={<CancelIcon {...props.removeProps} />} />;
}
MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
} as any;

export { MultiValue };

