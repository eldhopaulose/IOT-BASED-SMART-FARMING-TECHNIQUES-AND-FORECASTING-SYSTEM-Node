import React from 'react'

function MalaK() {
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
          <p class="h1 text-center mt-5">Deficiency of K </p>
          <div className="col-md-6 col-lg-4 mb-4 mt-3">
            <div className="card h-100 mt-5">
              <div className="card-body">
                <h4 className="card-title">വളപ്രയോഗം ഒപ്റ്റിമൈസ് ചെയ്യുക</h4>
                <p className="card-text">
                കൃഷിക്കാർ ശരിയായ സമയത്തും ശരിയായ അളവിലും വളങ്ങൾ പ്രയോഗിക്കുകയും വിളകളുടെ വളർച്ച ഒപ്‌റ്റിമൈസുചെയ്യുകയും അതേസമയം ഒഴുക്ക് അല്ലെങ്കിൽ ലീച്ചിംഗ് വഴിയുള്ള പൊട്ടാസ്യം നഷ്ടം കുറയ്ക്കുകയും വേണം. പൊട്ടാസ്യം ഉപയോഗക്ഷമത മെച്ചപ്പെടുത്തുന്നതിനും സ്പ്ലിറ്റ് ആപ്ലിക്കേഷൻ ഉപയോഗിക്കാം.
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
                <h4 className="card-title">പൊട്ടാസ്യം-കാര്യക്ഷമമായ വിളകൾ ഉപയോഗിക്കുക</h4>
                <p className="card-text">
                കർഷകർക്ക് ഉയർന്ന വിളവ് ലഭിക്കുന്നതിന് പൊട്ടാസ്യം കാര്യക്ഷമമായ വിളകളോ കുറഞ്ഞ പൊട്ടാസ്യം വളം ആവശ്യമുള്ള ഇനങ്ങളോ തിരഞ്ഞെടുക്കാം.
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
                വിളകൾ ഭ്രമണം ചെയ്യുന്നത് കീടങ്ങളുടെയും രോഗങ്ങളുടെയും വളർച്ച കുറയ്ക്കാനും മണ്ണിന്റെ ആരോഗ്യവും ഫലഭൂയിഷ്ഠതയും മെച്ചപ്പെടുത്താനും പൊട്ടാസ്യം വളത്തിന്റെ ആവശ്യകത കുറയ്ക്കാനും സഹായിക്കും.
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
                <h4 className="card-title">വളപ്രയോഗം ക്രമീകരിക്കുക</h4>
                <p className="card-text">
                കർഷകർ അവരുടെ വിളകളുടെ പോഷക ആവശ്യകതകളും മണ്ണിലെ പോഷകത്തിന്റെ അളവും അടിസ്ഥാനമാക്കി വളപ്രയോഗ നിരക്ക് ക്രമീകരിക്കണം. മണ്ണിലെ ഉയർന്ന പൊട്ടാസ്യം അളവ് കുറഞ്ഞ പൊട്ടാസ്യം വളം ആവശ്യമാണെന്ന് സൂചിപ്പിക്കാം.
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
                <h4 className="card-title">സമീകൃത പോഷകങ്ങളുള്ള വളങ്ങൾ ഉപയോഗിക്കുക</h4>
                <p className="card-text">
                അധിക പൊട്ടാസ്യം മണ്ണിൽ അമിതമായി ലോഡ് ചെയ്യാതിരിക്കാൻ പോഷകങ്ങളുടെ സമീകൃത മിശ്രിതം നൽകുന്ന വളങ്ങൾ കർഷകർക്ക് ഉപയോഗിക്കാം.
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
                <h4 className="card-title">പൊട്ടാസ്യം എതിരാളികൾ ഉപയോഗിക്കുക</h4>
                <p className="card-text">
                കാൽസ്യം, മഗ്നീഷ്യം തുടങ്ങിയ ചില മൂലകങ്ങൾ മണ്ണിലെ ഉയർന്ന പൊട്ടാസ്യത്തിന്റെ അളവ് കുറയ്ക്കാൻ സഹായിക്കും. അധിക പൊട്ടാസ്യം സന്തുലിതമാക്കാൻ കർഷകർക്ക് ഈ മൂലകങ്ങൾ അടങ്ങിയ വളങ്ങൾ ഉപയോഗിക്കാം അല്ലെങ്കിൽ അവയെ പ്രത്യേകം മണ്ണിൽ ചേർക്കാം.
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

export default MalaK