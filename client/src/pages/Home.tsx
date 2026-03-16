import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Heart, Sparkles, MessageCircle, MapPin, Mail, Phone, ExternalLink, Globe } from "lucide-react";
import { useEffect } from "react";

/**
 * Marii Brow Studio - Nettside Komplett
 * Innhold: 100% Norsk | Farger: Pastel (Rose, Emerald, Amber)
 * Funksjoner: Chat, Reservasjon, Etterbehandling, Fotos fra original site, Seksjon "Om Meg"
 */

export default function Home() {
  useEffect(() => {
    // Laster Tawk.to chat widget
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/5f7b2b6e4a7c6e5c5c5c5c5c/1e5f5f5f5";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-rose-100 to-amber-50 border-b border-rose-200 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-rose-700" />
              <h1 className="text-xl font-bold text-rose-900">MARII BROW STUDIO</h1>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#om-meg" className="text-rose-900 hover:text-rose-700 transition-colors">Om meg</a>
            <a href="#tjenester" className="text-rose-900 hover:text-rose-700 transition-colors">Tjenester</a>
            <a href="#prisliste" className="text-rose-900 hover:text-rose-700 transition-colors">Prisliste</a>
            <a href="#instagram" className="text-rose-900 hover:text-rose-700 transition-colors">Galleri</a>
            <a href="#resenas" className="text-rose-900 hover:text-rose-700 transition-colors">Anmeldelser</a>
            <a href="#faq" className="text-rose-900 hover:text-rose-700 transition-colors">Spørsmål og svar</a>
            <a href="#kontakt" className="text-rose-900 hover:text-rose-700 transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50 via-white to-white py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6 leading-tight">
                Velkommen til MARII BROW STUDIO
              </h2>
              <p className="text-lg text-rose-800 mb-4 leading-relaxed">
                Mitt navn er María M. L. Martínez. Jeg er spesialist innen brynsdesign, vippeløft, brynslaminering og permanent makeup, med erfaring i bransjen siden 2016.
              </p>
              <p className="text-base text-rose-700 mb-8 leading-relaxed">
                Med representantstatus i Agder har jeg gjennomført omfattende opplæring hos flere anerkjente aktører i bransjen, blant annet InLei, Byuti Academy, HiBrow, Katya Vinog, Lash Mother Uli, Baltic Brows og BrowXenna. Jeg var tidligere instruktør ved Byuti Academy, og har i dag utviklet egne kurs basert på min erfaring og faglige utvikling gjennom mange år i faget.
              </p>
              <p className="text-base text-rose-700 mb-8 leading-relaxed">
                Jeg er opptatt av presisjon i detaljene, faglig kvalitet og en balansert estetisk forståelse. Gjennom arbeidet mitt har jeg etter hvert blitt godt kjent på Sørlandet. Mitt mål er å fremheve din naturlige skjønnhet gjennom skreddersydde behandlinger og høy faglig kompetanse.

Velkommen til en behandling hvor presisjon, estetikk og personlig tilpasning står i fokus. 🌿
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://bestill.timma.no/marii-brow-studio" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-rose-700 hover:bg-rose-800 text-white">
                    Bestill Time <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <Button variant="outline" className="border-rose-700 text-rose-700 hover:bg-rose-50">
                  Kurs
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://static.wixstatic.com/media/e1b4f4_8f35a120f5b249a0a5e470d6f7a4bb2b~mv2.jpeg/v1/crop/x_0,y_68,w_1815,h_2150/fill/w_500,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6559_VSCO_edited.jpeg"
                alt="María - Spesialist innen brynsdesign"
                className="rounded-full shadow-lg w-full h-auto border-8 border-rose-100"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-md border-2 border-rose-200">
                <p className="text-sm font-semibold text-rose-900">María M. L. Martínez</p>
                <p className="text-xs text-rose-700">Kristiansand, Norge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Om Meg Section */}
      <section id="om-meg" className="py-20 bg-gradient-to-b from-white via-rose-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">
              Om meg
            </h3>
            <p className="text-rose-800 max-w-2xl mx-auto text-lg">
              Jeg legger stor vekt på å fremheve den naturlige skjønnheten hos hver enkelt kunde, med nøye oppmerksomhet på detaljer og en estetisk helhet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg border-2 border-rose-200">
                <h4 className="text-xl font-bold text-rose-900 mb-3">Min filosofi</h4>
               <p className="text-rose-800 mb-4 leading-relaxed">
                Hver behandling tilpasses individuelt til <span className="font-semibold">din</span> unike ansiktsstruktur og preferanser, snarere enn å anvende en standardisert tilnærming. Jeg spesialiserer meg i å identifisere og fremheve de subtile, estetiske detaljer som definerer naturlig skjønnhet.
              </p>
              </div>

              <div className="p-6 bg-white rounded-lg border-2 border-emerald-200">
                <h4 className="text-xl font-bold text-rose-900 mb-3">Det mest givende</h4>
                <p className="text-rose-800 mb-4 leading-relaxed">
                  Øyeblikket når jeg presenterer resultatet og ser din tilfredshet, er noe av det mest meningsfulle ved arbeidet mitt. Jeg legger stor omtanke og faglig innsats i hver behandling, fordi jeg vet hvor viktig resultatet er for deg. Din tilbakemelding betyr derfor mye.
              </p>            </div>

              <div className="p-6 bg-white rounded-lg border-2 border-amber-200">
                <h4 className="text-xl font-bold text-rose-900 mb-3">Tilnærming</h4>
              <p className="text-rose-800 leading-relaxed">
                  Min interesse for psykologi og menneskelig atferd har gitt meg verdifull innsikt i individuelle preferanser, kommunikasjon og personlige behov. 

Denne forståelsen hjelper meg å tilpasse behandlingen til hver enkelt kunde. Jeg kommuniserer gjerne under behandlingen, men respekterer også dine grenser og legger til rette for en rolig og profesjonell atmosfære dersom du foretrekker det.
              </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-rose-50 to-amber-50 border-2 border-rose-200">
                <h4 className="text-2xl font-bold text-rose-900 mb-6">Min historie</h4>
                <div className="space-y-4 text-rose-800">
                  <p>
                    Jeg er opprinnelig fra Barcelona og flyttet til Kristiansand som 17-åring. Min flerkulturelle bakgrunn har gitt meg en stor interesse for språk, mennesker og ulike kulturer.
                  </p>
                  <p>
                    Jeg arbeidet tidligere fra Huset i Markens, hvor jeg leide behandlingsrom. Etter at jeg fikk barn, valgte jeg å etablere mitt eget studio på Hånes. Studioet ligger ved siden av hjemmet mitt, men er et separat og dedikert behandlingslokale. Denne muligheten hadde ikke vært mulig uten tilliten og støtten fra mine kunder.
                  </p>
                  <p>
                    <span className="font-semibold">Familie:</span> Jeg bor sammen med min mann, datter og to katter (snart tre! 😸).
                  </p>
                  <p>
                    <span className="font-semibold">Faglig utvikling:</span> Jeg oppdaterer jevnlig min kompetanse gjennom kurs og videreutdanning for å følge utviklingen i bransjen. Nøyaktighet og fokus på detaljer står sentralt i arbeidet mitt.
                  </p>
                  <p className="italic text-rose-700">
                    Fun fact: Jeg er Skorpion, men jeg overlater tolkningen til astrologene 
🤪
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-rose-50 border-2 border-emerald-200">
                <h4 className="text-lg font-bold text-rose-900 mb-4">Språk & kultur</h4>
                <div className="flex flex-wrap gap-2">
                  {['Norsk', 'Spansk', 'Engelsk', 'Russisk', 'Katalansk'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-white rounded-full text-sm font-semibold text-rose-900 border border-rose-200">
                      {lang}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reseñas de Google */}
      <section id="resenas" className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">Kundenes Erfaringer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-rose-700 mb-4 leading-relaxed italic text-sm">
                "Maria er varm, gjestfri, selvsikker, smilende og interessert i kundene sine. Hun tar deg gjennom hele prosessen grundig."
              </p>
              <p className="font-semibold text-rose-900">Emilie Marken</p>
              <p className="text-xs text-rose-600">Google Reviews</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-rose-700 mb-4 leading-relaxed italic text-sm">
                "Maria er en utrolig dyktig og nøye brynspesilalist. Jeg har vært kunde i flere år og har vært like fornøyd hver gang."
              </p>
              <p className="font-semibold text-rose-900">Christine</p>
              <p className="text-xs text-rose-600">Google Reviews</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-rose-700 mb-4 leading-relaxed italic text-sm">
                "Etter å ha vært usikker i flere år på permanent makeup, valgte jeg Maria og jeg angrer ikke for en sekund!"
              </p>
              <p className="font-semibold text-rose-900">Kine Iversen</p>
              <p className="text-xs text-rose-600">Google Reviews</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-rose-700 mb-4 leading-relaxed italic text-sm">
                "Jeg kunne ikke være mer fornøyd! Hun er presis, en perfeksjonist og genuint interessert i at kunden er fornøyd."
              </p>
              <p className="font-semibold text-rose-900">Linn Egeland</p>
              <p className="text-xs text-rose-600">Google Reviews</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-rose-700 mb-4 leading-relaxed italic text-sm">
                "Ville anbefale henne varmt. Profesjonalitet i hvert trinn, nøye hygiene og utrolig dyktig. Det skinner gjennom at hun elsker det hun gjør."
              </p>
              <p className="font-semibold text-rose-900">Heidi Skreå Aanundsen</p>
              <p className="text-xs text-rose-600">Google Reviews</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-rose-700 mb-4 leading-relaxed italic text-sm">
                "Kan virkelig anbefale å gå til Maria! Jeg fikk permanent eyeliner og er veldig fornøyd. Hun er varm og ærlig om hva du kan forvente."
              </p>
              <p className="font-semibold text-rose-900">SYLVIA</p>
              <p className="text-xs text-rose-600">Google Reviews</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-rose-700 mb-4 leading-relaxed italic text-sm">
                "Jeg er veldig fornøyd med Korean Lash Lift-kurset! Instruktøren har mye kunnskap og deler den på en oppriktig og engasjerende måte."
              </p>
              <p className="font-semibold text-rose-900">Sabina Grudzien</p>
              <p className="text-xs text-rose-600">Google Reviews</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-rose-700 mb-4 leading-relaxed italic text-sm">
                "Jeg tok et kurs på Marii Brow Studio og er så utrolig fornøyd! Marii er varm, tålmodig og utrolig dyktig i sitt yrke."
              </p>
              <p className="font-semibold text-rose-900">Muyesser Telet</p>
              <p className="text-xs text-rose-600">Google Reviews</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-rose-700 mb-4 leading-relaxed italic text-sm">
                "Jeg er så veldig fornøyd med resultatet av mitt vippeløft! Hver gang jeg er så glad at jeg ikke kan holde meg stille."
              </p>
              <p className="font-semibold text-rose-900">Angelina Fomina</p>
              <p className="text-xs text-rose-600">Google Reviews</p>
            </div>

            <div className="bg-white rounded-lg border-2 border-rose-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-rose-700 mb-4 leading-relaxed italic text-sm">
                "Jeg er så utrolig fornøyd med resultatene av både vippeløftet og permanent makeup! Veldig profesjonelt håndverk og super hygiene."
              </p>
              <p className="font-semibold text-rose-900">Evgenia Ivanova</p>
              <p className="text-xs text-rose-600">Google Reviews</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/maps/place/MARII+BROW+STUDIO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Se alle Google-anmeldelser
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Tjenester Section */}
      <section id="tjenester" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">
              Behandlinger & Spesialisering
            </h3>
            <p className="text-rose-800 max-w-2xl mx-auto text-lg">
              Utvalg av profesjonelle behandlinger basert på de nyeste metodene og faglige standarder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Koreansk Vippeløft */}
            <Card className="overflow-hidden border-2 border-emerald-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-emerald-50 to-white">
              <div className="h-48 bg-gradient-to-br from-emerald-200 to-emerald-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://scontent-lga3-1.cdninstagram.com/v/t51.82787-15/645917000_18362238805206799_493066475738668538_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=3k9kV5C-Ts8Q7kNvwHq0IX9&_nc_oc=AdkWLUchywCAfna-vmonMmiXFW28pXHDqDIA-wGw11wFc1GcIIMx24fs8gwDpS5TcEE&_nc_zt=23&_nc_ht=scontent-lga3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=3qnUEt1n7uTZZ_NSmh0OHQ&_nc_tpa=Q5bMBQF2OEWtTcQo3V0p474Wv9umEnrsigmq8R18LGGdhcOCA_TP_ZqLl77TTEwpA2goqXtmVohG_FjK&oh=00_AfzAI_nPXVjbHMIYRGCSIV80WP2MX7HlU2kFwp2nTPrvEQ&oe=69B81963"
                  alt="Koreansk vippeløft"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-rose-900 mb-3">Koreansk Vippeløft</h4>
                <p className="text-rose-800 text-sm mb-4">
                  Avansert vippeløft basert på koreansk teknikk. Behandlingen løfter, krøller og farger vippene for et raffinert resultat. Varighet: 6-8 uker. Ideelt for naturlig og langvarig effekt.
                </p>
                <a href="https://bestill.timma.no/marii-brow-studio" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-rose-700 hover:bg-rose-800 text-white text-sm">
                    Bestill Nå
                  </Button>
                </a>
              </div>
            </Card>

            {/* Eyeliner */}
            <Card className="overflow-hidden border-2 border-rose-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-rose-50 to-white">
              <div className="h-48 bg-gradient-to-br from-rose-200 to-rose-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/e1b4f4_27103eba700c4b9f8c71bd55e521fbba~mv2.jpeg/v1/fit/w_600,h_400,q_90,enc_avif,quality_auto/e1b4f4_27103eba700c4b9f8c71bd55e521fbba~mv2.jpeg"
                  alt="Eyeliner Tatovering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-rose-900 mb-3">Eyeliner Tatovering</h4>
                <p className="text-rose-800 text-sm mb-4">
                  Semipermanent tatovering av eyeliner. Skånsom teknikk som sikrer naturlige, skreddersydde resultater. En langsiktig investering i skjønnhet.
                </p>
                <a href="https://bestill.timma.no/marii-brow-studio" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-rose-700 hover:bg-rose-800 text-white text-sm">
                    Bestill Nå
                  </Button>
                </a>
              </div>
            </Card>

            {/* Brow Henna */}
            <Card className="overflow-hidden border-2 border-amber-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-amber-50 to-white">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://scontent-lga3-2.cdninstagram.com/v/t51.82787-15/649250403_18363359248206799_4845262143076027023_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=yU1Tz5LM66AQ7kNvwHK5nsy&_nc_oc=AdmK2s9wBxKE6Pe9L6q4aWTqrDDUfy0FcmweTV5pQZtDu0_fuTm-bOiMuDlsjh1G_s0&_nc_zt=23&_nc_ht=scontent-lga3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=3qnUEt1n7uTZZ_NSmh0OHQ&_nc_tpa=Q5bMBQEB65XMyCcPM0PMEKNohz95gKWCtGIyijn-gTMVy2VkvADUmWQKcQS_hbfdYU-0JctpTVg5kAp6&oh=00_Afwre_Ol70DnKTdNCArL_cBeXRt4yR087JneM2GygORh8w&oe=69B82D9A"
                  alt="Brow Henna"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-rose-900 mb-3">Brow Henna</h4>
                <p className="text-rose-800 text-sm mb-4">
                  Naturlig hennafarging for bryn. Varighet: 2-3 uker. Fremhever den naturlige brynfargen med et mykt, naturlig utseende.
                </p>
                <a href="https://bestill.timma.no/marii-brow-studio" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-rose-700 hover:bg-rose-800 text-white text-sm">
                    Bestill Nå
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Brow Lami */}
          <Card className="overflow-hidden border-2 border-rose-200 bg-gradient-to-r from-rose-50 to-white p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-rose-900 mb-4">Brow Lami (Brynlaminering)</h4>
                <p className="text-rose-800 mb-4 leading-relaxed">
                  Brynslaminerering som gir løfteeffekt og struktur. Brynene blir glatte, definerte og fyldig. Varighet: 5-8 uker. Spesielt egnet for utfordrende brynhår.
                </p>
                <p className="text-rose-700 text-sm mb-6">
                  Utført med InLei eller Noemi, premium produkter. Gir langvarig, naturlig resultat.
                </p>
                <a href="https://bestill.timma.no/marii-brow-studio" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-rose-700 hover:bg-rose-800 text-white">
                    Bestill Nå
                  </Button>
                </a>
              </div>
              <img
                src="https://static.wixstatic.com/media/3d8d80_764d60735d2c4850879a8feddf0a21d4~mv2.png/v1/fill/w_600,h_450,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/3d8d80_764d60735d2c4850879a8feddf0a21d4~mv2.png"
                alt="Brow Laminering"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </Card>

          {/* PMU */}
          <Card className="overflow-hidden border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src="https://static.wixstatic.com/media/e1b4f4_27103eba700c4b9f8c71bd55e521fbba~mv2.jpeg/v1/fit/w_600,h_400,q_90,enc_avif,quality_auto/e1b4f4_27103eba700c4b9f8c71bd55e521fbba~mv2.jpeg"
                alt="PMU Mikropigmentering"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div>
                <h4 className="text-2xl font-bold text-rose-900 mb-4">Sesongens favoritt behandling: Ombré Powder Brows</h4>
                <p className="text-rose-800 mb-4 leading-relaxed">
                  Semipermanent tatovering av bryn. Skånsom teknikk som sikrer naturlige tilpasset resultater. Langtidsinvestering i skjønnhet.
                </p>
                <p className="text-rose-700 text-sm mb-6">
                  Med erfaring siden 2016 og bruk av de beste metodene og produktene. Resultater som opprettholder naturlig utseende uten sminke.
                </p>
                <div className="flex gap-4">
                  <a href="#faq" className="block">
                    <button className="px-6 py-2 bg-transparent border-2 border-rose-700 text-rose-700 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
                      Les mer
                    </button>
                  </a>
                  <a href="https://bestill.timma.no/marii-brow-studio" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-rose-700 hover:bg-rose-800 text-white">
                      Bestill nå
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Prisliste Section */}
      <section id="prisliste" className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">
              Prisliste
            </h3>
            <p className="text-rose-800 max-w-2xl mx-auto text-lg">
              Oppgitte priser er veiledende. Kontakt meg for konsultasjon.
            </p>
            <p className="text-sm text-rose-700 mt-4 italic">
              NB* Avbestillinger må skje innen 24 timer før avtalt time. Ellers belastes timen med 50%
            </p>
          </div>

          <div className="space-y-12">
            {/* Powder Brows */}
            <div className="bg-white rounded-lg border-2 border-rose-200 overflow-hidden">
              <div className="bg-gradient-to-r from-rose-100 to-amber-50 p-6 border-b-2 border-rose-200">
                <h4 className="text-2xl font-bold text-rose-900">Powder Brows</h4>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-rose-100">
                  <span className="text-rose-800 font-medium">Powder Brows (nytt sett)</span>
                  <span className="text-rose-900 font-bold text-lg">5500,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-rose-100">
                  <span className="text-rose-800 font-medium">Touch up etter 4-6 uker</span>
                  <span className="text-rose-900 font-bold text-lg">1500,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-rose-100">
                  <span className="text-rose-700 italic text-sm">*Rekomandert for best resultat</span>
                  <span></span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-rose-100">
                  <span className="text-rose-800 font-medium">Express påfyll (6-7 måneder)</span>
                  <span className="text-rose-900 font-bold text-lg">1500,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-rose-100">
                  <span className="text-rose-800 font-medium">Påfyll innen 12 måneder</span>
                  <span className="text-rose-900 font-bold text-lg">2500,-</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-rose-800 font-medium">Påfyll innen 2 år</span>
                  <span className="text-rose-900 font-bold text-lg">3500,-</span>
                </div>
              </div>
            </div>

            {/* Eyeliner */}
            <div className="bg-white rounded-lg border-2 border-emerald-200 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-100 to-rose-50 p-6 border-b-2 border-emerald-200">
                <h4 className="text-2xl font-bold text-rose-900">Eyeliner</h4>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-emerald-100">
                  <span className="text-rose-800 font-medium">Klassisk Eyeliner (2 t)</span>
                  <span className="text-rose-900 font-bold text-lg">4850,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-emerald-100">
                  <span className="text-rose-800 font-medium">Lash Liner (1,5 t)</span>
                  <span className="text-rose-900 font-bold text-lg">3800,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-emerald-100">
                  <span className="text-rose-800 font-medium">Ekstra bredde (1,5 t)</span>
                  <span className="text-rose-900 font-bold text-lg">1500,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-emerald-100">
                  <span className="text-rose-800 font-medium">Shaded Eyeliner (2,5 t)</span>
                  <span className="text-rose-900 font-bold text-lg">5500,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-emerald-100">
                  <span className="text-rose-800 font-medium">Påfyll Eyeliner innen 5 år (2 t)</span>
                  <span className="text-rose-900 font-bold text-lg">2850,-</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-rose-700 font-medium">Konsultasjon fra</span>
                  <span className="text-rose-900 font-bold text-lg">300,-</span>
                </div>
              </div>
            </div>

            {/* Bryn & Vipper */}
            <div className="bg-white rounded-lg border-2 border-amber-200 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-100 to-rose-50 p-6 border-b-2 border-amber-200">
                <h4 className="text-2xl font-bold text-rose-900">Bryn & Vipper</h4>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <span className="text-rose-800 font-medium">Brynstyling m/ Brow Henna (1 t)</span>
                  <span className="text-rose-900 font-bold text-lg">699,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <span className="text-rose-800 font-medium">Brynstyling m/ farge (45 min)</span>
                  <span className="text-rose-900 font-bold text-lg">599,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <span className="text-rose-800 font-medium">Brynstyling uten farge (15 min)</span>
                  <span className="text-rose-900 font-bold text-lg">300,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <span className="text-rose-800 font-medium">Brynlaminering m/ InLei Brow Bomber (1,5 t)</span>
                  <span className="text-rose-900 font-bold text-lg">1000,-</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <span className="text-rose-800 font-medium">Koreansk Vippeløft (1,5 t)</span>
                  <span className="text-rose-900 font-bold text-lg">1050,-</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-rose-800 font-medium">Vippeløft m/ InLei Lash Filler (1,5 t)</span>
                  <span className="text-rose-900 font-bold text-lg">1050,-</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://bestill.timma.no/marii-brow-studio" target="_blank" rel="noopener noreferrer">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white text-lg px-8 py-6">
                Bestill Time <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Etterbehandling Powder Brows Section */}
      <section id="etterbehandling-powder" className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-rose-900 mb-12 text-center">
            Etterbehandling Powder Brows
          </h3>
          <p className="text-center text-rose-800 mb-12 max-w-3xl mx-auto text-lg">
            Riktig etterbehandling er essensielt for å oppnå og opprettholde optimale resultater fra din Powder Brows behandling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-2xl font-bold text-rose-900 mb-6">De Første 24 Timene</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700">
                  <h5 className="font-semibold text-rose-900 mb-2">❌ Hold brynene tørre</h5>
                  <p className="text-rose-800 text-sm">Brynene kan renses forsiktig samme dag, gjerne før leggetid. Unngå damp, badstue og andre aktiviteter som skaper varme eller fuktighet de første 24 timene.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700">
                  <h5 className="font-semibold text-rose-900 mb-2">❌ Ingen sminke eller sterke produkter</h5>
                  <p className="text-rose-800 text-sm">La området være helt rent og uten produkter. Dette sikrer optimal tilheling.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700">
                  <h5 className="font-semibold text-rose-900 mb-2">❌ Unngå trening</h5>
                  <p className="text-rose-800 text-sm">Unngå trening, yoga og andre aktiviteter som kan føre til svette i løpet av de første 24 t</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700">
                  <h5 className="font-semibold text-rose-900 mb-2">✅ Bruk vaselin</h5>
                  <p className="text-rose-800 text-sm">Påfør gjerne et tynt lag vaselin på området ved behov.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-rose-900 mb-6">Ukene Etter Behandling</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700">
                  <h5 className="font-semibold text-rose-900 mb-2">💧 Mild Rengjøring</h5>
                  <p className="text-rose-800 text-sm">Etter dag 3–4 kan du vaske området forsiktig med lunkent vann og mild såpe. Unngå å skrubbe, og IKKE plukk på skorper, da dette kan påvirke resultatet.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700">
                  <h5 className="font-semibold text-rose-900 mb-2">🧴 Fuktighetspleie</h5>
                  <p className="text-rose-800 text-sm">Bruk mild fuktighetskrem. Huden trenger ekstra pleie under healing.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700">
                  <h5 className="font-semibold text-rose-900 mb-2">☀️ Solbeskyttelse</h5>
                  <p className="text-rose-800 text-sm">Bruk SPF 30+ når du er ute. Sol kan påvirke fargen og tilhelings prosessen.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700">
                  <h5 className="font-semibold text-rose-900 mb-2">❌ Unngå bading, badstue og damp</h5>
                  <p className="text-rose-800 text-sm">Unngå klor og salt vann i minst 2 uker etter behandling.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-rose-100 to-amber-50 border-2 border-rose-200">
            <h4 className="text-xl font-bold text-rose-900 mb-4">Hva Er Normalt Under Healing?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-rose-900 mb-2">✅ Normalt:</h5>
                <ul className="text-sm text-rose-800 space-y-2">
                  <li>• Liten kløe eller ubehag</li>
                  <li>• Lett svelling dag 1-2</li>
                  <li>• Skorping/flaking dag 5-10</li>
                  <li>• Fargen blir lysere under healing</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-rose-900 mb-2">⚠️ Kontakt Meg Hvis:</h5>
                <ul className="text-sm text-rose-800 space-y-2">
                  <li>• Sterkt svelling eller rødhet</li>
                  <li>• Tegn på infeksjon</li>
                  <li>• Alvorlig kløe eller smerte</li>
                  <li>• Uvanlig fargendring</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-rose-800 mb-6 text-lg">
              Har du spørsmål om etterbehandling? Kontakt meg via chat eller email!
            </p>
            <Button className="bg-rose-700 hover:bg-rose-800 text-white text-lg px-8 py-6">
              <MessageCircle className="mr-2 w-5 h-5" />
              Chat Med Meg
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4 text-center">Spørsmål og Svar</h2>
          <p className="text-center text-rose-700 mb-12 text-lg">Svar på de vanligste spørsmålene</p>
          
          <Tabs defaultValue="faq1" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 gap-2 mb-8 bg-transparent">
              <TabsTrigger value="faq1" className="bg-rose-100 text-rose-900 data-[state=active]:bg-rose-600 data-[state=active]:text-white">Powder Brows</TabsTrigger>
              <TabsTrigger value="faq2" className="bg-rose-100 text-rose-900 data-[state=active]:bg-rose-600 data-[state=active]:text-white">Vippeløft</TabsTrigger>
              <TabsTrigger value="faq3" className="bg-rose-100 text-rose-900 data-[state=active]:bg-rose-600 data-[state=active]:text-white">Generelt</TabsTrigger>
              <TabsTrigger value="faq4" className="bg-rose-100 text-rose-900 data-[state=active]:bg-rose-600 data-[state=active]:text-white">Kurs</TabsTrigger>
            </TabsList>

            {/* Powder Brows FAQ */}
            <TabsContent value="faq1" className="space-y-4">
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hvor lenge varer Powder Brows-behandlingen?</h3>
                <p className="text-rose-700 leading-relaxed">Powder Brows-behandlingen varer omtrent 2-3 timer. Dette inkluderer konsultasjon, personalisert design, behandlingsapplikasjon og instruksjoner for etterbehandling.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hvor lenge varer resultatene?</h3>
                <p className="text-rose-700 leading-relaxed">Powder Brows varer mellom 1,5 til 3 år, avhengig av hudtype og etterbehandling. Vi anbefaler touch-up etter 4-6 uker for å perfeksjonere resultatet.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Gjør det vondt?</h3>
                <p className="text-rose-700 leading-relaxed">Prosedyren er minimalt invasiv. Vi bruker topisk anestesi for å sikre din komfort. De fleste klientene rapporterer en smertefri og avslappende opplevelse.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hva er etterbehandlingsinstruksjonene?</h3>
                <p className="text-rose-700 leading-relaxed">Det er viktig å unngå vann, svette og sminke i 7-10 dager. Ikke berør eller kløp på det behandlede området. Påfør den medfølgende helingskrem 2-3 ganger daglig. Unngå direkte soleksponering i 2 uker.</p>
              </Card>
            </TabsContent>

            {/* Vippeløft FAQ */}
            <TabsContent value="faq2" className="space-y-4">
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hva er koreansk vippeløft?</h3>
                <p className="text-rose-700 leading-relaxed">Koreansk vippeløft er en avansert teknikk som løfter og krøller naturlige vipper fra roten. Det gir effekten av lengre og mer åpne vipper uten behov for extensions.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hvor lenge varer vippeløftet?</h3>
                <p className="text-rose-700 leading-relaxed">Behandlingen varer omtrent 45-60 minutter. Resultatene varer 6-8 uker, avhengig av naturlig vippevekst.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Er det trygt for alle vipper?</h3>
                <p className="text-rose-700 leading-relaxed">Ja, koreansk vippeløft er trygt for de fleste. Hvis du har skjøre vipper eller øyefølsomhet, anbefaler vi en forhåndskonsultasjon.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Kan jeg kombinere vippeløft med andre behandlinger?</h3>
                <p className="text-rose-700 leading-relaxed">Ja, vippeløft kombineres perfekt med vippefargning for en enda mer dramatisk effekt. Vi anbefaler å gjøre det samme dag for optimale resultater.</p>
              </Card>
            </TabsContent>

            {/* Generelt FAQ */}
            <TabsContent value="faq3" className="space-y-4">
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hva er din arbeidsfilosofi?</h3>
                <p className="text-rose-700 leading-relaxed">Min tilnærming er å raffinere og understreke den naturlige skjønnheten til hver klient. Jeg personaliserer hver behandling etter dine unike karakteristikker, i stedet for å tilpasse personen til behandlingen. Hvert ansikt er annerledes og fortjener eksklusiv oppmerksomhet.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hva er din erfaring?</h3>
                <p className="text-rose-700 leading-relaxed">Jeg har jobbet i denne industrien siden 2016. Jeg har fullført opplæring fra anerkjente institusjoner som InLei, Byuti Academy, HiBrow, Katya Vinog og BrowXenna. Jeg er sertifisert instruktør i koreansk vippeløft og oppdaterer kontinuerlig kunnskapen min.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hvordan er studiomiljøet?</h3>
                <p className="text-rose-700 leading-relaxed">Studioet er designet for å være et varmt, gjestfritt og profesjonelt rom. Jeg er pratsam, men jeg vet også hvordan jeg skal lese luften og gi plass hvis du foretrekker en mer avslappende opplevelse. Din komfort er min prioritet.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Godtar du nye kunder?</h3>
                <p className="text-rose-700 leading-relaxed">Ja! Jeg er alltid åpen for nye kunder. Du kan reservere timen din gjennom mitt online reservasjonssystem eller kontakte meg direkte. Jeg anbefaler å reservere på forhånd, da mine tider fylles raskt.</p>
              </Card>
            </TabsContent>

            {/* Kurs FAQ */}
            <TabsContent value="faq4" className="space-y-4">
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hvilke kurs tilbyr du?</h3>
                <p className="text-rose-700 leading-relaxed">Jeg tilbyr spesialiserte kurs i: Powder Brows, Brow Henna, Brow Laminering og Koreansk Vippeløft. Hvert kurs inkluderer teori, praksis og sertifisering. Alle kurs tilpasses studentens erfaringsnivå.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hvor lenge varer kursene?</h3>
                <p className="text-rose-700 leading-relaxed">Varigheten varierer etter kurs: Powder Brows (3 dager), Brow Henna (1 dag), Brow Laminering (2 dager), Koreansk Vippeløft (2 dager). Vi tilbyr intensive kurs og kurs med fleksible tider.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Hva inkluderer kurset?</h3>
                <p className="text-rose-700 leading-relaxed">Cada curso incluye: materiales de calidad profesional, manual del estudiante, práctica supervisada, retroalimentación personalizada, certificado de finalización y acceso a grupo privado de estudiantes para soporte continuo.</p>
              </Card>
              
              <Card className="border-2 border-rose-200 p-6">
                <h3 className="font-bold text-rose-900 mb-3 text-lg">Trenger jeg tidligere erfaring?</h3>
                <p className="text-rose-700 leading-relaxed">Du trenger ikke tidligere erfaring. Jeg tilpasser kursene for nybegynnere og profesjonelle. Det er imidlertid viktig å ha lidenskap for skjønnhetsarbeid og vilje til å lære presise teknikker.</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section id="instagram" className="py-20 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4 text-center">Instagram-Galleri</h2>
          <p className="text-center text-rose-700 mb-12 text-lg">Følg mitt arbeid i sanntid</p>
          
          {/* Instagram Feed Embed */}
          <div className="flex justify-center">
            <iframe 
              src="https://www.instagram.com/marii.brow.studio/embed" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              scrolling="no" 
              className="rounded-lg"
            />
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://instagram.com/marii.brow.studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Se mer på Instagram
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-rose-900 mb-12 text-center">
            Kontakt
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-white text-center">
              <Mail className="w-8 h-8 text-rose-700 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-rose-900 mb-2">E-post</h4>
              <p className="text-rose-800">info@marii-brow-studio.no</p>
            </Card>

            <Card className="p-8 border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-white text-center">
              <MapPin className="w-8 h-8 text-rose-700 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-rose-900 mb-2">Lokasjon</h4>
              <p className="text-rose-800">Kristiansand, Norge</p>
            </Card>

            <Card className="p-8 border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-white text-center">
              <Sparkles className="w-8 h-8 text-rose-700 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-rose-900 mb-2">Sosiale Medier</h4>
              <p className="text-rose-800">@marii.brow.studio</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-rose-800 mb-6 text-lg">
              Har du spørsmål? Bruk chatten nedenfor eller kontakt meg direkte!
            </p>
            <Button className="bg-rose-700 hover:bg-rose-800 text-white text-lg px-8 py-6">
              <MessageCircle className="mr-2 w-5 h-5" />
              Åpne Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-900 to-rose-800 text-white py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">MARII BROW STUDIO</h4>
              <ul className="space-y-2 text-sm text-rose-100">
                <li><a href="#om-meg" className="hover:text-white transition">Om Meg</a></li>
                <li><a href="#tjenester" className="hover:text-white transition">Tjenester</a></li>
                <li><a href="#prisliste" className="hover:text-white transition">Prisliste</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Tjenester</h4>
              <ul className="space-y-2 text-sm text-rose-100">
                <li><a href="#tjenester" className="hover:text-white transition">Powder Brows</a></li>
                <li><a href="#tjenester" className="hover:text-white transition">Brow Henna</a></li>
                <li><a href="#tjenester" className="hover:text-white transition">Brow Lami</a></li>
                <li><a href="#tjenester" className="hover:text-white transition">Koreansk Vippeløft</a></li>
                <li><a href="#tjenester" className="hover:text-white transition">Kurs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Informasjon</h4>
              <ul className="space-y-2 text-sm text-rose-100">
                <li><a href="#om-meg" className="hover:text-white transition">Om Meg</a></li>
                <li><a href="#etterbehandling-powder" className="hover:text-white transition">Etterbehandling</a></li>
                <li><a href="#kontakt" className="hover:text-white transition">Kontakt</a></li>
                <li><a href="https://instagram.com/marii.brow.studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
                <li><a href="https://bestill.timma.no/marii-brow-studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Bestill Time</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Kontakt</h4>
              <p className="text-sm text-rose-100 mb-2">info@marii-brow-studio.no</p>
              <p className="text-sm text-rose-100 mb-2">+47 40 32 53 24</p>
              <p className="text-sm text-rose-100">Kristiansand, Norge</p>
            </div>
          </div>
          <div className="border-t border-rose-800 pt-8 text-center text-sm text-rose-100">
            <p>
              © 2026 MARII BROW STUDIO. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
