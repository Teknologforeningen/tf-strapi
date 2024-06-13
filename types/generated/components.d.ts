import type { Schema, Attribute } from '@strapi/strapi';

export interface PageBanner extends Schema.Component {
  collectionName: 'components_page_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    bannerImages: Attribute.Media<'images', true>;
  };
}

export interface PageFooter extends Schema.Component {
  collectionName: 'components_page_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    nationlogos: Attribute.Component<'page.nationlogo', true>;
  };
}

export interface PageNationlogo extends Schema.Component {
  collectionName: 'components_page_nationlogos';
  info: {
    displayName: 'Nationlogo';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface PageNavbarLink extends Schema.Component {
  collectionName: 'components_page_navbar_links';
  info: {
    displayName: 'Navbar Link';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface PageNavbarMultipleLink extends Schema.Component {
  collectionName: 'components_page_navbar_multiple_links';
  info: {
    displayName: 'Navbar Multiple Link';
    icon: 'layer-group';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    links: Attribute.Component<'page.navbar-link', true> & Attribute.Required;
  };
}

export interface PageSidebar extends Schema.Component {
  collectionName: 'components_page_sidebars';
  info: {
    displayName: 'Sidebar';
    icon: 'text-height';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.banner': PageBanner;
      'page.footer': PageFooter;
      'page.nationlogo': PageNationlogo;
      'page.navbar-link': PageNavbarLink;
      'page.navbar-multiple-link': PageNavbarMultipleLink;
      'page.sidebar': PageSidebar;
    }
  }
}
