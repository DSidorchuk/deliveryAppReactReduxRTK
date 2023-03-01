import { useParams } from "react-router-dom";

import GoodsItemFull from "../../goodsItemFull/GoodsItemFull";

const SingleGoodsItemPage = () => {

    const {shop, id} = useParams();


    return (
        <div className="container">
            <GoodsItemFull/>
        </div>
        
    )
}

export default SingleGoodsItemPage;