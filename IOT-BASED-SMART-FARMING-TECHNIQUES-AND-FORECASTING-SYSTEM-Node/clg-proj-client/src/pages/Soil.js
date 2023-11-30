import React from "react";
import { Outlet } from "react-router-dom";

function Soil() {
  const waterLink = "https://www.thespruce.com/how-to-water-plants-1402106";
  const mulchLink = "https://www.thespruce.com/what-is-mulch-1402413";
  const crystalsLink =
    "https://www.rhs.org.uk/soil-composts-mulches/water-retaining-granules";
  const climateLink =
    "https://www.trustbasket.com/blogs/how-to-grow/how-to-select-plants-according-to-your-climate";
  const soilLink =
    "https://www.growveg.com/guides/how-to-improve-your-soil-for-better-harvests/";
  const irrigationLink =
    "https://www.newhomesource.com/learn/pros-and-cons-of-installing-a-sprinkler-system/";

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="container">
      <div className="row">
      <div>
      <a class="btn btn-primary mt-5" style={{ float: "right" }} href="MalaSoil" >Malayalam</a>
      </div>
      <p class="h1 text-center mt-5">Soil Care Tips</p>
        <div className="col-md-6 col-lg-4 mb-4 mt-5">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">Water your plants deeply</h4>
              <p className="card-text">
                Make sure to water your plants deeply and thoroughly, as this
                will help the water to penetrate deeper into the soil and reach
                the roots. Watering deeply also encourages the roots to grow
                deeper, which can help the plant become more resilient to
                drought.
              </p>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => openLink(waterLink)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mt-5">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">Mulch</h4>
              <p className="card-text">
                Mulching around your plants can help to retain moisture in the
                soil by reducing water evaporation from the soil surface. Apply
                a layer of organic material such as bark chips, straw, or
                shredded leaves around your plants.
              </p>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => openLink(mulchLink)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mt-5">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">Use water-retaining crystals</h4>
              <p className="card-text">
                Water-retaining crystals, also known as hydrogels, can help to
                retain moisture in the soil. These crystals absorb water and
                then release it slowly over time, providing a consistent source
                of moisture for your plants.
              </p>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => openLink(crystalsLink)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mt-5">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">
                Choose plants that are well-suited to your climate
              </h4>
              <p className="card-text">
                Choosing plants that are well-suited to your climate can help to
                ensure that they are able to tolerate periods of drought or low
                moisture. Look for plants that are native to your area or that
                are known to be drought-tolerant.
              </p>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => openLink(climateLink)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mt-5">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">Improve your soil structure</h4>
              <p className="card-text">
                Adding organic matter such as compost or aged manure to your
                soil can help to improve its structure and water-holding
                capacity. Organic matter also helps to improve soil fertility
                and can provide a range of nutrients to your plants.
              </p>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => openLink(soilLink)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mt-5">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">
                Consider installing an irrigation system
              </h4>
              <p className="card-text">
                If you have a large garden or live in an area with a
                particularly dry climate, you may want to consider installing an
                irrigation system. This can help to ensure that your plants
                receive a consistent source of moisture, even during periods of
                drought.
              </p>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => openLink(irrigationLink)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soil;
