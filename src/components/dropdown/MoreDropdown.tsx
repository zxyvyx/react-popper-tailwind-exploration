import { useState } from 'react';
import { usePopper } from 'react-popper';
import { Menu } from '@headlessui/react';

const MoreDropdown = () => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end',
    modifiers: [{ name: 'offset', options: { offset: [0, 10] } }],
  });

  return (
    <Menu>
      <Menu.Button ref={setReferenceElement}>
        <div className='rounded bg-white p-3 shadow focus-within:bg-slate-200'>
          More
        </div>
      </Menu.Button>
      <Menu.Items
        ref={setPopperElement}
        as='div'
        className='tooltip-wrapper'
        style={styles.popper}
        {...attributes.popper}
      >
        <div className='flex flex-col gap-2.5 rounded bg-white py-1 shadow-lg'>
          <Menu.Item>
            {({ active }) => (
              <button
                type='button'
                className={`${active && 'bg-blue-500'} px-3 py-1 text-left`}
              >
                Account settings
              </button>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <button
              type='button'
              disabled
              className='font-italic cursor-not-allowed bg-slate-50 px-3 py-1 text-left text-black text-opacity-25'
            >
              Documentation
            </button>
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type='button'
                className={`${active && 'bg-blue-500'} px-3 py-1 text-left`}
              >
                Documentation
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default MoreDropdown;
