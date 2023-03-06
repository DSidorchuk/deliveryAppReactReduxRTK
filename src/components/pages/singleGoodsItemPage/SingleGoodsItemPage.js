import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProduct } from "../../goodsList/goodsSlice";
import GoodsItemFull from "../../goodsItemFull/GoodsItemFull";
import { setContent } from "../../../utilities/setContent";

const SingleGoodsItemPage = () => {

    const product = useSelector(state => state.goods.product);
    const productLoadingStatus = useSelector(state => state.goods.productLoadingStatus);
    const dispatch = useDispatch();

    const {shop, id} = useParams();

    
    useEffect(() => {
        dispatch(fetchProduct(`${shop}/${id}`));
    }, []);

    const createContent = () => {
        return <GoodsItemFull item={product}/>;
    }

    const content = setContent(productLoadingStatus, createContent);


    return (
        <div className="container">
            {content}
        </div>
        
    )
}

export default SingleGoodsItemPage;