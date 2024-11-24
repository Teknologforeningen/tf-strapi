import type { Attribute, Schema } from '@strapi/strapi';

export interface PageBanner extends Schema.Component {
  collectionName: 'components_page_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    bannerImages: Attribute.Media<'images', true>;
  };
}

export interface PageFooter extends Schema.Component {
  collectionName: 'components_page_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    nationlogos: Attribute.Component<'page.nationlogo', true>;
  };
}

export interface PageNationlogo extends Schema.Component {
  collectionName: 'components_page_nationlogos';
  info: {
    description: '';
    displayName: 'Nationlogo';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface PageNavbarLink extends Schema.Component {
  collectionName: 'components_page_navbar_links';
  info: {
    displayName: 'Navbar Link';
    icon: 'link';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageNavbarMultipleLink extends Schema.Component {
  collectionName: 'components_page_navbar_multiple_links';
  info: {
    description: '';
    displayName: 'Navbar Multiple Link';
    icon: 'layer-group';
  };
  attributes: {
    links: Attribute.Component<'page.navbar-link', true> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageSidebar extends Schema.Component {
  collectionName: 'components_page_sidebars';
  info: {
    description: '';
    displayName: 'Sidebar';
    icon: 'text-height';
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
