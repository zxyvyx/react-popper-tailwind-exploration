import Popover from './components/popover';
import Tooltip from './components/tooltip';

const App = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex h-screen items-center justify-center'>
        Scroll this page to simulate
      </div>
      <div className='flex flex-row gap-4'>
        <Tooltip placement='left' text='Your description goes here'>
          <div className='mx-auto w-fit rounded border p-3'>Any Content</div>
        </Tooltip>
        <Tooltip
          placement='right-start'
          text={"Your power isn't enough\nPlease consider to call an ambulance"}
        >
          <button
            type='button'
            className='h-12 w-64 place-items-center rounded bg-slate-400 text-slate-50'
          >
            <div>Any Content</div>
          </button>
        </Tooltip>
        <Tooltip placement='top-end' text='Your description goes here'>
          <button
            type='button'
            className='h-12 w-64 place-items-center rounded bg-slate-400 text-slate-50'
          >
            <div>Any Content</div>
          </button>
        </Tooltip>
        <div className='flex w-full justify-center'>
          <Popover placement='top-end' />
        </div>
      </div>
      <div className='h-screen'>Other content</div>
    </div>
  );
};

export default App;
