import { PropTypes, ButtonProps } from '@material-ui/core';

export type Color = PropTypes.Color;
export type Alignment = PropTypes.Alignment;
export type Margin = PropTypes.Margin;

// export type Button = ButtonProps;

export interface LoginWithFacebookTypes extends ButtonProps {
  color: Color;
  iconColor: string;
}
