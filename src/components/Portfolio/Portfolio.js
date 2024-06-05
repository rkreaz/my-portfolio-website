import React, { useEffect, useState } from 'react';
import Spinner from '../../assets/Spinner';
import PortfolioDetails from './PortfolioDetails';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPortfolio(data))
        setIsLoading(false)
    }, [])

    console.log(portfolio);

    if (isLoading) {
        return <div className='mainSpinner'><Spinner spinnerClass='' /></div>
    }


    return (
        <>
            <div className="rn-portfolio-area rn-section-gap section-separator">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">Visit my portfolio and keep your feedback</span>
                                <h2 className="title">My Portfolio</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                        {portfolio?.map(p => <div key={p._id} data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <a onClick={() => setDetails(p)} href="javascript:void(0)">
                                            <img src={p.img} alt={p.title} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">
                                                <a onClick={() => setDetails(p)} href="javascript:void(0)">{p.category}</a>
                                            </div>
                                            <div className="meta">
                                                <span><i className="feather-heart"></i> {Math.floor(Math.random() * 100)}</span>
                                            </div>
                                        </div>
                                        <h4 className="title"><a onClick={() => setDetails(p)} href="javascript:void(0)">{p.title} <i
                                            className="feather-arrow-up-right"></i></a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>)}

                    </div>
                </div>
            </div>

            {portfolio && <PortfolioDetails details={details} />}
        </>
    );
};

export default Portfolio;