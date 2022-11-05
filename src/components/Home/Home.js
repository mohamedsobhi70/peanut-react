import "./style.css";
import slider1 from '../../assets/images/slider-1.jpg'
import slider2 from '../../assets/images/slider-2.jpg'
import slider3 from '../../assets/images/slider-3.jpg'
import watch from '../../assets/images/watch.png'
import money from '../../assets/images/money.png'
import winner from '../../assets/images/winner.png'
import phone from '../../assets/images/phone.png'
function Home() {
  return (
   
      <main className="my-3">
        <div className="container">
            <div id="mainCarousel" className="carousel slide border-20 overflow-hidden shadow-main" data-bs-ride="carousel">
                <div className="carousel-inner" role="tablist">
                    <div className="carousel-item active" role="tab">
                        <img src={slider1} className="w-100" alt="First slide" />
                    </div>
                    <div className="carousel-item" role="tab">
                        <img src={slider2} className="w-100" alt="Second slide" />
                    </div>
                    <div className="carousel-item" role="tab">
                        <img src={slider3} className="w-100" alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev d-inline-flex justify-content-center justify-content-center"
                    type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next d-inline-flex justify-content-center justify-content-center"
                    type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* <!-- carousel --> */}
        {/* <!-- comming soon section  --> */}
        <section className="comming-soon mt-5">
            <div className="container">
                <div className="row items-section">
                    <h5 className="mb-3 fw-600 fs-18 text-dark-color">Closing soon</h5>
                    {/* <!-- here will be some products from api  --> */}
                </div>
            </div>
        </section>
        {/* <!-- end comming soon section  --> */}
        {/* <!-- vote section  --> */}
        <section className="vote mt-5">
            <div className="container">
                <div className="row">
                    <h5 className="mb-3 text-dark-color fs-18 fw-600">Vote for what you want</h5>
                    <div className="voting border-20 overflow-hidden shadow-main d-flex flex-wrap p-0">
                        <div
                            className="sec1 flex-grow-1 bg-primary-color d-flex justify-content-center align-items-center py-5">
                            <img src={watch} alt="sec1" />
                            <div className="ms-4">
                                <h6 className="text-white mb-3">Cash AED 250,000</h6>
                                <button className="btn rounded-pill border-1 text-white border-white py-2 px-4">
                                    vote
                                </button>
                            </div>
                        </div>
                        <div
                            className="sec2 flex-grow-1 bg-secondary-color d-flex justify-content-center align-items-center py-5">
                            <img src={money} alt="sec1" />
                            <div className="ms-4">
                                <h6 className="text-white mb-3">Cash AED 250,000</h6>
                                <button className="btn rounded-pill border-1 text-white border-white py-2 px-4">
                                    vote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end vote section  --> */}
        {/* <!-- reduced-price section  --> */}
        <section className="reduced-price mt-5">
            <div className="container">
                <div className="row items-section">
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                        <h5 className="fw-600 text-dark-color mb-0 fs-18">Reduced price item</h5>
                        <a href="#" className="text-decoration-none text-dark-color fs-18 fw-600">see all</a>
                    </div>
                    {/* <!-- here will be some products from api  --> */}
                </div>
            </div>
        </section>
        {/* <!-- end reduced-price section  --> */}
        {/* <!-- winners section  --> */}
        <section className="winners mt-5">
            <div className="container">
                <div className="row">
                    <h5 className="fw-600 fs-18 text-dark-color  mb-5">Winners</h5>
                    {/* <!-- winner item  --> */}
                    <div className="col-sm-6 col-lg-3 my-5 ">
                        <div className="winners-item p-3 bg-white rounded-8 shadow-main position-relative">
                            <div className="winner-img-box d-flex justify-content-center position-absolute">
                                <img src={winner} className="rounded-circle overflow-hidden border border-5"
                                    alt=""/>
                            </div>
                            <div className="product-img pt-5 text-center py-3">
                                <img src={phone} className="w-100" alt=" phone" />
                            </div>
                            <div className="text-secondary-color fs-24 text-center fw-900">
                                Congratulations to
                            </div>
                            <div className="winner-name text-center text-primary-color fw-600 text-capitalize">mohammed
                                sobhi</div>
                            <div className="text-center text-primary-color fw-600 text-capitalize">On winning
                                an Apple bundle</div>
                            <div className="text-center text-text-color mt-2 fw-500 fs-10">Ticket: 128235712
                            </div>
                            <div className="text-center text-text-color fw-500 fs-10">Draw date: 22 Jan 2021
                            </div>
                        </div>
                    </div>
                    {/* <!-- end winner item  --> */}

                    {/* <!-- ************************************************ --> */}

                    {/* <!-- winner item  --> */}
                    <div className="col-sm-6 col-lg-3 my-5 ">
                        <div className="winners-item p-3 bg-white rounded-8 shadow-main position-relative">
                            <div className="winner-img-box d-flex justify-content-center position-absolute">
                                <img src={winner} className="rounded-circle overflow-hidden border border-5"
                                    alt=""/>
                            </div>
                            <div className="product-img pt-5 text-center py-3">
                                <img src={phone} className="w-100" alt=" phone" />
                            </div>
                            <div className="text-secondary-color fs-24 text-center fw-900">
                                Congratulations to
                            </div>
                            <div className="winner-name text-center text-primary-color fw-600 text-capitalize">mohammed
                                sobhi</div>
                            <div className="text-center text-primary-color fw-600 text-capitalize">On winning
                                an Apple bundle</div>
                            <div className="text-center text-text-color mt-2 fw-500 fs-10">Ticket: 128235712
                            </div>
                            <div className="text-center text-text-color fw-500 fs-10">Draw date: 22 Jan 2021
                            </div>
                        </div>
                    </div>
                    {/* <!-- end winner item  --> */}

                    {/* <!-- ************************************************ --> */}

                    {/* <!-- winner item  --> */}
                    <div className="col-sm-6 col-lg-3 my-5 ">
                        <div className="winners-item p-3 bg-white rounded-8 shadow-main position-relative">
                            <div className="winner-img-box d-flex justify-content-center position-absolute">
                                <img src={winner} className="rounded-circle overflow-hidden border border-5"
                                    alt=""/>
                            </div>
                            <div className="product-img pt-5 text-center py-3">
                                <img src={phone} className="w-100" alt=" phone" />
                            </div>
                            <div className="text-secondary-color fs-24 text-center fw-900">
                                Congratulations to
                            </div>
                            <div className="winner-name text-center text-primary-color fw-600 text-capitalize">mohammed
                                sobhi</div>
                            <div className="text-center text-primary-color fw-600 text-capitalize">On winning
                                an Apple bundle</div>
                            <div className="text-center text-text-color mt-2 fw-500 fs-10">Ticket: 128235712
                            </div>
                            <div className="text-center text-text-color fw-500 fs-10">Draw date: 22 Jan 2021
                            </div>
                        </div>
                    </div>
                    {/* <!-- end winner item  --> */}

                    {/* <!-- ************************************************ --> */}

                    {/* <!-- winner item  --> */}
                    <div className="col-sm-6 col-lg-3 my-5 ">
                        <div className="winners-item p-3 bg-white rounded-8 shadow-main position-relative">
                            <div className="winner-img-box d-flex justify-content-center position-absolute">
                                <img src={winner} className="rounded-circle overflow-hidden border border-5"
                                    alt=""/>
                            </div>
                            <div className="product-img pt-5 text-center py-3">
                                <img src={phone} className="w-100" alt=" phone" />
                            </div>
                            <div className="text-secondary-color fs-24 text-center fw-900">
                                Congratulations to
                            </div>
                            <div className="winner-name text-center text-primary-color fw-600 text-capitalize">mohammed
                                sobhi</div>
                            <div className="text-center text-primary-color fw-600 text-capitalize">On winning
                                an Apple bundle</div>
                            <div className="text-center text-text-color mt-2 fw-500 fs-10">Ticket: 128235712
                            </div>
                            <div className="text-center text-text-color fw-500 fs-10">Draw date: 22 Jan 2021
                            </div>
                        </div>
                    </div>
                    {/* <!-- end winner item  --> */}

                    {/* <!-- ************************************************ --> */}


                </div>
            </div>
        </section>
        {/* <!-- end winners section  --> */}
    </main>
    
  );
}

export default Home;
