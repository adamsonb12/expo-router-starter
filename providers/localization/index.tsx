import { createContext, ReactNode, useContext } from "react";
import { I18n, TranslateOptions } from "i18n-js";
import * as Localization from "expo-localization";

import { translations } from "./translations";
import { Translation } from "./translations/types";

export interface LocalizationContext {
  getTranslation: (
    key: keyof Translation,
    options?: TranslateOptions
  ) => string;
  locale: string;
}

const LocalizationContext = createContext<LocalizationContext>({
  getTranslation: (translationKey) => {
    return translationKey;
  },
  locale: "en",
});

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const i18n = new I18n(translations);

  i18n.locale = Localization.locale;
  i18n.enableFallback = true;

  return (
    <LocalizationContext.Provider
      value={{
        getTranslation: (
          key: keyof Translation,
          options?: TranslateOptions
        ) => {
          return i18n.t(key, options ? { ...options } : undefined);
        },
        locale: i18n.locale,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalizationContext = () => {
  return useContext(LocalizationContext);
};
