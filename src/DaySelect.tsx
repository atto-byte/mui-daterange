import * as React from 'react';
import { isSameMonth, isWithinInterval, isSameDay, isToday } from 'date-fns';
import { Text, Header, HeaderDivider, Row, SelectableCell } from './Components';
import { YearSelectProps } from './YearSelect';

const dateIsInRange = (date: Date, fromDate: Date, toDate: Date) =>
  fromDate &&
  toDate &&
  isWithinInterval(date, { start: fromDate, end: toDate });

const isSelected = (date: Date, compareDate: Date) =>
  compareDate && isSameDay(date, compareDate);
interface DaySelectProps extends YearSelectProps {
  fromDate: Date;
  toDate: Date;
}
function DaySelect(props: DaySelectProps) {
  const {
    fromDate,
    toDate,
    getWeeksInMonth,
    getDayLabelsInWeek,
    date,
    getItemProps,
    getMenuProps,
    highlightedIndex,
    setHighlightedIndex,
  } = props;

  const weeksInMonth = getWeeksInMonth();
  const isInOtherMonth = dateValue => !isSameMonth(date, dateValue);
  return (
    <React.Fragment>
      <Row nowrap>
        {getDayLabelsInWeek('dd').map(day => (
          <Header key={day}>
            <Text>{day}</Text>
          </Header>
        ))}
      </Row>
      <HeaderDivider />
      <Row {...getMenuProps({ onMouseLeave: () => setHighlightedIndex(null) })}>
        {weeksInMonth.map((week, i) =>
          week.map((day, j, { length }) => {
            const isFromDate = isSelected(day.dateValue, fromDate);
            const isToDate = isSelected(day.dateValue, toDate);
            const index = i * length + j;
            return (
              <SelectableCell
                {...getItemProps({
                  key: day.label,
                  item: day.dateValue,
                  index,
                  isHighlighted: highlightedIndex === index,
                  isLessImportant: isInOtherMonth(day.dateValue),
                  isInRange: dateIsInRange(day.dateValue, fromDate, toDate),
                  isRangeStart: isFromDate && toDate,
                  isRangeEnd: isToDate && fromDate,
                  isSelected: isFromDate || isToDate,
                  isCurrent: isToday(day.dateValue),
                })}
              >
                <Text>{day.label}</Text>
              </SelectableCell>
            );
          })
        )}
      </Row>
    </React.Fragment>
  );
}

export default DaySelect;
