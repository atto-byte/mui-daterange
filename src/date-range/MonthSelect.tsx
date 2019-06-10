import * as React from 'react';
import { isSameMonth, getMonth, addMonths, format, isThisMonth } from 'date-fns';
import { Text, Header, HeaderDivider, Row, SelectableCell } from './Components';
import YearSelect, { YearSelectProps } from './YearSelect';

function getMonthsInYear(date: string | number | Date, dateFormat = 'MMM') {
  const result = [];
  const selectedMonth = getMonth(date);
  for (let month = 0; month < 12; month++) {
    const dateValue = addMonths(date, month - selectedMonth);
    result.push({ dateValue, label: format(dateValue, dateFormat) });
  }
  return result;
}
interface MonthSelectProps extends YearSelectProps {}
function MonthSelect(props: MonthSelectProps) {
  const { setDate, date } = props;

  return (
    <React.Fragment>
      <Header widthPercentage={1}>
        <Text>Month &amp; Year</Text>
      </Header>
      <HeaderDivider />
      <Row>
        {getMonthsInYear(date).map(month => (
          <SelectableCell
            key={month.label}
            widthPercentage={1 / 4}
            horizontalSpacing
            onClick={() => setDate(month.dateValue)}
            isSelected={isSameMonth(month.dateValue, date)}
            isCurrent={isThisMonth(month.dateValue)}>
            <Text>{month.label}</Text>
          </SelectableCell>
        ))}
      </Row>
      <YearSelect {...props} />
    </React.Fragment>
  );
}

export default MonthSelect;
