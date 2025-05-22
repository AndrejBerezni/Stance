const addSort = (sort: string | undefined): string => {
  switch (sort) {
    case 'rating':
      return 'rating DESC';
    case 'price-asc':
      return 'list_price ASC';
    case 'price-desc':
      return 'list_price DESC';
    case 'date':
    default:
      return 'created_at DESC';
  }
};

export const convertSearchParamsToFilters = (
  searchParams: Record<string, string>
) => {
  const sort = addSort(searchParams.sort as string | undefined);
  const page = searchParams.page ? +searchParams.page : 1;
  const limit = searchParams.limit ? +searchParams.limit : 9;
  const offset = (page - 1) * limit;

  const whereClauses: string[] = [];

  const formatInClause = (input: string | string[]): string => {
    const values = Array.isArray(input) ? input : [input];
    return `(${values.map((val) => `'${val.replace(/'/g, "''")}'`).join(', ')})`;
  };
  const formatArray = (input: string | string[]): string => {
    const values = Array.isArray(input) ? input : [input];
    return `ARRAY[${values.map((val) => `'${val.replace(/'/g, "''")}'`).join(', ')}]`;
  };

  if (searchParams.collection) {
    whereClauses.push(
      `collection IN ${formatInClause(searchParams.collection)}`
    );
  }

  if (searchParams.category) {
    whereClauses.push(`category IN ${formatInClause(searchParams.category)}`);
  }

  if (searchParams.color) {
    whereClauses.push(`available_colors && ${formatArray(searchParams.color)}`);
  }

  if (searchParams.rating) {
    const rating = Number(searchParams.rating);
    if (!isNaN(rating)) {
      whereClauses.push(`rating >= ${rating}`);
    }
  }

  const where = whereClauses.length
    ? ` WHERE ${whereClauses.join(' AND ')}`
    : '';

  return {
    sort,
    page,
    limit,
    offset,
    where,
  };
};
