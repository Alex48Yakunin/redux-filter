import {useSelector, useDispatch} from "react-redux";
import {selectEditService, deleteService, editFilter} from "../actions/actionCreators";
import FilterItem from "./FilterItem";


export default function ServiceList() {
    const list = useSelector((state) => state.serviceList),
          dispatch = useDispatch();

    const handleEdit = (id) => {
        const item = list
            .items
            .find((service) => service.id === id);
        dispatch(selectEditService(item));
    };

    const handleDelete = (id) => {
        dispatch(deleteService(id));
    };

    const handleChange = (e) => {
        dispatch(editFilter(e.target.value));
      }

    return (
        <>
        <div className="filter">
            <input onChange={handleChange} defaultValue={list.filter} placeholder="фильтровать..." />
        </div>
        <ul>
            {list
                .items
                .map((item) => (
                    <FilterItem
                    onUpdate={handleEdit}
                    onDelete={handleDelete}
                    key={item.id}
                    {...item}
                    active={item.id === list.editing}
                    filter={list.filter}
                  />
                ))}
        </ul>
        </>
    )
}