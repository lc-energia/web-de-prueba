
export interface ServiceData {
  title: string;
  breadcrumb: string;
  introduction: string;
  sections: {
    title: string;
    content: string;
    list?: string[];
  }[];
  partners?: {
    src: string;
    alt: string;
  }[];
}

export const servicesData: { [key: string]: ServiceData } = {
  'progettare-il-risparmio-energetico': {
    title: 'Progettare il Risparmio Energetico',
    breadcrumb: 'Progettare il Risparmio Energetico',
    introduction: 'L’obiettivo del risparmio energetico è perseguibile solo attraverso competenze specifiche.',
    sections: [
      {
        title: 'Competenze Specifiche',
        content: 'È fondamentale avere esperienza e abilitazioni come:',
        list: [
          'Esperto gestione energia.',
          'Energy manager.',
          'Leed certificator.',
        ],
      },
      {
        title: 'Strumenti e Incentivi',
        content: 'Numerosi strumenti tecnici e finanziari sono oggi a disposizione del fruitore interessato ai temi della sostenibilità, con la possibilità di effettuare investimenti per l’efficienza energetica sfruttando gli incentivi governativi.',
      },
      {
        title: 'Supporto e Consulenza',
        content: 'LC Energia offre supporto e consulenza per orientarsi nel panorama degli incentivi e realizzare progetti di efficienza energetica in modo ottimale.',
      },
    ],
  },
  'impianti-fotovoltaici': {
    title: 'Impianti Fotovoltaici',
    breadcrumb: 'Impianti Fotovoltaici',
    introduction: 'Progettiamo e installiamo impianti fotovoltaici "chiavi in mano".',
    sections: [
      {
        title: 'Valutazione Preliminare',
        content: 'Partendo da una valutazione preliminare che considera i seguenti elementi di base:',
        list: [
          'Consumo annuo dell\'utenza',
          'Spazio disponibile',
          'Orientamento dell\'area di posa dei pannelli',
          'Presenza di ombreggiamenti e possibili soluzioni migliorative',
        ],
      },
      {
        title: 'Perché conviene?',
        content: 'Detrazione fiscale al 50% per edifici residenziali. Ad oggi esiste la possibilità di recuperare il 50% delle spese sostenute per l’acquisto e la realizzazione di un sistema fotovoltaico grazie agli incentivi governativi.',
      },
      {
        title: 'Scambio sul posto',
        content: 'Il meccanismo dello scambio sul posto è una modalità di gestione dell’energia elettrica che permette al soggetto responsabile di un impianto fotovoltaico di immettere in rete l’energia elettrica prodotta ma non immediatamente autoconsumata, per poi prelevarla in un momento differente.',
      },
      {
        title: 'Autoconsumo',
        content: 'L’energia prodotta dall’impianto fotovoltaico può essere direttamente auto-consumata dall’abitazione, garantendo così un notevole risparmio in bolletta.',
      },
      {
        title: 'Normativa per l’incremento delle energie rinnovabili',
        content: 'Il decreto legislativo 199/2021 ha stabilito nuovi obblighi che dovranno essere rispettati in merito all’utilizzo di energia prodotta da fonti rinnovabili negli stabili di nuova costruzione o soggetti a ristrutturazioni.',
      },
    ],
    partners: [
      { src: '/img/image8.png', alt: 'Partner 1' },
      { src: '/img/image1.png', alt: 'Partner 2' },
      { src: '/img/image2.png', alt: 'Partner 3' },
      { src: '/img/image3.png', alt: 'Partner 4' },
      { src: '/img/image4.png', alt: 'Partner 5' },
      { src: '/img/image5.png', alt: 'Partner 6' },
      { src: '/img/image6.png', alt: 'Partner 7' },
      { src: '/img/image7.png', alt: 'Partner 8' },
    ],
  },
  'progettazione-e-consulenza-tecnica': {
    title: 'Progettazione e Consulenza Tecnica',
    breadcrumb: 'Progettazione e Consulenza Tecnica',
    introduction: 'Offriamo un servizio completo di progettazione e consulenza tecnica per impianti termici, idraulici, di climatizzazione e molto altro.',
    sections: [
      {
        title: 'I Nostri Servizi',
        content: 'Ci occupiamo di:',
        list: [
          'Impianti termici e idraulici',
          'Impianti di climatizzazione',
          'Impianti di ventilazione meccanica controllata',
          'Impianti e reti gas',
          'Impianti di innevamento artificiale',
          'Pratiche VVF (Vigili del Fuoco)',
          'Pratiche INAIL',
          'Pratiche e detrazioni fiscali',
        ],
      },
    ],
  },
  'contabilizzazione-calore-impianti-termici-centralizzati': {
    title: 'Contabilizzazione del Calore',
    breadcrumb: 'Contabilizzazione del Calore',
    introduction: 'La contabilizzazione del calore è uno strumento fondamentale per la gestione efficiente degli impianti termici centralizzati.',
    sections: [
      {
        title: 'Normativa e Vantaggi',
        content: 'La norma UNI 10200:2018 definisce i principi per un’equa ripartizione delle spese di climatizzazione invernale ed acqua calda sanitaria in edifici dotati di impianto centralizzato. La contabilizzazione permette di suddividere i costi in base ai consumi effettivi di ciascun utente, incentivando comportamenti virtuosi e un uso più consapevole dell’energia.',
      },
      {
        title: 'Come Funziona',
        content: 'Attraverso l’installazione di specifici dispositivi (ripartitori di calore, contatori di calore, etc.), è possibile misurare il calore effettivamente prelevato da ogni unità immobiliare. Questi dati vengono poi utilizzati per calcolare la quota di spesa individuale.',
      },
    ],
  },
  'progettazione-antincendio': {
    title: 'Progettazione Antincendio',
    breadcrumb: 'Progettazione Antincendio',
    introduction: 'La sicurezza antincendio è un aspetto cruciale nella progettazione di qualsiasi edificio. Offriamo un servizio completo di progettazione e consulenza in materia di prevenzione incendi.',
    sections: [
      {
        title: 'I Nostri Servizi',
        content: 'Ci occupiamo di:',
        list: [
          'Redazione di pratiche VVF (Vigili del Fuoco)',
          'Valutazione del rischio incendio',
          'Progettazione di impianti di rilevazione e spegnimento incendi',
          'Consulenza per l’adeguamento normativo',
        ],
      },
    ],
  },
  'progettazione-acustica': {
    title: 'Progettazione Acustica',
    breadcrumb: 'Progettazione Acustica',
    introduction: 'Un buon comfort acustico è essenziale per la qualità della vita all’interno degli edifici. Ci occupiamo di progettazione acustica per garantire il rispetto dei requisiti di legge e il benessere delle persone.',
    sections: [
      {
        title: 'I Nostri Servizi',
        content: 'Ci occupiamo di:',
        list: [
          'Valutazione previsionale di clima e impatto acustico',
          'Verifica dei requisiti acustici passivi degli edifici',
          'Progettazione di interventi di correzione e isolamento acustico',
        ],
      },
    ],
  },
  'impianti-geotermici': {
    title: 'Impianti Geotermici',
    breadcrumb: 'Impianti Geotermici',
    introduction: 'L’energia geotermica è una fonte di energia rinnovabile, pulita e sostenibile che sfrutta il calore naturale della Terra.',
    sections: [
      {
        title: 'Come Funzionano',
        content: 'Gli impianti geotermici utilizzano una pompa di calore per trasferire il calore dal sottosuolo all’edificio durante l’inverno e viceversa durante l’estate. Questo processo permette di riscaldare, raffrescare e produrre acqua calda sanitaria in modo estremamente efficiente.',
      },
      {
        title: 'Vantaggi',
        content: 'I principali vantaggi degli impianti geotermici sono:',
        list: [
          'Risparmio energetico ed economico',
          'Riduzione delle emissioni di CO2',
          'Elevato comfort abitativo',
          'Affidabilità e lunga durata dell’impianto',
        ],
      },
    ],
  },
  'stazioni-di-ricarica': {
    title: 'Stazioni di Ricarica per Veicoli Elettrici',
    breadcrumb: 'Stazioni di Ricarica',
    introduction: 'La mobilità elettrica è il futuro. Progettiamo e installiamo stazioni di ricarica per veicoli elettrici in ambito residenziale, aziendale e pubblico.',
    sections: [
      {
        title: 'Le Nostre Soluzioni',
        content: 'Offriamo un’ampia gamma di soluzioni per la ricarica di veicoli elettrici:',
        list: [
          'Wallbox per uso domestico',
          'Stazioni di ricarica per parcheggi aziendali e flotte',
          'Stazioni di ricarica pubbliche ad alta potenza',
        ],
      },
      {
        title: 'Servizio Chiavi in Mano',
        content: 'Ci occupiamo di tutto il processo, dalla consulenza iniziale alla progettazione, installazione e manutenzione della stazione di ricarica.',
      },
    ],
  },
  'riqualificazione-di-centrali-termiche-esistenti': {
    title: 'Riqualificazione di Centrali Termiche Esistenti',
    breadcrumb: 'Riqualificazione Centrali Termiche',
    introduction: 'La riqualificazione delle centrali termiche è un intervento fondamentale per migliorare l’efficienza energetica degli edifici e ridurre i costi di gestione.',
    sections: [
      {
        title: 'Diagnosi Energetica',
        content: 'Il primo passo per una riqualificazione efficace è una diagnosi energetica approfondita dell’impianto esistente. Questa analisi permette di individuare le criticità e definire gli interventi più opportuni.',
      },
      {
        title: 'Interventi di Riqualificazione',
        content: 'Gli interventi possono includere:',
        list: [
          'Sostituzione del generatore di calore con uno più efficiente (es. caldaia a condensazione, pompa di calore)',
          'Installazione di sistemi di termoregolazione e contabilizzazione del calore',
          'Isolamento delle tubazioni',
          'Bilanciamento dell’impianto',
        ],
      },
      {
        title: 'Vantaggi',
        content: 'La riqualificazione di una centrale termica porta a numerosi vantaggi:',
        list: [
          'Notevole risparmio sui costi energetici',
          'Miglioramento del comfort abitativo',
          'Aumento del valore dell’immobile',
          'Riduzione dell’impatto ambientale',
        ],
      },
    ],
  },
};
