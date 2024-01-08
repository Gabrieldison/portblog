// LanguageSwitcher.tsx
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { useDarkMode } from "@/src/context/DarkModeContext";

const LanguageSwitcher = () => {
  const router = useRouter();
  const t = useTranslations("Header");
  const { isDarkMode } = useDarkMode();

  const switchLanguage = (selectedLanguage: string) => {
    router.push(router.pathname, router.asPath, { locale: selectedLanguage });
  };

  return (
    <select
      onChange={(e) => switchLanguage(e.target.value)}
      value={router.locale}
      className={`${
        isDarkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800 border border-gray-300"
      } rounded px-3 py-2 outline-none`}
    >
      <option value="en">{t("english")}</option>
      <option value="pt">{t("portuguese")}</option>
    </select>
  );
};

export default LanguageSwitcher;
