export interface Catalogs {
  languages: CatalogItem[];
  frameworks: CatalogItem[];
  libraries: CatalogItem[];
  tools: CatalogItem[];
}

export interface CatalogItem {
  id: string;
  name: string;
  logo: string;
  collection: SubCatalogItem[];
}

export interface SubCatalogItem {
  id: string;
  lang: string;
}
