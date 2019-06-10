import React, { Fragment } from 'react';
import { getYear, addYears, format, isThisYear, isSameYear } from 'date-fns';
import { Text, HeaderDivider, Row, SelectableCell } from './Components';
import { styled } from '@material-ui/styles';

const Divider = styled(HeaderDivider)({
    marginTop: '8px'
})

function getSurroundingYears(date: Date, amount = 8, dateFormat = 'YYYY') {
  const result = [];
  const selectedYearIndex = getYear(date) % amount;
  for (let year = 0; year < amount; year++) {
    const dateValue = addYears(date, year - selectedYearIndex);
    result.push({ dateValue, label: format(dateValue, dateFormat) });
  }
  return result;
}
export interface YearSelectProps {
  setDate: (date: Date) => void;
  date: Date
}
function YearSelect(props: YearSelectProps) {
  const { setDate, date } = props;

  return (
    <Fragment>
      <Divider />
      <Row>
        {getSurroundingYears(date).map(year => (
          <SelectableCell
            key={year.label}
            widthPercentage={1 / 4}
            horizontalSpacing
            onClick={() => setDate(year.dateValue)}
            isSelected={isSameYear(year.dateValue, date)}
            isCurrent={isThisYear(year.dateValue)}>
            <Text>{year.label}</Text>
          </SelectableCell>
        ))}
      </Row>
    </Fragment>
  );
}

export default YearSelect;
