import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { CardState } from './Card.types';
import { tokens } from '@pongo-ui/react-theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: tokens.canvasColor,
    ...shorthands.padding('14px'),
    flexShrink: 0,
    ...shorthands.gap('14px'),
  },

  /**
   * Appearance styles
   */
  elevate: {
    filter: tokens.elevate,
  },

  outline: {
    ...shorthands.border('1px', 'solid', tokens.inherit),
  },

  /**
   * Interactive styles
   */
  intractable: {
    cursor: 'pointer',

    ':hover': {
      backgroundColor: tokens.inheritForegroundHover,
    },
    ':active': {
      backgroundColor: tokens.inheritForegroundPressed,
    },
  },

  disabled: {
    cursor: 'not-allowed',
  },

  /**
   * Shape styles
   */
  rounded: {
    ...shorthands.borderRadius(tokens.rounded),
  },

  circular: {
    ...shorthands.borderRadius(tokens.circular),
  },

  circle: {
    ...shorthands.borderRadius(tokens.circle),
  },

  square: {
    ...shorthands.borderRadius(tokens.square),
  },
});

export const useCardStyles = (state: CardState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    styles.root,
    styles[state.appearance!],
    styles[state.shape!],
    !state.disabled &&
      (state.root.onClick ||
        state.root.onMouseUp ||
        state.root.onMouseDown ||
        state.root.onPointerUp ||
        state.root.onPointerDown ||
        state.root.onTouchStart ||
        state.root.onTouchEnd) &&
      styles.intractable,
    state.disabled && styles.disabled,
    state.root.className,
  );

  return state;
};