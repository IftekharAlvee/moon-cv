import React from 'react';
import pubData from './pubData';

const Publications = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <div className="w-75">
                <div>
                    <h5>Publications</h5>
                    <hr />
                </div>
                <div>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            pubData?.map(item => (
                                <div className="col">
                                    {item?.type ? <h6>{item?.type}</h6> : <span></span>}
                                    <div className="card border-dark my-2 p-3">
                                    <small>{item?.time}</small>
                                    <p> <b>{item?.author}</b>  {item?.title} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publications;