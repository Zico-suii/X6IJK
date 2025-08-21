import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { faqData } from "./constants/howItWorksData";

interface HowItWorksFAQProps {
  onTryForFree: () => void;
}

export function HowItWorksFAQ({ onTryForFree }: HowItWorksFAQProps) {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Everything you need to know about how Plantify AI works</p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>{faq.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pl-7">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
        <p className="text-gray-600 mb-6">Our support team is here to help you get the most out of Plantify AI</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline">Contact Support</Button>
          <Button 
            onClick={onTryForFree}
            className="bg-green-600 hover:bg-green-700"
          >
            Try It Yourself
          </Button>
        </div>
      </div>
    </div>
  );
}