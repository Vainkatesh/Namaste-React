import { useDispatch } from "react-redux";
import "../../index.css";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../slices/cartSlice";

const ItemList=({items})=>{

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        dispatch(addItem(item));
    }

    return (
        <div className="item-list">
                {items?.map((item)=>(
                <div key={item?.card?.id} className="item">
                    <div className="item-header">
                        <div className="item-header-info">
                        <span>{item?.card?.info?.name}</span>
                        <span>₹ {(item?.card?.info?.price||item?.card?.info?.defaultPrice)/100}</span>
                        <p>{item?.card?.info?.description}</p>
                        </div>
                        <div>
                        <div className="item-logo-button-container">
                        <button className="item-logo-button" onClick={()=>handleAddItem(item)}>Add +</button>
                        </div>
                        <img className="item-logo" src={CDN_URL+item?.card?.info?.imageId}/>
                        </div>
                    </div>
                </div>
                ))}
        </div>
    );
}

export default ItemList;