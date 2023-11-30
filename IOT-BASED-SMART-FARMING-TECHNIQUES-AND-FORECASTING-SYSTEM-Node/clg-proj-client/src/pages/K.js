import React from 'react'

function K() {
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
          <a class="btn btn-primary mt-5" style={{ float: "right" }} href="MalaK" >Malayalam</a>
        </div>
        <p class="h1 text-center mt-5">Deficiency of K </p>
        <div className="col-md-6 col-lg-4 mb-4 mt-3">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">Optimize fertilizer application</h4>
              <p className="card-text">
                Farmers should apply fertilizers at the right time and in the right amounts to optimize crop growth while minimizing potassium loss through runoff or leaching. Split application can also be used to improve potassium use efficiency.
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
              <h4 className="card-title">Use potassium-efficient crops</h4>
              <p className="card-text">
                Farmers can choose potassium-efficient crops or varieties that require less potassium fertilizer to produce high yields.
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
                Rotating crops can help reduce the buildup of pests and diseases, improve soil health and fertility, and reduce the need for potassium fertilizer
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
          High K
        </p>
        <div className="col-md-6 col-lg-4 mb-4 mt-3">
          <div className="card h-100 mt-5">
            <div className="card-body">
              <h4 className="card-title">Adjust fertilizer application</h4>
              <p className="card-text">
                Farmers should adjust their fertilizer application rates based on the nutrient requirements of their crops and the nutrient levels in their soil. High potassium levels in the soil may indicate that less potassium fertilizer is needed.
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
              <h4 className="card-title">Use fertilizers with balanced nutrients</h4>
              <p className="card-text">
                Farmers can use fertilizers that provide a balanced mix of nutrients to avoid overloading the soil with excess potassium.
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
              <h4 className="card-title">Use potassium antagonists</h4>
              <p className="card-text">
                Certain elements, such as calcium and magnesium, can help reduce the negative effects of high potassium levels in the soil. Farmers can use fertilizers that contain these elements or add them separately to their soil to balance out excess potassium.
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

export default K