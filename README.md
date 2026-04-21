# Leleka Construction

Responsive multilingual website for a construction company that hires and presents teams for reinforced concrete and monolithic work in Poland.

## What It Includes

- Company, clients, vacancies, vacancy detail and contact pages
- Sticky responsive header with language switching and vacancy navigation
- Recruitment/contact form built with Angular Reactive Forms
- Localized UI and content in Polish, Ukrainian and English
- Static vacancy data localized through a small domain service
- Mobile-first layout behavior for cards, forms, navigation and media sections

## Stack

- Angular 19
- Standalone components
- Angular Router
- Reactive Forms
- Transloco
- Component-scoped CSS with shared design tokens in `styles.css`

## Structure

```text
src/app/
  core/       domain data, i18n helpers, models and services
  layout/     site header and footer
  shared/     reusable UI components
  home/       landing page
  about/      company page
  clients/    client-facing page
  vacancies/  vacancy listing
  vacancy/    vacancy detail page
  contact/    contact and recruitment form
```

## Run Locally

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Engineering Notes

The project keeps the architecture intentionally small. Page components own page layout, layout components handle shell behavior, and vacancy content is separated from the service that localizes it. This keeps the code easy to scan while still showing realistic Angular structure, routing, forms and multilingual behavior.

