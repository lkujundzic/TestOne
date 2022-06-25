import ItemRow from "../ItemRow/ItemRow";

function ItemList({ data }) {
    return (
        <div>
            {data.map((item, idx) => <ItemRow key={idx} avatar_url={item.avatar_url} filename={item.filename} />)}
        </div>
    );
}

export default ItemList;
