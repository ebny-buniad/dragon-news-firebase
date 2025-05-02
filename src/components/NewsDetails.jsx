import React, { useEffect, useState } from 'react';
import Header from './Header';
import RighAside from './homelayout/RighAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './newsDetailsCard';

const NewsDetails = () => {
    const [news, setNews] = useState({});
    const { id } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        const matchedNews = data.find((newsData) => newsData.id == id);
        setNews(matchedNews);
    }, [data, id])

    // console.log(news)

    return (
        <div>
            <header className='py-5'>
                <Header></Header>
            </header>
            <main className='w-10/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h3 className='font-bold text-xl py-4'>Dragon News</h3>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;