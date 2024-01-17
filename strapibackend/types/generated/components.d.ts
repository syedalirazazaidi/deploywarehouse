import type { Schema, Attribute } from '@strapi/strapi';

export interface FeaturesFeature extends Schema.Component {
  collectionName: 'components_features_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    featureImage: Attribute.Media;
  };
}

export interface OfferWeoffer extends Schema.Component {
  collectionName: 'components_offer_weoffers';
  info: {
    displayName: 'weoffer';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'features.feature': FeaturesFeature;
      'offer.weoffer': OfferWeoffer;
    }
  }
}
