import * as React from 'react';
import PropTypes from 'prop-types';
import Downshift, {
  ControllerStateAndHelpers,
  DownshiftState,
  StateChangeOptions,
} from 'downshift';
import { isSameDay, format, isAfter, isBefore } from 'date-fns';
import TextField from '@material-ui/core/TextField';
import Kalendaryo from 'kalendaryo';
import { Calendar } from './Calendar';
import { styled, useTheme } from '@material-ui/styles';
import { InputAdornment, IconButton } from '@material-ui/core';
import DateRange from '@material-ui/icons/DateRange';

const Wrapper = styled('div')({
  position: 'relative',
  '*': {
    boxSizing: 'border-box',
  },
});

const itemToString = (dateFormat: string) => ({
  fromDate,
  toDate,
}: DateRange) =>
  `${fromDate ? `${format(fromDate, dateFormat)}${toDate ? ' ' : ''}` : ''}${
    toDate ? `⟶ ${format(toDate, dateFormat)}` : ''
  }`;

function stateReducer(
  state: DownshiftState<any>,
  changes: StateChangeOptions<any>
) {
  // this prevents the menu from being closed when the user
  // selects an item with a keyboard or mouse
  switch (changes.type) {
    case Downshift.stateChangeTypes.keyDownEnter:
    case Downshift.stateChangeTypes.clickItem:
      return {
        ...changes,
        isOpen: state.isOpen,
        highlightedIndex: state.highlightedIndex,
      };
    default:
      return changes;
  }
}

const renderCalendar = (props: DateRangePickerProps) => <Calendar {...props} />;
type DateRange = {
  fromDate?: any;
  toDate?: any;
};
interface DateRangePickerProps {
  fromDate: Date | null;
  toDate: Date | null;
  onChange: (range: DateRange) => void;
  className?: string;
  dateFormat: string;
  closeDialogOnSelection?: boolean;
}
const DateRangePicker: React.FC<DateRangePickerProps> = props => {
  const setDateRange = (
    selectedDate: Date,
    stateAndHelpers: ControllerStateAndHelpers<any>
  ) => {
    const { fromDate, toDate } = props;

    if (!fromDate && toDate && isAfter(selectedDate, toDate)) {
      props.onChange({ fromDate: toDate, toDate: selectedDate });
      return;
    }

    // Reset the state if the selected date is equal
    if (toDate && isSameDay(selectedDate, toDate)) {
      props.onChange({ toDate: null });
      return;
    }
    if (fromDate && isSameDay(selectedDate, fromDate)) {
      props.onChange({ fromDate: null });
      return;
    }

    // Set the starting date to the selected date
    // if the starting date is empty
    if (!fromDate) {
      props.onChange({ fromDate: selectedDate });
      return;
    }

    // Set the ending date to the selected date if the start date
    // is given and the selected date is after the start date
    if (fromDate && isAfter(selectedDate, fromDate)) {
      props.onChange({ toDate: selectedDate });
    }

    // Set the starting date to the selected date if the
    // starting date is given and the selected date is
    // before the ending date
    else if (toDate && fromDate && isBefore(selectedDate, fromDate)) {
      props.onChange({ fromDate: selectedDate });
    }
    // Set the starting date to the selected date
    // and the ending date to the last starting date
    // if the starting date is given and the selected date is before this starting date
    else if (fromDate && isBefore(selectedDate, fromDate)) {
      props.onChange({ fromDate: selectedDate, toDate: fromDate });
    }
    // Both dates are selected if we get here
    if (props.closeDialogOnSelection) {
      stateAndHelpers.closeMenu();
    }
  };

  const clearDateRange = () => props.onChange({ fromDate: null, toDate: null });

  const { fromDate, toDate, dateFormat } = props;
  return (
    <Downshift
      stateReducer={stateReducer}
      selectedItem={{ fromDate, toDate }}
      itemToString={itemToString(dateFormat)}
      onSelect={setDateRange}
      {...props}
    >
      {({ getInputProps, getLabelProps, selectedItem, ...downshiftProps }) => (
        <div className={props.className}>
          <TextField
            id="date-range"
            label="Date range"
            InputLabelProps={{
              ...getLabelProps(),
              shrink: downshiftProps.isOpen || !!fromDate || !!toDate,
            }}
            placeholder="From:"
            fullWidth
            InputProps={{
              ...getInputProps(),
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <DateRange />
                  </IconButton>
                </InputAdornment>
              ),
              readOnly: true,
              onClick: downshiftProps.openMenu as any,
              onFocus: downshiftProps.openMenu as any,
            }}
          />

          {downshiftProps.isOpen ? (
            <Wrapper>
              <Kalendaryo
                {...downshiftProps}
                startCurrentDateAt={
                  selectedItem.fromDate || selectedItem.toDate
                }
                fromDate={selectedItem.fromDate}
                toDate={selectedItem.toDate}
                clearDateRange={clearDateRange}
                startWeekAt={1}
                defaultFormat={dateFormat}
                render={renderCalendar}
              />
            </Wrapper>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};

DateRangePicker.propTypes = {
  fromDate: PropTypes.instanceOf(Date),
  toDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  dateFormat: PropTypes.string.isRequired,
  closeDialogOnSelection: PropTypes.bool,
};

DateRangePicker.defaultProps = {
  fromDate: null,
  toDate: null,
  className: '',
  dateFormat: 'YYYY-MM-DD',
};

export { DateRangePicker };
