import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectProduct = (pid) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections.filter((product) => product.id === pid)[0] : null
  );
