import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function Welcome({firstVisit}) {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ? <div>
                    Welcome to CrytoDash, please select your favorite coinds to begin.{' '}
                </div> : null
            }
        </AppContext.Consumer>
    );
}