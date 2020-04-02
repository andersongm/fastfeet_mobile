import React, { useRef, useEffect } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container } from './styles';

function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    console.tron.log('name', name);

    registerField({
      name: 'id',
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },

      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <TextInput ref={inputRef} defaultValue={defaultValue} {...rest} />
    // <Container
    //   ref={inputRef}
    //   defaultValue={defaultValue}
    //   error={error}
    //   {...rest}
    // />
  );
}

// Input.propTypes = {
//     icon: PropTypes.string,
//     style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

// Input.defaultProps = {
//     icon: null,
//     style: {},
// };

export default Input;
