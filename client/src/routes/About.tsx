import React, { ReactElement } from 'react';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

import typescript_logo from '../assets/typescript_logo.svg';
import babel_logo from '../assets/babel_logo.svg';
import react_logo from '../assets/react_logo.svg';
import tailwindcss_logo from '../assets/tailwind_logo.svg';
import webpack_logo from '../assets/webpack_logo.svg';
import daisyui_logo from '../assets/daisyui_logo.svg';

const tech: [string, string, string][] = [
  [typescript_logo, 'Typescript', 'https://www.typescriptlang.org'],
  [babel_logo, 'Babel', 'https://babeljs.io'],
  [react_logo, 'React', 'https://react.dev'],
  [tailwindcss_logo, 'Tailwind', 'https://tailwindcss.com'],
  [webpack_logo, 'Webpack', 'https://webpack.js.org'],
  [daisyui_logo, 'DaisyUI', 'https://react.daisyui.com']
];

export default function About(): ReactElement {
  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen p-4 gap-[2rem]'>
        <h1 className='text-[6rem]'>Technologies</h1>
        <div className='flex flex-row flex-wrap justify-center gap-[1rem]'>
          {tech.map((item) => (
            <a href={item[2]}>
              <figure>
                <img src={item[0]} alt={item[1].toLowerCase() + '_logo'} />
                <figcaption className='text-center text-[2rem]'>{item[1]}</figcaption>
              </figure>
            </a>
          ))}
        </div>
        <Link to='/'>
          <Button color='primary'>Home</Button>
        </Link>
      </div>
    </>
  );
}
