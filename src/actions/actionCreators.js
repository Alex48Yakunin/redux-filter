import {
    ADD_SERVICE,
    EDIT_SERVICE,
    DELETE_SERVICE,
    SELECT_EDIT_SERVICE,
    EDIT_SERVICE_ITEM,
    VALIDATE_SERVICE_ITEM,
    RESET_SERVICE_FORM,
    EDIT_FILTER
  } from './actionTypes';
  
  export function addService(name, price) {
    return { type: ADD_SERVICE, payload: { name, price } };
  }
  
  export function editService(id, name, price) {
    return { type: EDIT_SERVICE, payload: { id, name, price } };
  }
  
  export function deleteService(id) {
    return { type: DELETE_SERVICE, payload: { id } };
  }

  export function selectEditService(service) {
    return { type: SELECT_EDIT_SERVICE, payload: { ...service } };
  }
  
  export function editServiceItem(name, value) {
    return { type: EDIT_SERVICE_ITEM, payload: { name, value } };
  }
  
  export function validateServiceItem(name) {
    return { type: VALIDATE_SERVICE_ITEM, payload: { name } };
  }
  
  export function resetServiceForm() {
    return { type: RESET_SERVICE_FORM };
  }

  export function editFilter(filter) {
    return { type: EDIT_FILTER, payload: { filter } };
  }