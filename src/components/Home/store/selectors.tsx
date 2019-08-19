import { createSelector } from 'reselect';

export const selectHome = state => state.home;

export const makeSelectShipments = () =>
  createSelector(selectHome, state => state.shipments);

export const makeSelectShipment = () =>
  createSelector(selectHome, state => state.shipment);

export const makeSelectLoading = () =>
  createSelector(selectHome, state => state.loading);
