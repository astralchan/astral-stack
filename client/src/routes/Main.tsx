import React, { ReactElement } from 'react';
import { CodeMockup } from 'react-daisyui';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

export default function Main(): ReactElement {
  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <img className='animate-[spin_10s_linear_infinite]' src={logo} alt='logo' />
        <p className='mt-[1rem] mb-[1rem]'>
          Edit <code className='inline-code'>src/App.tsx</code> to start!
        </p>
        <CodeMockup>
          <CodeMockup.Line dataPrefix={'$'}>
            pnpm start
          </CodeMockup.Line>
        </CodeMockup>
        <Link to='/about'>
          <Button color='primary' className='mt-[1rem]'>About</Button>
        </Link>
      </div>
    </>
  );
}
