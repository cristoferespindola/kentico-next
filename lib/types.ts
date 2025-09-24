import { IContentItem, Elements } from "@kontent-ai/delivery-sdk";

export type Actor = {
  url: Elements.UrlSlugElement;
  firstName: Elements.TextElement;
  lastName: Elements.TextElement;
  photo: Elements.AssetsElement;
  born?: Elements.DateTimeElement;
  nationality?: Elements.TaxonomyElement;
};

export type ActorItem = IContentItem<Actor>;

export type Movie = {
  title: Elements.TextElement;
  plot?: Elements.RichTextElement;
  released?: Elements.DateTimeElement;
  length?: Elements.NumberElement;
  poster?: Elements.AssetsElement;
  category?: Elements.MultipleChoiceElement;
  stars?: Elements.LinkedItemsElement<ActorItem>;
  seoname: Elements.UrlSlugElement;
  releasecategory?: Elements.TaxonomyElement;
};

export type MovieItem = IContentItem<Movie>;