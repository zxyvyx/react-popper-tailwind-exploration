import { useState } from 'react';
import { usePopper } from 'react-popper';
import { Popover } from '@headlessui/react';

const NotificationPanel = () => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, 10] } },
    ],
  });

  return (
    <Popover>
      <Popover.Button ref={setReferenceElement}>
        <div className='flex items-center gap-2 rounded border bg-slate-500 px-2.5 py-2 focus-within:bg-slate-600 hover:bg-slate-600'>
          <div className='h-1.5 w-1.5 rounded-full bg-white' />
          <div className='text-white'>Click Me</div>
        </div>
      </Popover.Button>

      <Popover.Panel
        ref={setPopperElement}
        as='div'
        className='tooltip-wrapper'
        style={styles.popper}
        {...attributes.popper}
      >
        <div className='relative z-20 flex w-fit flex-col gap-2.5 rounded bg-slate-300 p-5 font-bold text-red-500 shadow-lg sm:w-[300px]'>
          <div>Content</div>
          <div className='flex flex-row gap-2'>
            <button type='button' className='flex-1'>
              Cancel
            </button>
            <Popover.Button className='flex-1'>
              <div>Close</div>
            </Popover.Button>
          </div>
        </div>
        <div
          ref={setArrowElement}
          style={styles.arrow}
          data-popper-arrow
          className='popper-arrow z-10 h-5 w-5 before:absolute before:inset-0 before:bg-slate-300'
        />
      </Popover.Panel>
    </Popover>
  );
};

export default NotificationPanel;
