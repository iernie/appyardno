import React from 'react';
import FontAwesome from 'react-fontawesome';
import ScrollReveal from 'scrollreveal';
import SmoothScroll from 'smooth-scroll';
import classNames from 'classnames';
import { browserHistory } from 'react-router';
import Carousel from './components/carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: props.location.hash === '#takk'
    };
    if (props.location.hash === '#takk') {
      setTimeout(() => {
        this.setState({
          showNotification: false
        });
        browserHistory.replace('/');
      }, 5000);
    }
  }
  componentDidMount() {
    const sr = ScrollReveal();
    sr.reveal('.fadeInDown, .bounceInDown', { delay: 250, origin: 'top' });
    sr.reveal('.fadeInUp, .bounceInUp', { delay: 250, origin: 'bottom' });
    sr.reveal('.fadeInRight, .bounceInRight', { delay: 250, origin: 'left' });
    sr.reveal('.fadeInLeft, .bounceInLeft', { delay: 250, origin: 'right' });
    sr.reveal('.fadeIn', { delay: 250 });
    SmoothScroll.init({ updateURL: false });
  }
  render() {
    const notificationClass = classNames({
      'Notification': true,
      'Notification--visible': this.state.showNotification
    });
    return (<span>
      <section className="Section Section--noclip">
        <div className="Section-content Intro">
          <div className="Section-content-box">
            <div className="row">
              <div className="col-md">
                <img src="static/img/appyard-logo-white.png" alt="Appyard logo" className="Intro-logo" />
                <div className="Intro-text wow fadeInUp">
                  Målrettet styring av informasjon til dine brukere og målgruppe. En egen mobilapplikasjon for din organisasjon.
                </div>
                <a data-scroll id="kontakt" href="#contact" className="Intro-button wow fadeInDown">Kontakt</a>
                <a data-scroll id="lesmer" href="#more" className="Intro-button wow fadeInDown">Les mer</a>
                <img src="static/img/intro.png" alt="Intro bilde" className="Intro-img wow bounceInUp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Info" id="more">
          <div className="Section-content-box">
            <div className="row">
              <div className="col-sm-offset-4 col-sm-8 col-lg-6 col-lg-offset-6 wow fadeInRight">
                <h1 className="Info-section-header">
                  <span>Visste du at 88% av mobilbrukere bruker apps?</span>
                </h1>
                <div className="Info-text">
                  En vanlig mobilbruker ser på telefonen sin 150 ganger uten av de har mottatt eller sendt en melding.
                </div>
                <div className="Info-text">
                  Appyard Notify er en fleksibel og skalèrbar app-plattform som er spesielt egnet for organisasjoner som har behov for å distribuere informasjon til sine medlemmer, kunder, innbyggere eller studenter.
                </div>
                <div className="Info-text">
                  Notify tilpasses din organisasjon med eget app-ikon, farger og ikoner i app samt en egen publiseringsportal, hvor man enkelt kan publisere nyheter.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Perks">
          <div className="Section-content-box">
            <h1 className="Perks-section-header">Fordeler</h1>
            <div className="row">
              <div className="col-sm-4 col-xs-12 wow fadeIn" data-wow-delay="0.1s">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="apple" />
                  <FontAwesome className="Perks-item-icon" name="android" />
                  <h2 className="Perks-item-header">Tilgjengelighet</h2>
                  <div className="Perks-item-text">
                    En helt egen native app tilgjengelig i både Apple App Store og Google Play Store
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 wow fadeIn" data-wow-delay="0.2s">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="bell-o" />
                  <h2 className="Perks-item-header">Pushmelding</h2>
                  <div className="Perks-item-text">
                    Pushmeldinger til brukerne tilknyttet nyheter, tilbud, varslinger o.l.
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 wow fadeIn" data-wow-delay="0.3s">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="envelope-o" />
                  <h2 className="Perks-item-header">Rett informasjon til rett person</h2>
                  <div className="Perks-item-text">
                    La brukerne selv velge hva de vil abonnere på av nyheter
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 wow fadeIn" data-wow-delay="0.4s">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="globe" />
                  <h2 className="Perks-item-header">Globale meldinger</h2>
                  <div className="Perks-item-text">
                    Lag nyheter som alle brukerne vil få
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 wow fadeIn" data-wow-delay="0.5s">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="desktop" />
                  <h2 className="Perks-item-header">CMS</h2>
                  <div className="Perks-item-text">
                    Egen, intuitiv CMS-portal for administrering av appen
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 wow fadeIn" data-wow-delay="0.6s">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="paint-brush" />
                  <h2 className="Perks-item-header">Tilpasset</h2>
                  <div className="Perks-item-text">
                    App satt opp i din organisasjons profil
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 wow fadeIn" data-wow-delay="0.7s">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="refresh" />
                  <h2 className="Perks-item-header">Automatisk oppdatering</h2>
                  <div className="Perks-item-text">
                    Når det publiseres nytt innhold, vil appen oppdateres automatisk
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 wow fadeIn" data-wow-delay="0.8s">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="bluetooth-b" />
                  <h2 className="Perks-item-header">Beaconintegrasjon</h2>
                  <div className="Perks-item-text">
                    Automatisere informasjonsspredningen i lokalområder med beacons
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 wow fadeIn" data-wow-delay="0.9s">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="rocket" />
                  <h2 className="Perks-item-header">Enkelt</h2>
                  <div className="Perks-item-text">
                    Appyard håndterer all kommunikasjon med Apple og Google. Ingen opplæring nødvendig!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Beacons">
          <div className="Section-content-box">
            <div className="row">
              <div className="col-md-8 wow fadeInUp">
                <h1 className="Beacons-section-header"><span>Proximity Information - Beacons</span></h1>
                <div className="Beacons-text"><strong>Proximity Information</strong> eller <strong>Informasjon i nærheten</strong> er et konsept som består av Notify applikasjon og beaconteknologi.</div>
                <div className="Beacons-text">Proximity Information er et konsept som sørger for at man får informasjon tilsendt som en pushmelding på sin mobil avhengig av hvor man befinner seg i et bymiljø eller andre lokasjoner.</div>
                <div className="Beacons-text">Dersom man for eksempel befinner seg i nærheten av en kino, kan man få tilsendt dagens filmer, pris og kanskje en rabattkupong på popcorn direkte til sin mobiltelefon.<br /><strong>Fiffig, ikke sant?</strong></div>
                <div className="Beacons-text">Alle applikasjoner fra Appyard blir levert <strong>ferdig integrert</strong> med beacons!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Process">
          <div className="Section-content-box">
            <h1 className="Process-section-header">Prosessen</h1>
            <div className="row middle-xs reverse">
              <div className="col-sm-6 Process-item-placeholder wow fadeInRight" data-wow-delay="0.2s">
                <FontAwesome className="Process-item-icon" name="users" />
              </div>
              <div className="col-sm-6 wow fadeInLeft" data-wow-delay="0.1s">
                <div className="Process-item">
                  <h2 className="Process-item-header">Dag 1</h2>
                  <span className="Process-item-text">
                    Vi gjennomfører en kort workshop med dere hvor vi bestemmer oss for oppsett og bruk av applikasjonen, hvem som skal være redaktør etc.
                  </span>
                </div>
              </div>
              <div className="col-sm-6 Process-item-placeholder wow fadeInRight" data-wow-delay="0.4s">
                <FontAwesome className="Process-item-icon" name="file-image-o" />
              </div>
              <div className="col-sm-6 wow fadeInLeft" data-wow-delay="0.3s">
                <div className="Process-item">
                  <h2 className="Process-item-header">Dag 2</h2>
                  <span className="Process-item-text">
                    Dere sender oss deres profilhåndbok og bilder, slik at vi kan skreddersy applikasjonen for dere.
                  </span>
                </div>
              </div>
              <div className="col-sm-6 Process-item-placeholder wow fadeInRight" data-wow-delay="0.6s">
                <FontAwesome className="Process-item-icon" name="pencil-square-o" />
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="Process-item">
                  <h2 className="Process-item-header">Dag 3 &ndash; 5</h2>
                  <span className="Process-item-text">
                    Vi lager et forslag til hvordan applikasjonen skal se ut. Vi jobber med dette til dere er fornøyd.
                  </span>
                </div>
              </div>
              <div className="col-sm-6 Process-item-placeholder wow fadeInRight" data-wow-delay="0.8s">
                <FontAwesome className="Process-item-icon" name="cogs" />
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                <div className="Process-item">
                  <h2 className="Process-item-header">Dag 6</h2>
                  <span className="Process-item-text">
                    Applikasjonen settes i produksjon, hvor den blir sendt til
                    <strong>Apple</strong>
                    og
                    <strong>Google</strong>
                    for godkjenning.
                  </span>
                </div>
              </div>
              <div className="col-sm-6 Process-item-placeholder wow fadeInRight" data-wow-delay="1s">
                <FontAwesome className="Process-item-icon" name="download" />
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.9s">
                <div className="Process-item">
                  <h2 className="Process-item-header">Dag 17</h2>
                  <span className="Process-item-text">
                    Appen er klar for nedlasting før dere rekker å si
                    <strong>epostutsendelsesskrivefeil</strong>.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Images">
          <div className="Section-content-box">
            <h1 className="Images-section-header">Skjermbilder</h1>
            <Carousel className="Image-list wow fadeInUp">
              <div className="Images-list-item"><img className="Images-img" src="static/img/gallery.png" /></div>
              <div className="Images-list-item"><img className="Images-img" src="static/img/cms.png" /></div>
              <div className="Images-list-item"><img className="Images-img" src="static/img/sc1.png" /></div>
              <div className="Images-list-item"><img className="Images-img" src="static/img/sc2.png" /></div>
              <div className="Images-list-item"><img className="Images-img" src="static/img/sc3.png" /></div>
              <div className="Images-list-item"><img className="Images-img" src="static/img/sc4.png" /></div>
              <div className="Images-list-item"><img className="Images-img" src="static/img/sc5.png" /></div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Demo">
          <div className="Section-content-box">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="Demo-section-header">
                  <span>Ikke overbevist?<br />Prøv selv!</span>
                </h1>
                <div className="Demo-text">Nedenfor kan du laste ned demo-appen vår til iOS og Android</div>
                <a id="ios" href="https://itunes.apple.com/no/app/appyard/id970118800" target="_blank" rel="noopener noreferrer"><img className="Demo-link wow fadeInDown" data-wow-delay="0.1s" src="static/img/appstore.png" /></a>
                <a id="android" href="https://play.google.com/store/apps/details?id=no.appyard.appyard" target="_blank" rel="noopener noreferrer"><img className="Demo-link wow fadeInDown" data-wow-delay="0.2s" src="static/img/playstore.png" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Contact" id="contact">
          <div className="Section-content-box">
            <h1 className="Contact-section-header wow fadeInUp">Er dette noe du kunne tenke deg?<br />Kontakt oss i dag!</h1>

            <p className="Contact-text">Legg igjen din epost eller telefonnummer så kontakter vi deg med et uforpliktende tilbud.</p>
            <form id="form" className="Contact-form" method="post" action="//formspree.io/einar@appyard.no">
              <input className="Contact-form-input" name="kontakt-info" id="text" type="text" placeholder="Epost eller telefonnummer" defaultValue="" required />
              <input className="Contact-form-input-alt" name="_subject" value="Jeg vil gjerne bli kontaktet" readOnly />
              <input className="Contact-form-input-alt" name="_next" value="/#takk" readOnly />
              <input className="Contact-form-input-alt" name="_gotcha" value="" readOnly />
              <button id="kontaktmeg" className="Contact-form-button pure-button" type="submit">Kontakt meg</button>
            </form>

            <div className="Contact-social">
              <p>Du finner oss også på sosiale medier</p>
              <a id="facebook" className="Contact-social-badge" href="https://www.facebook.com/pages/Appyard/380568655456149" target="_blank" rel="noopener noreferrer">
                <FontAwesome className="wow fadeInDown" data-wow-delay="0.1s" name="facebook-square" />
              </a>
              <a id="linkedin" className="Contact-social-badge" href="https://www.linkedin.com/company/appyard-as?trk=company_logo" target="_blank" rel="noopener noreferrer">
                <FontAwesome className="wow fadeInDown" data-wow-delay="0.2s" name="linkedin-square" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Map">
          <div className="Map-contactBox wow bounceInDown" data-wow-offset="10">
            <h1 className="Map-contactBox-header">Kontor</h1>
            <p className="Map-contactBox-text">Martin Lingesvei 25<br />1364 Fornebu</p>
          </div>
          <div id="Map" className="Map-item" />
        </div>
      </section>

      <div className={notificationClass}>
        Flott!<br />Vi kommer til å kontakte deg så fort som mulig.
      </div>
    </span>);
  }
}

App.propTypes = {
  location: React.PropTypes.object
};

export default App;
