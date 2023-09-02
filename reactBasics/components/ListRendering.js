function ListRendering()
{

    const products =[
        {title:'cabbage' ,id:1},
        {title:'garlic',id:2},
        {title:'apple',id:3}
    ];
    const listItems =  products.map((product)=>
    (
        <li key={product.id}>{product.title}</li>
    ));
    return(
        <ul>{listItems}</ul>

    );
}

export default ListRendering;