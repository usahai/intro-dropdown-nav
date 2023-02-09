This is a simple project that uses NextJS and tailwindCSS to make a responsive website.

## Demo

You can view the website [here](https://intro-dd-nav.netlify.app/) deployed through Netlify

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configurations

The presets defined as per the requirements followed to the following

- Colors
- Typography
  - Font family
  - Font Weight

NOTE: The layout for the mobile UI was built to 576px instead of 375px because it was not possible to test for mobile UI (save for the old iPhone SE). In order to test it at 375px, only 1 line needs to be changed in `tailwind.config.js` file from `576px` to `375px`: <br />

```
    screens: {
      sm: '576px', <---- HERE
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
```

## Features built-in

- [App] There was no componenet-based library used for any of the components used in the application. Only tailwindCSS was used as a styling framework.
- [MobileUI] Scrolling is locked when sidebar is open
- [DesktopUI] Height for content is fixed so that it doesn't flex when it is moved to a bigger screem (vertically)
- [Icon] Unused arrow-down-icon because arrow-up-icon was rotated
