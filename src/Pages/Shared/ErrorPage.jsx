import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div className='w-screen h-screen text-center pt-60 text-3xl'>
            <h2>Something went wrong</h2>
            <p>
            {
                err?.message || err?.statusText
            }
            </p>
            <p>
                {
                    console.log(err)
                }
            </p>
        </div>
    );
};

export default ErrorPage;