
export interface Accreditation {
  title: string;
  description: string;
  icon: string;
}

export const accreditations: Accreditation[] = [
  {
    title: "Ingegneri e Periti",
    description: "Iscritti all'ordine degli Ingegneri e all'albo Provinciale dei Periti Industriali.",
    icon: "bi bi-person-badge",
  },
  {
    title: "Certificatori Energetici",
    description: "Certificatori Energetici di cui alla D.G.R. Lombardia.",
    icon: "bi bi-patch-check",
  },
  {
    title: "Progettazione Antincendio",
    description: "Iscritti negli elenchi del Ministero degli Interni dei professionisti abilitati alla progettazione antincendio.",
    icon: "bi bi-fire",
  },
  {
    title: "Verificatori Impianti",
    description: "Verificatori in materia di sicurezza degli impianti ai sensi della Legge 46/90.",
    icon: "bi bi-shield-check",
  },
  {
    title: "Consulenti Tecnici",
    description: "Consulenti tecnici del Tribunale di Como, Monza, Lecco.",
    icon: "bi bi-briefcase",
  },
];
