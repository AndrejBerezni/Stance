const dateFormatter = new Intl.DateTimeFormat('en-GB');

export const formatDate = (date: Date) => dateFormatter.format(new Date(date));
