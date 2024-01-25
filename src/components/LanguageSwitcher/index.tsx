import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcherSelect from "../LanguageSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const locales = ["pt", "en"];

  return (
    <LanguageSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LanguageSwitcherSelect>
  );
}
