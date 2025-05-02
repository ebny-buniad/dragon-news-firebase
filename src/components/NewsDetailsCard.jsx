import React from 'react';
import { Link, useNavigate } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log(news)
    let navigate = useNavigate()
    const { title, image_url, details } = news
    return (
        <div>
            <div className='border border-gray-300 rounded-md p-3'>
                <img className='rounded-md w-full' src={image_url} alt="" />
                <h2 className='text-xl py-3 font-bold'>{title}</h2>
                <p>{details}</p>

                {/* <Link to={`/category/${news.category_id}`} className='btn btn-secondary my-4'> -All news in this category</Link> */}
                <button className='btn btn-secondary my-4' onClick={() => navigate(-1)}>-All news in this category</button>
            </div>
        </div>
    );
};

export default NewsDetailsCard;