import * as React from 'react';
import { useButton } from '../Button/useButton';
import { useToggleButtonState } from './useToggleButonState';
import type { ToggleButtonProps, ToggleButtonState } from './ToggleButton.types';

export const useToggleButton = (
  props: ToggleButtonProps,
  ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>,
): ToggleButtonState => {
  const buttonState = useButton(props, ref);

  return useToggleButtonState(props, buttonState);
};
