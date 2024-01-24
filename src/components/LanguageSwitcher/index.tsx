// LanguageSwitcher.tsx
import { useTranslations } from "next-intl";
import { useDarkMode } from "@/src/context/DarkModeContext";

const LanguageSwitcher = () => {
  const tLocaleSwitcher = useTranslations("LocaleSwitcher");
  const { isDarkMode } = useDarkMode();

  return (
    <select
      // onChange={(e) => switchLanguage(e.target.value)}
      // value={locale}
      className={`${isDarkMode
        ? "bg-zinc-950 text-white"
        : "bg-white text-gray-800 border border-gray-300"
        } rounded py-1 outline-none`}
    >
      <option value="en">
        {tLocaleSwitcher("switchLocale", { locale: "en" })}
      </option>
      <option value="pt">
        {tLocaleSwitcher("switchLocale", { locale: "pt" })}
      </option>
    </select>
  );
};

export default LanguageSwitcher;
