import { Builder } from '@builder.io/react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsNew from './components/WhatsNew';
import OurBeers from './components/OurBeers';
import FindABud from './components/FindABud';
import OurBeersTop from './components/OurBeersTop';
import OurBeer from './components/OurBeer';
import Footer from './components/Footer';
import LeftHero from './components/LeftHero';
import RightHero from './components/RightHero';

// Register components
Builder.registerComponent(Header, {
  name: 'Header',
});

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    {
      name: 'heroImageUrl',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
      defaultValue:
        'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2Fcc3dbf9ecf804247b1c003e3c9b4511f?format=webp&width=800&height=1200',
    },
  ],
});

Builder.registerComponent(WhatsNew, {
  name: 'WhatsNew',
});

Builder.registerComponent(OurBeers, {
  name: 'OurBeers',
});

Builder.registerComponent(FindABud, {
  name: 'FindABud',
});

Builder.registerComponent(OurBeersTop, {
  name: 'OurBeersTop',
});

Builder.registerComponent(OurBeer, {
  name: 'OurBeer',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Budweiser' },
    { name: 'description', type: 'string', defaultValue: 'American-Style Lager' },
    { name: 'abv', type: 'string', defaultValue: '5.0% ABV' },
    {
      name: 'imageUrl',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
    },
    { name: 'details', type: 'string' },
  ],
});

Builder.registerComponent(Footer, {
  name: 'Footer',
});

Builder.registerComponent(LeftHero, {
  name: 'LeftHero',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'American Icons Since 1933' },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'Go to the Clydesdales page for schedule, tours, and origin details.',
    },
    { name: 'buttonText', type: 'string', defaultValue: 'Learn More' },
    {
      name: 'imageUrl',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
      defaultValue:
        'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F6ec9f624507849c782c2169bd9c44410?format=webp&width=800&height=1200',
    },
  ],
});

Builder.registerComponent(RightHero, {
  name: 'RightHero',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Originals, Not Souvenirs' },
    {
      name: 'description',
      type: 'string',
      defaultValue:
        'Budweiser originals you actually wear, hats and shirts built for daily use. Shop the rest of the lineup: hoodies, jackets, beanies, bags, and more.',
    },
    { name: 'buttonText', type: 'string', defaultValue: 'Shop For Merch Here' },
    {
      name: 'imageUrl',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
      defaultValue:
        'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F7fd13bd84bb44641827e8febc58991c7?format=webp&width=800&height=1200',
    },
  ],
});

// Register insert menu
Builder.register('insertMenu', {
  name: 'Our components',
  items: [
    { name: 'Header' },
    { name: 'Hero' },
    { name: 'WhatsNew' },
    { name: 'OurBeers' },
    { name: 'FindABud' },
    { name: 'OurBeersTop' },
    { name: 'OurBeer' },
    { name: 'Footer' },
    { name: 'LeftHero' },
    { name: 'RightHero' },
  ],
});
