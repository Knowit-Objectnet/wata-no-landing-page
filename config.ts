import { enUS, nbNO } from '@mui/material/locale'

export const languages = [
  {
    value: 'no',
    label: 'Norsk',
    systemValue: nbNO,
  },
  {
    value: 'en',
    label: 'English',
    systemValue: enUS,
  },
]

const getEmployeeImagePath = (name: string) => {
  return `img/employees/JPEG/${name}.jpg`
}

export const employees = [
  {
    image: getEmployeeImagePath('gurrich'),
    name: 'Jonas Gürrich',
    title: 'product manager',
  },
  {
    image: getEmployeeImagePath('eirin'),
    name: 'Eirin Kalstø',
    title: 'Forretningsutvikler',
  },
  {
    image: getEmployeeImagePath('morten'),
    name: 'Morten Heggelund',
    title: 'Driftssjef',
  },
  {
    image: getEmployeeImagePath('jens'),
    name: 'Jens Markussen',
    title: 'Tech Lead',
  },
  {
    image: getEmployeeImagePath('erik'),
    name: 'Erik Dymbe',
    title: 'Utvikler',
  },
  {
    image: getEmployeeImagePath('christopher'),
    name: 'Christopher Gjøvåg',
    title: 'Utvikler',
  },
  {
    image: getEmployeeImagePath('elisabeth'),
    name: 'Elisabeth Doan',
    title: 'Utvikler'
  },
  {
    image: getEmployeeImagePath('ingrid'),
    name: 'Ingrid Aaseng',
    title: 'Utvikler'
  },
  {
    image: getEmployeeImagePath('frikk'),
    name: 'Frikk Fjuk',
    title: 'Utvikler'
  }
]

export const partners = [
  {
    key: 'knowit',
    image: 'img/partners/knowit.png'
  },
  {
    key: 'pipelife',
    image: 'img/partners/pipelife.png'
  },
  {
    key: 'innovasjon_norge',
    image: 'img/partners/innovasjon_norge.png'
  },
  {
    key: 'ntnu',
    image: 'img/partners/ntnu.png'
  },
  {
    key: 'telenor',
    image: 'img/partners/telenor.png'
  }
]

const getIllustrationPath = (filename: string) => {
  return `illustrations/${filename}.svg`
}

export const solutions = [
  {
    title: 'Data- og innsiktsplattform',
    description: '‘Wata’ står for Water Data, og er vår felles plattform for innsamlet data og innsikt. Her sammenfatter vi hydrometeorologisk data fra offentlig tilgjengelige kilder som Norges vassdrags- og energidirektorat, Meteorologisk institutt, og egen datainnhenting fra utplasserte sensorer i det aktuelle vassdrag. Plattformen håndterer tilgangsstyring for private data, og all modellering og prognoser lages i denne plattformen.',
    illustration: getIllustrationPath('data'),
  },
  {
    title: 'Sanntidsovervåkning',
    description: 'All innsikt starter med kontroll over nåsituasjonen, og vårt mest grunnleggende produkt består av en utplassering av måleinstrumenter og kameraovervåkning. Vi sørger for befaring, utplassering, drift og vedlikehold, slik at du til enhver tid kan danne et helhetsbilde over kritiske punkter i tilknytning vassdrag og avrenning.',
    illustration: getIllustrationPath('predictive'),
  },
  {
    title: 'Integrasjonsplattform',
    description: 'All erfaring tilsier at data må settes i system for at dataen skal gi noe verdi. Vår integrasjonsløsning samler inn, kvalitetssikrer, og kategoriserer data slik at du som bruker kan innlemme det direkte med populære BI verktøy eller andre tredjepartsløsninger. Vi tilbyr også dashboard for datautforskning i sanntid.',
    illustration: getIllustrationPath('dashboard'),
  },
  {
    title: 'Farevarsel',
    description: 'Med automatisk varsling fjernes behovet for kontinuerlig manuell overvåkning. Våre modeller kombinerer hydrometeorologisk data med maskinlæring for å generere prognoser om fremtidig vannstand og vannføring, raskere og mer lokalt enn dagens hydrologiske modeller.',
    illustration: getIllustrationPath('warning'),
  },
  {
    title: 'Skreddersøm / oppdrag',
    description: 'Vi er bare på begynnelsen av vår reise, og liker å si at vi har en arbeidsmetodikk for kontinuerlig innovasjon. Andre spesifikke behov som bygger på data- og innsikt, sanntidsovervåkning, integrasjoner og farevarsel, men som ikke dekkes av våre nåværende produkter kan vi akkomodere for gjennom skreddersydde oppdrag.',
    illustration: getIllustrationPath('business'),
  },
]