import { hello } from './hello';

function bye(){
    const greeting = hello();
    return `${greeting} and bye`;
}

export {
    bye
}