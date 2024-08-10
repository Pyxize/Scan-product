import './Accordion.css';
import { RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react';
import { ReactElement, ReactHTMLElement, ReactNode, useState } from 'react';

type AccordionProps = {
  title: string | ReactElement;
  label: string | ReactElement;
  content?: string | ReactElement;
  children: ReactNode;
};

export const Accordion = ({ title, label, children }: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <details onToggle={() => setOpen((open) => !open)} open={open}>
        <summary className="flex justify-between items-center">
          {title}
          <div className="flex gap-3">
            {label}
            {open ? (
              <RiArrowUpSLine className="arrow-details" />
            ) : (
              <RiArrowDownSLine className="arrow-details" />
            )}
          </div>
        </summary>
        {children}
      </details>
    </>
  );
};
