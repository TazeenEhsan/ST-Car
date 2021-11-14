import React from 'react';

const HelpSection = () => {
    return (
        <div className="container" style={{ marginTop: '30px', marginBottom: '20px' }}>
            <h6>Need Help ?</h6>
            <p>Don’t Worry We are here for you.</p>
            <div className="accordion accordion-flush" style={{ border: '2px solid black' }} id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Are there any extra fees that I will have to pay?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">No, we do not charge any extra fees or fuel surcharges. The listed price is the price you pay. Including tax.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Should I print a receipt to show the tour guide?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">We understand that you may not have a printer handy when you’re traveling so it is not necessary to have a printed copy. However, we require that you show ID matching your reservation and also the Order # that is immediately emailed to you after you make your reservation.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How much does it cost to do a private tour?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Please contact us to get the latest information on your desired trip.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            What should I wear?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Wear whatever is comfortable. It is recommended to have a sturdy pair of broken-in trail shoes, boots, or sneakers. It is preferable to dress in layers and wear clothing that will wick away perspiration and keep you dry and comfortable.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            What do I need to bring?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Not much, remember our trips are all inclusive. We do suggest you bring appropriate clothing to fit the season and a day pack to carry extra snacks and water..</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Are we going hiking even though it’s raining and windy?
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">We do hike in the rain, snow, wind and any other weather conditions that nature decides to throw at us. After all, we’re going on adventures! If the weather is unsafe for any reason, the trip will be changed or postponed. You will be notified the week of your trip if there are changes due to weather.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSection;