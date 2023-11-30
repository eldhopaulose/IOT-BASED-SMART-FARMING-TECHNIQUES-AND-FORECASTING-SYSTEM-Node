import React from 'react'

function MalaSoil() {
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
        <p class="h1 text-center mt-5">Soil Care Tips</p>
          <div className="col-md-6 col-lg-4 mb-4 mt-5">
            <div className="card h-100 mt-5">
              <div className="card-body">
                <h4 className="card-title">നിങ്ങളുടെ ചെടികൾക്ക് ആഴത്തിൽ നനയ്ക്കുക</h4>
                <p className="card-text">
                നിങ്ങളുടെ ചെടികൾക്ക് ആഴത്തിലും നന്നായി നനയ്ക്കുന്നത് ഉറപ്പാക്കുക
                  വെള്ളം മണ്ണിലേക്ക് ആഴത്തിൽ തുളച്ചുകയറാനും എത്തിച്ചേരാനും സഹായിക്കും
                  വേരുകൾ. ആഴത്തിൽ നനയ്ക്കുന്നതും വേരുകൾ വളരാൻ പ്രോത്സാഹിപ്പിക്കുന്നു
                  ആഴത്തിൽ, ഇത് ചെടിയെ കൂടുതൽ പ്രതിരോധശേഷിയുള്ളതാക്കാൻ സഹായിക്കും
                  വരൾച്ച.
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
                <h4 className="card-title">പുതയിടൽ</h4>
                <p className="card-text">
                ചെടികൾക്ക് ചുറ്റും പുതയിടുന്നത് ഈർപ്പം നിലനിർത്താൻ സഹായിക്കും
                  മണ്ണിന്റെ ഉപരിതലത്തിൽ നിന്നുള്ള ജല ബാഷ്പീകരണം കുറയ്ക്കുന്നതിലൂടെ മണ്ണ്. അപേക്ഷിക്കുക
                  പുറംതൊലി ചിപ്സ്, വൈക്കോൽ അല്ലെങ്കിൽ പോലെയുള്ള ജൈവ വസ്തുക്കളുടെ ഒരു പാളി
                  നിങ്ങളുടെ ചെടികൾക്ക് ചുറ്റും കീറിയ ഇലകൾ.
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
                <h4 className="card-title">വെള്ളം നിലനിർത്തുന്ന പരലുകൾ ഉപയോഗിക്കുക</h4>
                <p className="card-text">
                ഹൈഡ്രോജലുകൾ എന്നും അറിയപ്പെടുന്ന വെള്ളം നിലനിർത്തുന്ന പരലുകൾ സഹായിക്കും
                  മണ്ണിൽ ഈർപ്പം നിലനിർത്തുക. ഈ പരലുകൾ വെള്ളം ആഗിരണം ചെയ്യുകയും ചെയ്യുന്നു
                  പിന്നീട് സ്ഥിരമായ ഒരു ഉറവിടം നൽകിക്കൊണ്ട് കാലക്രമേണ അത് സാവധാനത്തിൽ വിടുക
                  നിങ്ങളുടെ ചെടികൾക്ക് ഈർപ്പം.
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
                നിങ്ങളുടെ കാലാവസ്ഥയ്ക്ക് അനുയോജ്യമായ സസ്യങ്ങൾ തിരഞ്ഞെടുക്കുക
                </h4>
                <p className="card-text">
                നിങ്ങളുടെ കാലാവസ്ഥയ്ക്ക് അനുയോജ്യമായ സസ്യങ്ങൾ തിരഞ്ഞെടുക്കുന്നത് സഹായിക്കും
                  വരൾച്ചയുടെ അല്ലെങ്കിൽ താഴ്ന്ന കാലഘട്ടങ്ങളെ സഹിക്കാൻ അവർക്ക് കഴിയുമെന്ന് ഉറപ്പാക്കുക
                  ഈർപ്പം. നിങ്ങളുടെ പ്രദേശത്തോ അതിലോ ഉള്ളതോ ആയ സസ്യങ്ങൾ നോക്കുക
                  വരൾച്ചയെ അതിജീവിക്കുന്നവയാണ്.
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
                <h4 className="card-title">നിങ്ങളുടെ മണ്ണിന്റെ ഘടന മെച്ചപ്പെടുത്തുക</h4>
                <p className="card-text">
                കമ്പോസ്റ്റ് അല്ലെങ്കിൽ പഴകിയ വളം പോലെയുള്ള ജൈവവസ്തുക്കൾ നിങ്ങളിലേക്ക് ചേർക്കുന്നു
                  മണ്ണ് അതിന്റെ ഘടന മെച്ചപ്പെടുത്താനും ജലം നിലനിർത്താനും സഹായിക്കും
                  ശേഷി. മണ്ണിന്റെ ഫലഭൂയിഷ്ഠത മെച്ചപ്പെടുത്തുന്നതിനും ജൈവവസ്തുക്കൾ സഹായിക്കുന്നു
                  നിങ്ങളുടെ ചെടികൾക്ക് പോഷകങ്ങളുടെ ഒരു ശ്രേണി നൽകാൻ കഴിയും.
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
                ഒരു ജലസേചന സംവിധാനം സ്ഥാപിക്കുന്നത് പരിഗണിക്കുക
                </h4>
                <p className="card-text">
                നിങ്ങൾക്ക് ഒരു വലിയ പൂന്തോട്ടമുണ്ടെങ്കിൽ അല്ലെങ്കിൽ ഒരു പ്രദേശത്ത് താമസിക്കുന്നുണ്ടെങ്കിൽ
                  പ്രത്യേകിച്ച് വരണ്ട കാലാവസ്ഥ, നിങ്ങൾ ഒരു ഇൻസ്റ്റാൾ പരിഗണിക്കാൻ താൽപ്പര്യപ്പെട്ടേക്കാം
                  ജലസേചന സംവിധാനം. നിങ്ങളുടെ സസ്യങ്ങൾ ഉറപ്പാക്കാൻ ഇത് സഹായിക്കും
                  ഈ കാലയളവിൽ പോലും ഈർപ്പത്തിന്റെ സ്ഥിരമായ ഉറവിടം സ്വീകരിക്കുക
                  വരൾച്ച.
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

export default MalaSoil