import React from 'react';
import eduData from './EduData'
const Education = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <div className="w-75">
                <h5>Education</h5>
                <hr />
                <div>
                    {
                        eduData?.map(item => (
                            <div className="my-3 card border-light p-3">
                                <small>{item?.session}</small>
                                <span><b>{item?.degree}</b>, <i>{item?.university}</i> </span>
                                <span>CGPA: {item?.cGpa}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Education;