import Tooltip from './components/tooltip';

const App = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row gap-4'>
        <Tooltip placement='bottom' text='Your description goes here'>
          <button
            type='button'
            className='h-12 w-64 place-items-center rounded bg-slate-400 text-slate-50'
          >
            <div>Any Content</div>
          </button>
        </Tooltip>
        <Tooltip placement='bottom' text='Your description goes here'>
          <button
            type='button'
            className='h-12 w-64 place-items-center rounded bg-slate-400 text-slate-50'
          >
            <div>Any Content</div>
          </button>
        </Tooltip>
        <Tooltip placement='bottom' text='Your description goes here'>
          <button
            type='button'
            className='h-12 w-64 place-items-center rounded bg-slate-400 text-slate-50'
          >
            <div>Any Content</div>
          </button>
        </Tooltip>
      </div>
      <div>Other content</div>
    </div>
  );
};

export default App;
