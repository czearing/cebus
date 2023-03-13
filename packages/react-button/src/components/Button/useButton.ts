import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import { ARIAButtonSlotProps, useARIAButtonShorthand } from '@fluentui/react-aria';
import type { ButtonProps, ButtonState } from './Button.types';

export const useButton = (props: ButtonProps, ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>): ButtonState => {
  const {
    as = 'button',
    appearance = 'outline',
    color = 'inherit',
    disabled = false,
    size = 'medium',
    shape = 'rounded',
  } = props;

  const state: ButtonState = {
    appearance,
    disabled,
    shape,
    size,
    color,
    components: {
      root: 'button',
    },
    root: getNativeElementProps(
      as,
      useARIAButtonShorthand<ARIAButtonSlotProps<'a'>>(props, {
        required: true,
        defaultProps: {
          ref: ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>,
          type: 'button',
        },
      }),
    ),
  };

  return state;
};
