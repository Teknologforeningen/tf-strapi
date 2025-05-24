import type { Schema, Struct } from '@strapi/strapi';

export interface DonationDonationQuote extends Struct.ComponentSchema {
  collectionName: 'components_donation_donation_quotes';
  info: {
    description: '';
    displayName: 'Quote';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface DonationFaq extends Struct.ComponentSchema {
  collectionName: 'components_donation_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DonationPage extends Struct.ComponentSchema {
  collectionName: 'components_donation_pages';
  info: {
    description: '';
    displayName: 'Page';
  };
  attributes: {
    donation_form_info: Schema.Attribute.RichText;
    donation_levels: Schema.Attribute.JSON;
    donor_list_title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    faqs: Schema.Attribute.Component<'donation.faq', true>;
    quotes: Schema.Attribute.Component<'donation.donation-quote', true>;
    summary: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageBanner extends Struct.ComponentSchema {
  collectionName: 'components_page_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    bannerImages: Schema.Attribute.Media<'images', true>;
  };
}

export interface PageFooter extends Struct.ComponentSchema {
  collectionName: 'components_page_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    nationlogos: Schema.Attribute.Component<'page.nationlogo', true>;
  };
}

export interface PageNationlogo extends Struct.ComponentSchema {
  collectionName: 'components_page_nationlogos';
  info: {
    description: '';
    displayName: 'Nationlogo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageNavbarLink extends Struct.ComponentSchema {
  collectionName: 'components_page_navbar_links';
  info: {
    displayName: 'Navbar Link';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageNavbarMultipleLink extends Struct.ComponentSchema {
  collectionName: 'components_page_navbar_multiple_links';
  info: {
    description: '';
    displayName: 'Navbar Multiple Link';
    icon: 'layer-group';
  };
  attributes: {
    links: Schema.Attribute.Component<'page.navbar-link', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSidebar extends Struct.ComponentSchema {
  collectionName: 'components_page_sidebars';
  info: {
    description: '';
    displayName: 'Sidebar';
    icon: 'text-height';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'donation.donation-quote': DonationDonationQuote;
      'donation.faq': DonationFaq;
      'donation.page': DonationPage;
      'page.banner': PageBanner;
      'page.footer': PageFooter;
      'page.nationlogo': PageNationlogo;
      'page.navbar-link': PageNavbarLink;
      'page.navbar-multiple-link': PageNavbarMultipleLink;
      'page.sidebar': PageSidebar;
    }
  }
}
