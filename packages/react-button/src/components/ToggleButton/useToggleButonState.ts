import * as React from 'react';
import { mergeCallbacks, useControllableState, useEventCallback } from '@fluentui/react-utilities';
import type { ButtonState } from '../Button';
import type { ToggleButtonProps, ToggleButtonState } from './ToggleButton.types';

export function useToggleButtonState<
  TToggleButtonProps extends Pick<ToggleButtonProps, 'checked' | 'defaultChecked' | 'disabled' | 'disabledFocusable'>,
  TButtonState extends Pick<ButtonState, 'root'>,
  TToggleButtonState extends Pick<ToggleButtonState, 'checked' | 'root'>,
>(props: TToggleButtonProps, state: TButtonState): TToggleButtonState {
  const { checked, defaultChecked, disabled, disabledFocusable } = props;
  const { onClick, role } = state.root;

  const [checkedValue, setCheckedValue] = useControllableState({
    state: checked,
    defaultState: defaultChecked,
    initialState: false,
  });

  const isCheckboxTypeRole = role === 'menuitemcheckbox' || role === 'checkbox';

  /**
   * Callback for when the ToggleButton is pressed
   */
  const onToggleButtonClick = React.useCallback(
    (ev: React.MouseEvent<HTMLButtonElement> & React.MouseEvent<HTMLAnchorElement>) => {
      if (!disabled && !disabledFocusable) {
        if (ev.defaultPrevented) {
          return;
        }

        setCheckedValue(!checkedValue);
      }
    },
    [disabled, disabledFocusable, setCheckedValue, checkedValue],
  );

  return {
    ...state,
    checked: checkedValue,
    root: {
      ...state.root,
      [isCheckboxTypeRole ? 'aria-checked' : 'aria-pressed']: checkedValue,
      onClick: useEventCallback(
        mergeCallbacks(onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>, onToggleButtonClick),
      ),
    },
  } as TToggleButtonState;
}
