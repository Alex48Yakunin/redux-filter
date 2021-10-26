import {
  nanoid
} from 'nanoid';
import {
  ADD_SERVICE,
  EDIT_SERVICE,
  SELECT_EDIT_SERVICE,
  DELETE_SERVICE,
  RESET_SERVICE_FORM,
  EDIT_FILTER
} from '../actions/actionTypes';


const match = (item, filter) => {

  if (filter.lenght > 0){
      if (!item ) {
        return false;
      }
    
      if (!filter) {
        return true;
      }
  }

  return item.name.toUpperCase().includes(filter.toUpperCase());
};

const initialState = {
  items: [{
      id: nanoid(),
      name: 'Замена стекла',
      price: 21000
    },
    {
      id: nanoid(),
      name: 'Замена дисплея',
      price: 25000
    },
    {
      id: nanoid(),
      name: 'Замена аккумулятора',
      price: 4000
    },
  ],
  editing: null,
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const newItem = {
        ...action.payload
      };
      newItem.id = nanoid();
      newItem.price = Number(newItem.price);

      return {
        ...state,
        items: [
          ...state.items,
          newItem,
        ],
      };
    }

    case EDIT_SERVICE: {
      const editedItem = {
        ...action.payload
      };
      editedItem.price = Number(editedItem.price);

      return {
        ...state,
        items: [
          ...state.items.map((item) => (item.id === editedItem.id) ? editedItem : item),
        ],
        editing: null,
      };
    }


    case SELECT_EDIT_SERVICE: {
      const {
        id
      } = action.payload;
      return {
        ...state,
        editing: id
      };
    }

    case DELETE_SERVICE: {
      const {
        id
      } = action.payload;
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== id)],
      };
    }

    case RESET_SERVICE_FORM: {
      return {
        ...state,
        editing: null
      };
    }

    case EDIT_FILTER: {
      const { filter } = action.payload;
      return {
        ...state,
        items: [
          ...state.items.map((item) => ({
            ...item,
            match: match(item, filter),
          }))
        ],
        filter,
      };
    }

    default:
      return state;
  }
}