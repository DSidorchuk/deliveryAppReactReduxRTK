
import "./goodsItemFull.scss";

const GoodsItemFull = () => {
    return (
        <div className="goods__full">
            <img className="goods__full-img"
                 src="https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_Hamburger:product-header-desktop?wid=830&hei=456&dpr=off"
                 alt="hamburger"/>
            <div className="goods__full-data">
                <h1 className="goods__full-title">Гамбургер</h1>
                <p className="goods__full-descr">Біфштекс із натуральної яловичини, цибуля, шматочок маринованого огірка, заправлені гірчицею і кетчупом, у запашній булочці з пшеничного борошна.</p>
                <div className="goods__full-order">
                    <p className="goods__full-price">50 ГРН</p>
                    <p className='goods__full-qtty'>1</p>
                    <button className="goods__full-btn">Замовити</button>
                </div>
            </div>
        </div>
    )
}

export default GoodsItemFull;