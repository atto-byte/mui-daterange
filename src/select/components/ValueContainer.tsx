import PropTypes from 'prop-types';
import React from 'react';
import { ValueContainerProps } from '../../../node_modules/@types/react-select/lib/components/containers';
import { OptionType } from '../index';
function ValueContainer(props: ValueContainerProps<OptionType>) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}
ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
} as any;
export { ValueContainer };

