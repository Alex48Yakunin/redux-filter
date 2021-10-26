import {useSelector, useDispatch} from "react-redux";
import {addService, editService, editServiceItem, validateServiceItem, resetServiceForm} from "../actions/actionCreators";

export default function ServiceForm() {
    const {values} = useSelector((state) => state.serviceForm),
          dispatch = useDispatch(),
          price = Number(values.price);

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch(editServiceItem(name, value));
    };

    const handleReload = (e) => {
        e.preventDefault();
        dispatch(resetServiceForm());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.name.lenght < 0) {
            dispatch(validateServiceItem("name"));
            return;
        }

        
        if (!price || price < 0) {
            dispatch(validateServiceItem("price"));
            return;
        }

        if (values.id) {
            dispatch(editService(values.id, values.name, values.price));
        } else {
            dispatch(addService(values.name, values.price));
        }
    };

    return (
        <form action="" onSubmit={handleSubmit} onReset={handleReload}>
            <input
                name="name"
                defaultValue={values.name}
                onChange={handleChange}
                type="text"/>
            <input         
                name="price"
                defaultValue={values.price}
                type="text"
                onChange={handleChange}/>
            <button type="submit">SAVE</button>
            {values.id && (
                <button type="reset">
                    Cancel
                </button>
            )}
        </form>
    )
}