import React, { HTMLAttributes } from 'react';
import { BaseTextFieldProps } from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
type InputComponentProps = Pick<BaseTextFieldProps, 'inputRef'> & HTMLAttributes<HTMLDivElement>;
function inputComponent({ inputRef, ...props }: InputComponentProps) {
  return <div ref={inputRef} {...props} />;
}
inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
} as any;
export { inputComponent }
