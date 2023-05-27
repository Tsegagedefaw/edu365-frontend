import react from 'react';

const FinderSection = ()=>{
    return(
        <div className="index3_form_wrapper jb_cover float_left">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="edu_heading_wrapper float_left">
                        <h3>The Degree Finder</h3>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="index3_form_box jb_cover">
                        <div className="select_box select_box3">
                            <select>
                                <option>Courses Name</option>
                                <option>html</option>
                                <option>css</option>
                                <option>java</option>
                                <option>jquery</option>
                            </select>
                        </div>
                        <div className="select_box select_box3">
                            <select>
                                <option>Select Category</option>
                                <option>teacher</option>
                                <option>marketing</option>
                                <option>doctor</option>
                                <option>graphic</option>
                            </select>
                        </div>
                        <div className="select_box select_box3">
                            <select>
                                <option>Select Subject</option>
                                <option>html</option>
                                <option>css</option>
                                <option>java</option>
                                <option>jquery</option>
                            </select>
                        </div>
                        <div className="contect_form3 contct_form_new3">
                            <input type="text" name="name" placeholder="Keyword"/>
                        </div>
                        <div className="index3_form_search"> <a href="#"><i className="fas fa-search"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default function App(){
    return (
        <>
            <FinderSection/>
        </>
    )
}