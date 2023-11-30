import React from "react";
import { Outlet } from "react-router-dom";

function Ph() {
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
      <a class="btn btn-primary mt-5" style={{ float: "right" }} href="MalapH" >Malayalam</a>
      </div>
        <p class="h1 text-center mt-5">Deficiency of pH </p>
        <div className="col-md-6 col-lg-4 mb-4 mt-3">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">Lime</h4>
              <p className="card-text">
                This is a commonly used pH increaser that is made from calcium
                carbonate. It can help to raise the pH level and also provide
                calcium to the plants.
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
              <h4 className="card-title">Potassium hydroxide</h4>
              <p className="card-text">
                This is a strong alkaline solution that can quickly raise the pH
                level in a cultivation system.
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
              <h4 className="card-title">Sodium bicarbonate</h4>
              <p className="card-text">
                This is a more mild pH increaser that can be used to slowly
                raise the pH level over time.
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
        High pH
        </p>
        <div className="col-md-6 col-lg-4 mb-4 mt-3">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">Sulfuric acid</h4>
              <p className="card-text">
                This is a strong acid that can effectively lower the pH level in
                a cultivation system. However, it must be used with caution, as
                it can be dangerous if not handled properly.
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
              <h4 className="card-title">Phosphoric acid</h4>
              <p className="card-text">
                This is a milder acid that can also be used to lower the pH
                level. It's often used in hydroponic systems, as it can also
                provide phosphorus to the plants.
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
              <h4 className="card-title">Vinegar</h4>
              <p className="card-text">
                This is a more natural and mild acid that can be used to lower
                the pH level in smaller cultivation systems.
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
  );
}

export default Ph;
