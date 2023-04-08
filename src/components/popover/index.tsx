import { useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';

interface Props {
  placement: Placement;
}

const Popover = ({ placement = 'top' }: Props) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, 10] } },
    ],
  });

  return (
    <>
      <button
        type='button'
        className='w-fit rounded border p-3'
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        ref={setReferenceElement}
      >
        Reference element
      </button>

      {isVisible ? (
        <div
          className='tooltip-wrapper'
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className='relative z-20 rounded bg-slate-600 px-3 py-1 text-white'>
            Popper element
          </div>
          <div
            ref={setArrowElement}
            style={styles.arrow}
            data-popper-arrow
            className={`popper-arrow z-10 ${
              placement ?? 'auto'
            } h-5 w-5 before:absolute before:inset-0 before:bg-slate-600`}
          />
        </div>
      ) : null}
    </>
  );
};

export default Popover;
