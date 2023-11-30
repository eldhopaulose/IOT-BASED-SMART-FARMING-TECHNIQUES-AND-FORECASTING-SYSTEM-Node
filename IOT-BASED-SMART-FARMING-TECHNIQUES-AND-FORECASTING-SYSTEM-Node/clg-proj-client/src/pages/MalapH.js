import React from 'react'
import { Outlet } from "react-router-dom";

function MalapH() {
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
      <p class="h1 text-center mt-5">Deficiency of pH </p>
      <div className="col-md-6 col-lg-4 mb-4 mt-3">
        <div className="card h-100 mt-5">
          <div className="card-body">
            <h4 className="card-title">കുമ്മയം</h4>
            <p className="card-text">
            ഇത് കാൽസ്യത്തിൽ നിന്ന് നിർമ്മിക്കുന്ന സാധാരണയായി ഉപയോഗിക്കുന്ന പിഎച്ച് വർദ്ധിപ്പിക്കൽ ആണ്
              കാർബണേറ്റ്. ഇത് pH ലെവൽ ഉയർത്താനും നൽകാനും സഹായിക്കും
              ചെടികൾക്ക് കാൽസ്യം.
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
            <h4 className="card-title">പൊട്ടാസ്യം ഹൈഡ്രോക്സൈഡ്</h4>
            <p className="card-text">
            ഇത് ശക്തമായ ആൽക്കലൈൻ ലായനിയാണ്, ഇത് വേഗത്തിൽ pH വർദ്ധിപ്പിക്കും
              ഒരു കൃഷി സമ്പ്രദായത്തിൽ ലെവൽ.
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
            <h4 className="card-title">അലക്കു കാരം</h4>
            <p className="card-text">
            ഇത് സാവധാനത്തിൽ ഉപയോഗിക്കാവുന്ന കൂടുതൽ നേരിയ പിഎച്ച് വർദ്ധിപ്പിക്കൽ ആണ്
              കാലക്രമേണ pH ലെവൽ ഉയർത്തുക.
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
            <h4 className="card-title">സൾഫ്യൂരിക് അമ്ലം</h4>
            <p className="card-text">
            പിഎച്ച് നില ഫലപ്രദമായി കുറയ്ക്കാൻ കഴിയുന്ന ശക്തമായ ആസിഡാണിത്
              ഒരു കൃഷി സമ്പ്രദായം. എന്നിരുന്നാലും, ഇത് ജാഗ്രതയോടെ ഉപയോഗിക്കണം, പോലെ
              ശരിയായി കൈകാര്യം ചെയ്തില്ലെങ്കിൽ അത് അപകടകരമാണ്.
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
            <h4 className="card-title">ഫോസ്ഫോറിക് ആസിഡ്</h4>
            <p className="card-text">
            ഇത് പിഎച്ച് കുറയ്ക്കാൻ ഉപയോഗിക്കാവുന്ന മൃദുവായ ആസിഡാണ്
              നില. ഇത് പലപ്പോഴും ഹൈഡ്രോപോണിക് സിസ്റ്റങ്ങളിൽ ഉപയോഗിക്കാറുണ്ട്
              ചെടികൾക്ക് ഫോസ്ഫറസ് നൽകുന്നു.
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
            <h4 className="card-title">വിനാഗിരി</h4>
            <p className="card-text">
            ഇത് കൂടുതൽ സ്വാഭാവികവും സൗമ്യവുമായ ആസിഡാണ്, ഇത് കുറയ്ക്കാൻ ഉപയോഗിക്കാം
              ചെറിയ കൃഷി സമ്പ്രദായങ്ങളിലെ pH നില.
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

export default MalapH