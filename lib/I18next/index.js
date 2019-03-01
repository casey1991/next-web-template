import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["zh-cn"],
  localeSubpaths: true
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withNamespaces } = NextI18NextInstance;
export * from "./namespaces";
