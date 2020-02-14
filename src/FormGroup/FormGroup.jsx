/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, bool, element, oneOfType, arrayOf, oneOf } from 'prop-types';
import { MARGIN, DEFAULT_MARGIN } from './props/margin';
import { joinClassName } from '../helper';
import './FormGroup.scss';

export default function FormGroup({
  children,
  classNameDefault,
  className,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  m,
  row,
  ...props
}) {
  // margin option condition
  const mtClass = mt && !my && !m ? MARGIN.top + mt : DEFAULT_MARGIN;
  const mrClass = mr && !mx && !m ? MARGIN.right + mr : DEFAULT_MARGIN;
  const mbClass = mb && !my && !m ? MARGIN.bottom + mb : DEFAULT_MARGIN;
  const mlClass = ml && !mx && !m ? MARGIN.left + ml : DEFAULT_MARGIN;
  const mxClass = mx && !m ? MARGIN.x + mx : DEFAULT_MARGIN;
  const myClass = my && !m ? MARGIN.y + my : DEFAULT_MARGIN;
  const mAllClass = m ? MARGIN.all + m : DEFAULT_MARGIN;
  const rowClass = row ? 'rex-form-group-row' : null;
  const classNameList = joinClassName([
    classNameDefault,
    rowClass,
    className,
    mtClass,
    mrClass,
    mbClass,
    mlClass,
    mxClass,
    myClass,
    mAllClass,
  ]);
  return (
    <div className={classNameList} {...props}>
      {children}
    </div>
  );
}

FormGroup.defaultProps = {
  children: null,
  row: false,
  classNameDefault: 'rex-form-group',
  className: '',
  mt: DEFAULT_MARGIN,
  mr: DEFAULT_MARGIN,
  mb: DEFAULT_MARGIN,
  ml: DEFAULT_MARGIN,
  mx: DEFAULT_MARGIN,
  my: DEFAULT_MARGIN,
  m: DEFAULT_MARGIN,
};

const marginValues = [null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

FormGroup.propTypes = {
  children: oneOfType([string, element, arrayOf(element)]),
  row: bool,
  classNameDefault: string,
  className: string,
  mt: oneOf(marginValues),
  mr: oneOf(marginValues),
  mb: oneOf(marginValues),
  ml: oneOf(marginValues),
  mx: oneOf(marginValues),
  my: oneOf(marginValues),
  m: oneOf(marginValues),
};
