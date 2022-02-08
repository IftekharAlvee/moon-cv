import React from 'react';
import expData from './expData'

const WorkExperience = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <div className="w-75">
                <h5>Working Experience</h5>
                <hr />
                <div>
                    {
                        expData?.map(item => (
                            <div className="my-3 card p-3">
                                <small>{item?.time}</small>
                                <span><b>{item?.title}</b>, <i>{item?.desc}</i> </span>
                                {
                                    item?.link ? <a href={item?.link}>website</a> : <span></span>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;