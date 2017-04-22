import React from 'react';
import FontAwesome from 'react-fontawesome';
import ScrollReveal from 'scrollreveal';
import SmoothScroll from 'smooth-scroll';
import classNames from 'classnames';
import { browserHistory } from 'react-router';

import logo from 'img/appyard-logo-white.png';
import aas from 'img/aas.png';
import askim from 'img/askim.png';
import eidsberg from 'img/eidsberg.png';
import fjell from 'img/fjell.png';
import halden from 'img/halden.png';
import hobol from 'img/hobol.png';
import kongsberg from 'img/kongsberg.png';
import lenvik from 'img/lenvik.png';
import spydeberg from 'img/spydeberg.png';
import technopolis from 'img/technopolis.png';
import traena from 'img/traena.png';
import sc1 from 'img/sc1.png';
import sc2 from 'img/sc2.png';
import sc3 from 'img/sc3.png';
import sc4 from 'img/sc4.png';
import sc5 from 'img/sc5.png';
import cms from 'img/cms.png';

import Carousel from './components/Carousel';
import GoogleMaps from './components/GoogleMaps';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: false
    };
    this.handleLocation = this.handleLocation.bind(this);
    this.handleLocation(props);
  }
  componentDidMount() {
    const sr = ScrollReveal({ delay: 250 });
    sr.reveal('.fadeInDown', { origin: 'top' });
    sr.reveal('.fadeInUp', { origin: 'bottom' });
    sr.reveal('.fadeInRight', { origin: 'left' });
    sr.reveal('.fadeInLeft', { origin: 'right' });
    sr.reveal('.fadeIn');
    SmoothScroll.init({ updateURL: false });
  }
  componentWillReceiveProps(nextProps) {
    this.handleLocation(nextProps);
  }
  handleLocation(props) {
    if (props.location.hash === '#takk') {
      this.setState({
        showNotification: true
      });
      setTimeout(() => {
        this.setState({
          showNotification: false
        });
      }, 5000);
      browserHistory.replace('/');
    }
    if (props.location.hash === '#lesmer') {
      browserHistory.replace('/');
    }
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
                <img src={logo} alt="Appyard logo" className="Intro-logo" />
                <div className="Intro-text fadeInUp">
                  Målrettet styring av informasjon til dine brukere og målgruppe.<br />En egen mobilapplikasjon for din organisasjon.
                </div>
                <a data-scroll id="more" href="#lesmer" className="Intro-button fadeInDown">Les mer</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Info" id="lesmer">
          <div className="Section-content-box">
            <div className="row">
              <div className="col-sm-offset-4 col-sm-8 col-lg-7 col-lg-offset-5 fadeInRight">
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
              <div className="col-sm-4 col-xs-12 fadeIn">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="apple" />
                  <FontAwesome className="Perks-item-icon" name="android" />
                  <h2 className="Perks-item-header">Tilgjengelighet</h2>
                  <div className="Perks-item-text">
                    En helt egen native app tilgjengelig i både Apple App Store og Google Play Store
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 fadeIn">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="bell-o" />
                  <h2 className="Perks-item-header">Pushmelding</h2>
                  <div className="Perks-item-text">
                    Pushmeldinger til brukerne tilknyttet nyheter, tilbud, varslinger o.l.
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 fadeIn">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="envelope-o" />
                  <h2 className="Perks-item-header">Rett informasjon til rett person</h2>
                  <div className="Perks-item-text">
                    La brukerne selv velge hva de vil abonnere på av nyheter
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 fadeIn">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="globe" />
                  <h2 className="Perks-item-header">Globale meldinger</h2>
                  <div className="Perks-item-text">
                    Lag nyheter som alle brukerne vil få
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 fadeIn">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="desktop" />
                  <h2 className="Perks-item-header">CMS</h2>
                  <div className="Perks-item-text">
                    Egen, intuitiv CMS-portal for administrering av appen
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 fadeIn">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="paint-brush" />
                  <h2 className="Perks-item-header">Tilpasset</h2>
                  <div className="Perks-item-text">
                    App satt opp i din organisasjons profil
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 fadeIn">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="refresh" />
                  <h2 className="Perks-item-header">Automatisk oppdatering</h2>
                  <div className="Perks-item-text">
                    Når det publiseres nytt innhold, vil appen oppdateres automatisk
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 fadeIn">
                <div className="Perks-item">
                  <FontAwesome className="Perks-item-icon" name="bluetooth-b" />
                  <h2 className="Perks-item-header">Beaconintegrasjon</h2>
                  <div className="Perks-item-text">
                    Automatisere informasjonsspredningen i lokalområder med beacons
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 fadeIn">
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
        <div className="Section-content Customers">
          <div className="Section-content-box">
            <h1 className="Customers-section-header">Kundeomtale</h1>
            <div className="row">
              <div className="col-sm-6 col-xs-12 fadeIn">
                <div className="Customers-quote">
                  <p>Askim kommune har brukt Notify fra Appyard siden mai 2015 og er svært fornøyd med appen.</p>
                  <p>Notify gir oss muligheten til å skreddersy informasjon og nyheter til ulike målgrupper. Dette har dermed blitt en pushkanal som vi bruker ofte, og den er et verdifullt tilskudd til våre andre mer tradisjonelle kanaler, som nettsider og sosiale medier.</p>
                  <p>Vi føler oss også vel ivaretatt av Appyard. De har vist seg å gi god brukerstøtte, og de satser på utvikling av ny funksjonalitet og videreutvikling av produktet, noe som er viktig for oss som kunde.</p>
                  <div className="Customers-quote-from">&mdash;Kirsti Nebbenes, Askim kommune.</div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12 fadeIn">
                <div className="Customers-quote">
                  <p>Det er enkelt å bruke, det er kjapt og det er genialt. Denne appen bør alle Haldensere ha på mobilen. Dette er fremtiden!</p>
                  <div className="Customers-quote-from">&mdash;Martin Vik, Halden kommune.</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={askim} />
                  Askim kommune
                </div>
              </div>
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={eidsberg} />
                  Eidsberg kommune
                </div>
              </div>
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={fjell} />
                  Fjell kommune
                </div>
              </div>
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={halden} />
                  Halden kommune
                </div>
              </div>
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={hobol} />
                  Hobøl kommune
                </div>
              </div>
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={kongsberg} />
                  Kongsberg kommune
                </div>
              </div>
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={lenvik} />
                  Lenvik kommune
                </div>
              </div>
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={spydeberg} />
                  Spydeberg kommune
                </div>
              </div>
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={traena} />
                  Træna kommune
                </div>
              </div>
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={aas} />
                  Ås kommune
                </div>
              </div>
              <div className="col-sm-3 col-xs-4 fadeInDown">
                <div className="Customers-item">
                  <img className="Customers-item-img" src={technopolis} />
                  Technopolis
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
              <div className="col-md-8 fadeInUp">
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
              <div className="col-sm-6 Process-item-placeholder fadeInRight">
                <FontAwesome className="Process-item-icon" name="users" />
              </div>
              <div className="col-sm-6 fadeInLeft">
                <div className="Process-item">
                  <h2 className="Process-item-header">Dag 1</h2>
                  <span className="Process-item-text">
                    Vi gjennomfører en kort workshop med dere hvor vi bestemmer oss for oppsett og bruk av applikasjonen, hvem som skal være redaktør etc.
                  </span>
                </div>
              </div>
              <div className="col-sm-6 Process-item-placeholder fadeInRight">
                <FontAwesome className="Process-item-icon" name="file-image-o" />
              </div>
              <div className="col-sm-6 fadeInLeft">
                <div className="Process-item">
                  <h2 className="Process-item-header">Dag 2</h2>
                  <span className="Process-item-text">
                    Dere sender oss deres profilhåndbok og bilder, slik at vi kan skreddersy applikasjonen for dere.
                  </span>
                </div>
              </div>
              <div className="col-sm-6 Process-item-placeholder fadeInRight">
                <FontAwesome className="Process-item-icon" name="pencil-square-o" />
              </div>
              <div className="col-sm-6 fadeIn">
                <div className="Process-item">
                  <h2 className="Process-item-header">Dag 3 &ndash; 5</h2>
                  <span className="Process-item-text">
                    Vi lager et forslag til hvordan applikasjonen skal se ut. Vi jobber med dette til dere er fornøyd.
                  </span>
                </div>
              </div>
              <div className="col-sm-6 Process-item-placeholder fadeInRight">
                <FontAwesome className="Process-item-icon" name="cogs" />
              </div>
              <div className="col-sm-6 fadeIn">
                <div className="Process-item">
                  <h2 className="Process-item-header">Dag 6</h2>
                  <span className="Process-item-text">
                    Applikasjonen settes i produksjon, hvor den blir sendt til <strong>Apple</strong> og <strong>Google</strong> for godkjenning.
                  </span>
                </div>
              </div>
              <div className="col-sm-6 Process-item-placeholder fadeInRight">
                <FontAwesome className="Process-item-icon" name="download" />
              </div>
              <div className="col-sm-6 fadeIn">
                <div className="Process-item">
                  <h2 className="Process-item-header">Dag 17</h2>
                  <span className="Process-item-text">
                    Appen er klar for nedlasting før dere rekker å si <strong>epostutsendelsesskrivefeil</strong>.
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
            <Carousel className="Image-list fadeInUp">
              <div className="Images-list-item"><img className="Images-img" src={sc1} /></div>
              <div className="Images-list-item"><img className="Images-img" src={sc2} /></div>
              <div className="Images-list-item"><img className="Images-img" src={sc3} /></div>
              <div className="Images-list-item"><img className="Images-img" src={sc4} /></div>
              <div className="Images-list-item"><img className="Images-img" src={sc5} /></div>
              <div className="Images-list-item"><img className="Images-img" src={cms} /></div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Contact" id="contact">
          <div className="Section-content-box">
            <h1 className="Contact-section-header fadeInUp">Er dette noe du kunne tenke deg?<br />Kontakt oss i dag!</h1>

            <p className="Contact-text">Legg igjen din epost eller telefonnummer så kontakter vi deg med et uforpliktende tilbud.</p>
            <form id="form" className="Contact-form" method="post" action="//formspree.io/michael@appyard.no">
              <input className="Contact-form-input" name="kontakt-info" id="text" type="text" placeholder="Epost eller telefonnummer" defaultValue="" required />
              <input className="Contact-form-input-alt" name="_subject" value="Jeg vil gjerne bli kontaktet" readOnly />
              <input className="Contact-form-input-alt" name="_next" value="/#takk" readOnly />
              <input className="Contact-form-input-alt" name="_gotcha" value="" readOnly />
              <button id="kontaktmeg" className="Contact-form-button pure-button" type="submit">Kontakt meg</button>
            </form>

            <div className="Contact-social">
              <p>Du finner oss også på sosiale medier</p>
              <a id="facebook" className="Contact-social-badge" href="https://www.facebook.com/pages/Appyard/380568655456149" target="_blank" rel="noopener noreferrer">
                <FontAwesome className="fadeInDown" name="facebook-square" />
              </a>
              <a id="linkedin" className="Contact-social-badge" href="https://www.linkedin.com/company/appyard-as?trk=company_logo" target="_blank" rel="noopener noreferrer">
                <FontAwesome className="fadeInDown" name="linkedin-square" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="Section">
        <div className="Section-content Map">
          <div className="Map-contactBox fadeInDown">
            <h1 className="Map-contactBox-header">Kontor</h1>
            <p className="Map-contactBox-text">Martin Lingesvei 25<br />1364 Fornebu</p>
          </div>
          <GoogleMaps />
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
