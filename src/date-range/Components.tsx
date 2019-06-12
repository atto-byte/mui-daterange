import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { styled, withTheme } from '@material-ui/styles';

function fromTheme(theme: any, key: string, def: string) {
  if (!theme || !theme.dateRangePicker) return def;
  const value = theme.dateRangePicker[key];
  return typeof value !== 'undefined' ? value : def;
}

export const HeaderDivider = styled(Divider)({
    margin: "0 -8px 8"
});

export const Row = styled('div')({
  display: "flex",
  flexWrap: (props) => props.nowrap ? "nowrap" : "wrap",
  alignItems: "center",
  justifyContent: "space-between",
})

export const Text = styled(Typography)({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

function getCellWidth({widthPercentage = 1 / 7, horizontalSpacing = 0}): string {
  widthPercentage = widthPercentage ? widthPercentage :  1 / 7;
  horizontalSpacing = horizontalSpacing ? 3 : 0;
  return `calc(100% * ${widthPercentage} - ${horizontalSpacing}px)`;
}
export const Cell = styled('div')({
  width: getCellWidth,
  paddingTop: "calc((100% / 7) - 2px)",
  margin: "2px 0",
  position: "relative",
  border: "1px solid transparent",
});

function getBorderRadius({ isInRange, isRangeStart, isRangeEnd }) {
  if (isRangeStart) return '999px 0 0 999px';
  if (isRangeEnd) return '0 999px 999px 0';
  if (isInRange) return 0;
  return '999px';
}

function getBackground(props) {
  if (props.isSelected) return fromTheme(props.theme, 'selected', props.theme.palette.primary.main);
  if (props.isHighlighted) return fromTheme(props.theme, 'highlighted', '#ebebeb');
  if (props.isInRange) return fromTheme(props.theme, 'inRange', props.theme.palette.primary.light);
  return '#fff';
}

function getColor(props) {
  const { isLessImportant, isSelected, theme } = props;
  const color = theme.palette.getContrastText(getBackground(props));
  if (isSelected || !isLessImportant) return color;
  return fromTheme(theme, 'lessImportant', fade(color, 0.54));
}

export const SelectableCell = withTheme(styled(Cell)({
  borderRadius: (props) => getBorderRadius(props),
  borderColor: ({ theme, isCurrent }) => (isCurrent ? fromTheme(theme, 'current', '#9e9e9e') : 'transparent'),
  boxSizing: 'border-box',
  cursor: 'pointer',
  background: (props) => getBackground(props),
  ["& > *"]: {
    color: (props) => getColor(props),
  }
}))

export const Header = withTheme(styled(Cell)({
 "& > *": {
    color: ({ theme }) => fromTheme(theme, 'header', '#9e9e9e')
  }
}))
