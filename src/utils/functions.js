import moment from 'moment';

export const getRandomColor = () => {
  return (
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')'
  );
};

export const getFormattedDate = (strDate) => {
  return moment(strDate).format('MMMM D YYYY');
};
