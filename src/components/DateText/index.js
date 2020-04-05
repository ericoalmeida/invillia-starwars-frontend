import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Label } from './styles';

export default function DateText({ date }) {
  return (
    <Label>
      {format(parseISO(date), "dd'/'MM'/'yyyy',' hh'h'mm", { locale: pt })}
    </Label>
  );
}

DateText.propTypes = {
  date: PropTypes.string.isRequired,
};
