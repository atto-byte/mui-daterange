import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { NoticeProps } from '../../../node_modules/@types/react-select/lib/components/Menu';
import { OptionType } from '../index';
function NoOptionsMessage(props: NoticeProps<OptionType>) {
  return (<Typography color="textSecondary" className={props.selectProps.classes.noOptionsMessage} {...props.innerProps}>
    {props.children}
  </Typography>);
}
NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
} as any;
export { NoOptionsMessage };

