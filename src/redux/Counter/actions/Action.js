/**
 * Created by Arison on 2018/8/28.
 */

export const INCREASE ='INCREASE';
export const DECREASE ='DECREASE';

export const INCREASE10='INCREASE10';
export const  MULTIPLICATION='MULTIPLICATION';

export function incActionGenerator(){
    return {
        type:INCREASE,
        preload:'increase the current value'
    }
}

export function decActionGenerator(){
    return {
        type:DECREASE,
        preload:'decrease the current value'
    }
}


export  function  inc10ActionGenerator() {
    return {
        type:INCREASE10,
        preload:'increase the current value 10'
    }
}


export  function  mulActionGenerator() {
    return {
        type:MULTIPLICATION,
        preload:'increase the current value 10'
    }
}