import { useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage, Language } from "./LanguageProvider";

const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' }
];

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 px-2 text-gray-600 hover:text-gray-900 cursor-pointer">
          <Globe className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
          <ChevronDown className="w-3 h-3 ml-1" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-1" align="end">
        <div className="space-y-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-2 py-1.5 text-sm rounded-sm hover:bg-gray-100 transition-colors ${
                language === lang.code ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center space-x-2">
                <span>{lang.nativeName}</span>
                <span className="text-xs text-gray-500">({lang.name})</span>
              </div>
              {language === lang.code && (
                <Check className="w-3 h-3 text-green-600" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}