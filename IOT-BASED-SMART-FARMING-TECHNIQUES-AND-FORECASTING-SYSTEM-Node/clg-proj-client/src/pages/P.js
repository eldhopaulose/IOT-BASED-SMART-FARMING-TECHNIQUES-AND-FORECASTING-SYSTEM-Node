import React from 'react'

function P() {
  
    const PotassiumLink = "https://blog.agchemigroup.eu/uses-for-koh-in-farming-the-chemical-industry-and-food-processing/";
    const limeLink = "https://en.wikipedia.org/wiki/Agricultural_lime";
    const SodiumLink =
      "https://www.naturalsoda.com/applications/animal-feed-and-agriculture/";
    const SulfuricLink =
      "https://testbook.com/learn/chemistry-uses-of-sulphuric-acid/";
    const VinegarLink =
      "https://www.pesticide.org/vinegar_herbicides";
    const PhosphoricLink =
      "https://persianutab.com/application-of-phosphoric-acid-in-agriculture/?lang=en";
  
    const openLink = (link) => {
      window.open(link, "_blank");
    };
  
  
    return (
      <div className="container">
        <div className="row">
        <div>
        <a class="btn btn-primary mt-5" style={{ float: "right" }} href="MalaP" >Malayalam</a>
        </div>
          <p class="h1 text-center mt-5">Deficiency of P </p>
          <div className="col-md-6 col-lg-4 mb-4 mt-3">
            <div className="card h-100 mt-5">
              <div className="card-body">
                <h4 className="card-title">Optimize fertilizer application</h4>
                <p className="card-text">
                Farmers should apply fertilizers at the right time and in the right amounts to optimize crop growth while minimizing phosphorus loss through runoff or leaching. Split application can also be used to improve phosphorus use efficiency.
                </p>
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => openLink(limeLink)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mt-3">
            <div className="card h-100 mt-5">
              <div className="card-body">
                <h4 className="card-title">Use phosphorus-efficient crops</h4>
                <p className="card-text">
                Farmers can choose phosphorus-efficient crops or varieties that require less phosphorus fertilizer to produce high yields.
                </p>
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => openLink(PotassiumLink)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mt-3">
            <div className="card h-100 mt-5">
              <div className="card-body">
                <h4 className="card-title">Crop rotation</h4>
                <p className="card-text">
                Rotating crops can help reduce the buildup of pests and diseases, improve soil health and fertility, and reduce the need for phosphorus fertilizer.
                </p>
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => openLink(SodiumLink)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <p class="h1 text-center mt-5">
            High P
          </p>
          <div className="col-md-6 col-lg-4 mb-4 mt-3">
            <div className="card h-100 mt-5">
              <div className="card-body">
                <h4 className="card-title">Adjust fertilizer application</h4>
                <p className="card-text">
                Farmers should adjust their fertilizer application rates based on the nutrient requirements of their crops and the nutrient levels in their soil. High phosphorus levels in the soil may indicate that less phosphorus fertilizer is needed.
                </p>
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => openLink(SulfuricLink)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mt-3">
            <div className="card h-100 mt-5">
              <div className="card-body">
                <h4 className="card-title">Use slow-release fertilizers</h4>
                <p className="card-text">
                Slow-release fertilizers can provide a more sustained supply of phosphorus to crops and reduce the risk of phosphorus leaching or runoff.
                </p>
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => openLink(PhosphoricLink)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mt-3">
            <div className="card h-100 mt-5">
              <div className="card-body">
                <h4 className="card-title">Use phosphorus inhibitors</h4>
                <p className="card-text">
                Phosphorus inhibitors can be added to fertilizer to slow down the release of phosphorus and reduce the risk of phosphorus loss.
                </p>
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => openLink(VinegarLink)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default P