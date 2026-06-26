const SITE = {
  name: "Christian Quebral",
  subtitle: "hey claude, put a paragraph here about how much i love data engineering\n\n",
};

const PROJECTS = [
  {
    slug: "lineage-map",
    title: "LineageMap",
    date: "May 2026",
    description: "A lightweight CLI tool for generating lineage graphs for DBT projects!",
    banner: "images/github.svg",
    links: [
      { label: "Github", url: "https://github.com/chridgn/lineage-map" },
    ],
    bodyFile: "content/lineage-map.md",
  },
  {
    slug: "openrct2-telemetry",
    title: "OpenRCT2 Telemetry",
    date: "May 2026",
    description: "A plugin written for OpenRCT2 allowing me to ingest park data into Kafka",
    banner: "images/openrct2-telemetry.png",
    links: [
      { label: "Github (Plugin)", url: "https://github.com/chridgn/openrct2-telemetry" },
      { label: "Github (Example Pipeline)", url: "https://github.com/chridgn/openrct2-telemetry-pipeline"}
    ],
    bodyFile: "content/openrct2-telemetry.md",
  },
  {
    slug: "dashboards-by-dif",
    title: "Dashboards by Dif",
    date: "June 2026",
    description: "A dashboard of data I've felt compelled to ingest into my postgres instance",
    banner: "images/dashboards-by-dif.png",
    links: [
      { label: "Live site", url: "https://dashboards.chridgn.dev" },
      { label: "GitHub", url: "https://github.com/chridgn/dashboards-by-dif" },
    ],
    bodyFile: "content/dashboards-by-dif.md",
  }
];

const MISC = [
  {
    title: "Media Neuroscience Lab Welcomes Spring 2019 Research Assistants and Volunteers",
    url: "https://www.medianeuroscience.org/2019/05/12/spring-19-ras/",
    description: "I consider my time in this lab to be the soft-start of my career due to having to use Python and Linux. Very happy the site is still up.",
  },
  {
    title: "Oxford Academic Journal of Communication -  Video Game Violence and Interactivity: Effect or Equivalence?",
    url: "https://academic.oup.com/joc/article-abstract/70/2/219/5823594",
    description: "Co-authored paper resulting from my time as an RA in UCSB's Media Neuroscience Lab.",
  },
  {
    title: "NIH National Library of Medicine - Cognitive and perceptual load have opposing effects on brain network efficiency and behavioral variability in ADHD",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10727773/",
    description: "Acknowledged for assisting with data collection and processing. Also my first real introduction to Python.",
  },
  {
    title: "NIH National Library of Medicine - Monitoring of postural sway with a head-mounted wearable device: effects of gender, participant state, and concussion",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6503189/",
    description: "Acknowledged for assisting with this study as well.",
  },
];
