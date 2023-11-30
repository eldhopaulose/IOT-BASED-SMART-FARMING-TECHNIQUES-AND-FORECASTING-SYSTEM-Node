import React from 'react'

function MalaN() {
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
          <p class="h1 text-center mt-5">Deficiency of N </p>
          <div className="col-md-6 col-lg-4 mb-4 mt-3">
            <div className="card h-100 mt-5">
              <div className="card-body">
                <h4 className="card-title">വളപ്രയോഗം ഒപ്റ്റിമൈസ് ചെയ്യുക</h4>
                <p className="card-text">
                കർഷകർ ശരിയായ സമയത്തും ശരിയായ അളവിലും രാസവളങ്ങൾ പ്രയോഗിക്കണം, അതേസമയം വിളകളുടെ വളർച്ച ഒപ്റ്റിമൈസ് ചെയ്യണം, അതേസമയം ഒഴുക്ക് അല്ലെങ്കിൽ ലീച്ചിംഗ് വഴി നൈട്രജൻ നഷ്ടം കുറയ്ക്കുക. നൈട്രജൻ ഉപയോഗക്ഷമത മെച്ചപ്പെടുത്തുന്നതിനും സ്പ്ലിറ്റ് ആപ്ലിക്കേഷൻ ഉപയോഗിക്കാം.
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
                <h4 className="card-title">നൈട്രജൻ കാര്യക്ഷമമായ വിളകൾ ഉപയോഗിക്കുക</h4>
                <p className="card-text">
                കർഷകർക്ക് ഉയർന്ന വിളവ് ലഭിക്കുന്നതിന് നൈട്രജൻ കാര്യക്ഷമമായ വിളകളോ കുറഞ്ഞ നൈട്രജൻ വളം ആവശ്യമുള്ള ഇനങ്ങളോ തിരഞ്ഞെടുക്കാം.
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
                വിളകൾ ഭ്രമണം ചെയ്യുന്നത് കീടങ്ങളുടെയും രോഗങ്ങളുടെയും വളർച്ച കുറയ്ക്കാനും മണ്ണിന്റെ ആരോഗ്യവും ഫലഭൂയിഷ്ഠതയും മെച്ചപ്പെടുത്താനും നൈട്രജൻ വളത്തിന്റെ ആവശ്യകത കുറയ്ക്കാനും സഹായിക്കും.
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
                <h4 className="card-title">വളപ്രയോഗം ക്രമീകരിക്കുക</h4>
                <p className="card-text">
                കർഷകർ അവരുടെ വിളകളുടെ പോഷക ആവശ്യകതകളും മണ്ണിലെ പോഷകത്തിന്റെ അളവും അടിസ്ഥാനമാക്കി വളപ്രയോഗ നിരക്ക് ക്രമീകരിക്കണം. മണ്ണിലെ ഉയർന്ന നൈട്രജന്റെ അളവ് കുറഞ്ഞ നൈട്രജൻ വളം ആവശ്യമാണെന്ന് സൂചിപ്പിക്കാം.
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
                സാവധാനത്തിൽ പ്രകാശനം ചെയ്യുന്ന രാസവളങ്ങൾ വിളകൾക്ക് നൈട്രജൻ കൂടുതൽ സുസ്ഥിരമായി നൽകാനും നൈട്രജൻ ചോർന്നൊലിക്കുന്നതിനോ ഒഴുകുന്നതിനോ ഉള്ള സാധ്യത കുറയ്ക്കും.
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
                <h4 className="card-title">നൈട്രജൻ ഇൻഹിബിറ്ററുകൾ ഉപയോഗിക്കുക</h4>
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

export default MalaN