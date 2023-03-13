import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { InputWrapperCommons } from '../InputWrapper';
import { InputWrapper } from '../InputWrapper';
import { MenuPopover, MenuList, MenuTrigger, Menu } from '@cebus/react-menu';

export type SelectSlots = {
  /**
   * The root of the Select. This is the wrapper component that handles it's appearance.
   */
  root: NonNullable<Slot<typeof InputWrapper>>;

  /**
   * Displays the current select value for the Select component.
   */
  selectValue: NonNullable<Slot<'div'>>;

  /**
   * The wrapper component that manages state for a popup MenuList and MenuTrigger
   */
  menu: any;

  /**
   * Wrapper for the Menu trigger element.
   */
  menuTrigger: any;

  /**
   *  Wrapper for `MenuList` used to add styling and interaction support.
   */
  menuPopover: NonNullable<Slot<typeof MenuPopover>>;

  /**
   * Wrapper for `MenuItems`. This is what handles the items context.
   */
  menuList: NonNullable<Slot<typeof MenuList>>;
};

type SelectCommons = {
  /**
   * The starting value for a uncontrolled Select.
   *
   * @defaultValue ''
   */
  defaultValue?: string[];

  /**
   * The current value for a controlled Select.
   */
  value?: string[];

  /**
   * Callback to be called when the value changes.
   */
  onCheckedValueChange?: (ev: React.MouseEvent | React.KeyboardEvent, data: { checkedItems: string[] }) => void;

  /**
   * The content to render before the Select.
   */
  contentBefore?: string | number | JSX.Element;

  /**
   * The content to render after the Select.
   */
  contentAfter?: string | number | JSX.Element;

  /**
   * The label for the Input.
   */
  label?: string;

  /**
   * The placeholder text for the Input.
   */
  placeholder?: string;
};

export type SelectProps = ComponentProps<Partial<SelectSlots>> & SelectCommons & InputWrapperCommons;

export type SelectState = ComponentState<SelectSlots> & SelectCommons & InputWrapperCommons;
