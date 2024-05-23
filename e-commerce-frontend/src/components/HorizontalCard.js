import React, { useEffect, useState } from 'react';
import summaryApi from '../common';
import Slider from 'react-slick'; // Import slider component
import displayINRCurrency from '../helpers/DisplayCurrency'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const NextArrow = ({ onClick }) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="feather feather-chevron-right"
//         style={{ cursor: 'pointer', right:'10px', zIndex:1 }}

//         onClick={onClick}
//     >
//         <polyline points="9 18 15 12 9 6" />
//     </svg>
// );

// const PrevArrow = ({ onClick }) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="feather feather-chevron-left"
//         style={{ cursor: 'pointer', color:'red', left:'10px' ,zIndex: 1}}
//         onClick={onClick}
//     >
//         <polyline points="15 18 9 12 15 6" />
//     </svg>
// );
const NextArrow = ({ onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-right"
        style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1', color: 'rgb(56, 45, 94)' }}
        onClick={onClick}
    >
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const PrevArrow = ({ onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-left"
        style={{ cursor: 'pointer', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'rgb(56, 45, 94)', zIndex: '1' }}
        onClick={onClick}
    >
        <polyline points="15 18 9 12 15 6" />
    </svg>
);






const HorizontalCard = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProductsCategoryWise = async (category) => {
        try {
            const res = await fetch(`${summaryApi.getCategoryWiseProduct.url}/${category}`, {
                method: summaryApi.getCategoryWiseProduct.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            console.log(data)
            if (data.success) {
                setProducts(data.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (category) {
            fetchProductsCategoryWise(category);
        }
    }, [category]);

    // Slider settings
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (loading) {
        return <div>Loading...</div>;
    }



    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-5">Products in {category}</h2>
            <Slider {...sliderSettings}>
                {products.map(product => {
                    console.log('product: ', product);
                    return (
                        <div key={product._id} className="px-2 pb-2">
                            <div className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
                                <img src={product.productImage[0]} alt={product.name} className="w-full h-full object-fit rounded-md mb-4" />
                                <h3 className="text-sm font-semibold">{product.productName}</h3>
                                <p className='text-red-600 font-medium'>{displayINRCurrency(product?.sellingPrice)}</p>
                                <p className='text-slate-500 line-through'>{displayINRCurrency(product?.price)}</p>
                                <button
                                    className="p-2 mt-1 text-white rounded-md hover:bg-gray-600 text-sm w-30 mx-auto" // Added mx-auto class for horizontal centering
                                    style={{ backgroundColor: 'rgb(56, 45, 94)' }}
                                >
                                    Add to cart
                                </button>

                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default HorizontalCard;
