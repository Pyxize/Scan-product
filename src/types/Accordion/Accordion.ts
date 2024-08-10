type AccordionHeaderType = {
  title: string;
};

type AccordionContentType = {
  content: string;
};

export interface AccordionInterface {
  title: AccordionHeaderType;
  content: AccordionContentType;
}
