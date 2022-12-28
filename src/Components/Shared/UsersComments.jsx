import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import Avatar from './Avatar';

const UsersComments = ({commentPostId}) => {
    // useEffect(() => {
    //     axios.get('')
    // }, [])
    return (
        <div>
            <div className={`mt-1 px-4 flex`}>
              <Avatar className={"w-8"} />
              <div className="w-full bg-neutral rounded-2xl py-2 px-3 mb-2 h-auto">
                <span className="text-[1rem] text-base-100 font-semibold hover:underline cursor-pointer">
                  Cristiano Ronaldo
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Velit, ipsa?
                </p>
              </div>
            </div>
          </div>
    );
};

export default UsersComments;