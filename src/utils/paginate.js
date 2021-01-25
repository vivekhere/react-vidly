import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // formula to calculate the index from which the items to be displayed for
  // a given page
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

// We need lodash beacuse it provides bunch of utility functions which are helpful
// to perform pagination.
// To perform chaining operations we need to wrap the items into a lodash object.
// Before returning we need to convert the lodash wrapper object to regular array
// using value() method.
