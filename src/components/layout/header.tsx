import { Fragment, memo, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Button } from 'components/button';
import { useNavigate } from 'react-router-dom';
import logo from '../../jp2_logo_invert.png';
import { animated, useSpring } from '@react-spring/web';

export const Header = memo(() => {
  const navigate = useNavigate();
  const [logoAnimate, setLogoAnimate] = useState(false);
  const logoStyles = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: logoAnimate ? 360 : 0 },
  });
  return (
    <Popover className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-24'>
          <div className='flex justify-start'>
            <a href='#/'>
              <span className='sr-only'>Workflow</span>
              <animated.img
                className='h-8 w-auto sm:h-10'
                style={logoStyles}
                src={logo}
                onClick={() => setLogoAnimate(!logoAnimate)}
              />
            </a>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className='hidden md:flex space-x-10'>
            <Button
              value='Home'
              type='submit'
              styles='text-base text-gray-500 hover:text-gray-900'
              onClick={() => navigate('..', { replace: true })}
            />
            <Button
              value='Projects'
              type='submit'
              styles='text-base text-gray-500 hover:text-gray-900'
              onClick={() => navigate('../projects', { replace: true })}
            />
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='flex flex-col py-6 px-5 space-y-6'>
              <Button
                value='Home'
                type='submit'
                styles='flex-1 text-base font-medium text-gray-900 hover:text-gray-700'
                onClick={() => navigate('../home', { replace: true })}
              />
              <Button
                value='Tools'
                type='submit'
                styles='flex-1 text-base font-medium text-gray-900 hover:text-gray-700'
                onClick={() => navigate('../tools', { replace: true })}
              />
              <div>
                {/* <a
                  href='#'
                  className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                >
                  Sign up
                </a>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Existing customer?{' '}
                  <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                    Sign in
                  </a>
                </p> */}
                {/* <Button
                  value='Sign up'
                  type='submit'
                  styles='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-blue-800'
                  // styles='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
                  onClick={() => console.log('hi')}
                />
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Existing customer?{' '}
                  <Button
                    value='Sign in'
                    type='submit'
                    styles='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 hover:text-blue-800'
                    onClick={() => console.log('hi')}
                  />
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
});
