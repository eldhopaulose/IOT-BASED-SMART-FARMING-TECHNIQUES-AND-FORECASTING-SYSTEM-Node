import React from 'react'

function MalaP() {
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
        </div>
          <p class="h1 text-center mt-5">Deficiency of P </p>
          <div className="col-md-6 col-lg-4 mb-4 mt-3">
            <div className="card h-100 mt-5">
              <div className="card-body">
                <h4 className="card-title">വളപ്രയോഗം ക്രമീകരിക്കുക</h4>
                <p className="card-text">
                കർഷകർ അവരുടെ വിളകളുടെ പോഷക ആവശ്യകതകളും മണ്ണിലെ പോഷകത്തിന്റെ അളവും അടിസ്ഥാനമാക്കി വളപ്രയോഗ നിരക്ക് ക്രമീകരിക്കണം. മണ്ണിലെ ഉയർന്ന ഫോസ്ഫറസ് അളവ് കുറഞ്ഞ ഫോസ്ഫറസ് വളം ആവശ്യമാണെന്ന് സൂചിപ്പിക്കാം.
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
                <h4 className="card-title">ഫോസ്ഫറസ് കാര്യക്ഷമമായ വിളകൾ ഉപയോഗിക്കുക</h4>
                <p className="card-text">
                വിളകൾ ഭ്രമണം ചെയ്യുന്നത് കീടങ്ങളുടെയും രോഗങ്ങളുടെയും വളർച്ച കുറയ്ക്കാനും മണ്ണിന്റെ ആരോഗ്യവും ഫലഭൂയിഷ്ഠതയും മെച്ചപ്പെടുത്താനും ഫോസ്ഫറസ് വളത്തിന്റെ ആവശ്യകത കുറയ്ക്കാനും സഹായിക്കും.
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
                <h4 className="card-title">വിള ഭ്രമണം</h4>
                <p className="card-text">
                ഫോസ്ഫറസിന്റെ പ്രകാശനം മന്ദഗതിയിലാക്കാനും ഫോസ്ഫറസ് നഷ്ടപ്പെടാനുള്ള സാധ്യത കുറയ്ക്കാനും വളത്തിൽ ഫോസ്ഫറസ് ഇൻഹിബിറ്ററുകൾ ചേർക്കാം.
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
                <h4 className="card-title">വളപ്രയോഗം ക്രമീകരിക്കുക</h4>
                <p className="card-text">
                കർഷകർ അവരുടെ വിളകളുടെ പോഷക ആവശ്യകതകളും മണ്ണിലെ പോഷകത്തിന്റെ അളവും അടിസ്ഥാനമാക്കി വളപ്രയോഗ നിരക്ക് ക്രമീകരിക്കണം. മണ്ണിലെ ഉയർന്ന ഫോസ്ഫറസ് അളവ് കുറഞ്ഞ ഫോസ്ഫറസ് വളം ആവശ്യമാണെന്ന് സൂചിപ്പിക്കാം.
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
                <h4 className="card-title">സാവധാനത്തിലുള്ള രാസവളങ്ങൾ ഉപയോഗിക്കുക</h4>
                <p className="card-text">
                സാവധാനത്തിൽ പുറന്തള്ളുന്ന രാസവളങ്ങൾക്ക് വിളകൾക്ക് കൂടുതൽ സുസ്ഥിരമായ ഫോസ്ഫറസ് നൽകാനും ഫോസ്ഫറസ് ചോർന്നൊലിക്കുന്നതിനോ ഒഴുകുന്നതിനോ ഉള്ള സാധ്യത കുറയ്ക്കും.
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
                <h4 className="card-title">ഫോസ്ഫറസ് ഇൻഹിബിറ്ററുകൾ ഉപയോഗിക്കുക</h4>
                <p className="card-text">
                നൈട്രജന്റെ പ്രകാശനം മന്ദഗതിയിലാക്കാനും നൈട്രജൻ നഷ്ടപ്പെടാനുള്ള സാധ്യത കുറയ്ക്കാനും വളത്തിൽ നൈട്രജൻ ഇൻഹിബിറ്ററുകൾ ചേർക്കാം.
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

export default MalaP