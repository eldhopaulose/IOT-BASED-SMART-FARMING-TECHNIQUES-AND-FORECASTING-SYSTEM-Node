import React from 'react'
import { Outlet } from "react-router-dom";

function N() {

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
      <a class="btn btn-primary mt-5" style={{ float: "right" }} href="MalaN" >Malayalam</a>
      </div>
        <p class="h1 text-center mt-5">Deficiency of N </p>
        <div className="col-md-6 col-lg-4 mb-4 mt-3">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">Optimize fertilizer application</h4>
              <p className="card-text">
                Farmers should apply fertilizers at the right time and in the right amounts to optimize crop growth while minimizing nitrogen loss through runoff or leaching. Split application can also be used to improve nitrogen use efficiency.
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
              <h4 className="card-title">Use nitrogen-efficient crops</h4>
              <p className="card-text">
                Farmers can choose nitrogen-efficient crops or varieties that require less nitrogen fertilizer to produce high yields.
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
                Rotating crops can help reduce the buildup of pests and diseases, improve soil health and fertility, and reduce the need for nitrogen fertilizer.
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
          High N
        </p>
        <div className="col-md-6 col-lg-4 mb-4 mt-3">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">Adjust fertilizer application</h4>
              <p className="card-text">
              Farmers should adjust their fertilizer application rates based on the nutrient requirements of their crops and the nutrient levels in their soil. High nitrogen levels in the soil may indicate that less nitrogen fertilizer is needed.
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
              Slow-release fertilizers can provide a more sustained supply of nitrogen to crops and reduce the risk of nitrogen leaching or runoff.
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
              <h4 className="card-title">Use nitrogen inhibitors</h4>
              <p className="card-text">
              Nitrogen inhibitors can be added to fertilizer to slow down the release of nitrogen and reduce the risk of nitrogen loss.
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

export default N
