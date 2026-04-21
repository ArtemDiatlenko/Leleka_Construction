import { AppLang } from '../i18n/app-language';

export type Vacancy = {
  id: number;
  title: string;
  path: string;
  summary: string;
  location: string;
  employmentType: string;
  image: string;
  highlights: string[];
  offers: string[];
  responsibilities: string[];
  requirements: string[];
};

type LocalizedString = Record<AppLang, string>;
type LocalizedList = Record<AppLang, string[]>;

export type VacancySource = {
  id: number;
  path: string;
  image: string;
  title: LocalizedString;
  summary: LocalizedString;
  location: LocalizedString;
  employmentType: LocalizedString;
  highlights: LocalizedList;
  offers: LocalizedList;
  responsibilities: LocalizedList;
  requirements: LocalizedList;
};
