import React from 'react';

const PortfolioDetails = ({details}) => {
  const {title, category, img, live, linkClient, linkServer, features, technologies} = details;
  const spilitTitle = features?.split('BR');
  console.log(spilitTitle);
  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row align-items-center">

                            <div className="col-lg-5">
                                <div className="portfolio-popup-thumbnail">
                                    <div className="image">
                                        <img className="w-100" src={img} alt={title} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="text-content">
                                    
                                    <h3>
                                        <span>{category}</span> {title}
                                    </h3>

                                    <div className="mb--30">
                                     <ul className='features_list'>
                                     {spilitTitle?.length > 0 ? spilitTitle.map((title, index) => <li key={index}>{title}</li>) : ''}
                                     </ul>

                                      {technologies ? <span className='tec_used'><br /><b>Technologies Used:</b> {technologies}</span> : ''}
                                    </div>

                                    <div className="button-group mt--20">
                                        {live ? <a target="{_blank}" href={live} className="rn-btn project_links thumbs-icon">
                                            <span>Live Project</span>
                                            <i data-feather="thumbs-up"></i>
                                        </a> : ''}
                                       {linkClient ?  <a target="{_blank}" href={linkClient} className="rn-btn project_links">
                                            <span>Github Client side</span>
                                            <i data-feather="chevron-right"></i>
                                        </a> : ''}
                                        {linkServer ? <a target="{_blank}" href={linkServer} className="rn-btn project_links">
                                            <span>Github Server side</span>
                                            <i data-feather="chevron-right"></i>
                                        </a> : ''}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default PortfolioDetails;