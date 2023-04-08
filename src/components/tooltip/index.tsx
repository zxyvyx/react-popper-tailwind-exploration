import {
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';

interface Props extends PropsWithChildren {
  text: string;
  placement: Placement;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

const Tooltip: FC<Props> = ({ children, text, placement, className }) => {
  const [popperReference, setPopperReference] = useState<HTMLDivElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const { styles, attributes } = usePopper(popperReference, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, 10] } },
    ],
  });

  if (!isValidElement(children)) {
    // eslint-disable-next-line no-console
    console.warn('Wrapped element is not a valid element');
    return null;
  }

  const childrenWithPopperProps = cloneElement(children as ReactElement, {
    ref: setPopperReference,
    onBlur: () => setIsVisible(() => false),
    onClick: () => setIsVisible(() => !isVisible),
    onFocus: () => setIsVisible(() => true),
    onMouseEnter: () => setIsVisible(() => true),
    onMouseLeave: () => setIsVisible(() => false),
    'aria-describedby': 'tooltip-message',
  });

  return (
    <>
      <div>{childrenWithPopperProps}</div>
      {ReactDOM.createPortal(
        <div
          role='tooltip'
          id='tooltip-message'
          style={styles.popper}
          className={`shadow-sm ${isVisible ? `opacity-100` : `opacity-0`} ${
            isVisible ? 'visible' : 'invisible'
          }  rounded-lg shadow-sm transition-all duration-300`}
          ref={setPopperElement}
          {...attributes.popper}
        >
          <div
            className={`min-w-64 tooltip relative z-20 grid h-[30px] w-auto place-items-center rounded bg-gray-900 px-3 text-sm font-medium text-white  shadow-sm dark:bg-gray-700 ${className}`}
          >
            <span>{text}</span>
          </div>
          <div
            ref={setArrowElement}
            data-popper-arrow
            className={`popper-arrow z-10 ${
              placement ?? 'auto'
            } h-5 w-5 before:absolute before:inset-0  before:bg-gray-700`}
            style={styles.arrow}
          />
        </div>,
        document.getElementById('portal') as HTMLElement
      )}
    </>
  );
};

export default Tooltip;
