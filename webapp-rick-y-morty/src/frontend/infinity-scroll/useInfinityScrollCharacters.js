import {useEffect} from 'react';
import {useScreenHook} from './useScreenHook';
import {useDataProvider,LOADING} from './useDataProvider';

const mergeData = (currentData, newData) => {
    if(newData) {
        const elementsToAdd = newData.filter(newItem => {
            return !currentData.some(item => item.id === newItem.id)
        });
        return [
            ...currentData,
            ...elementsToAdd,
        ];
    }
    return currentData;
};

const API_URL = process.env.API_URL || 'https://rickandmortyapi.com/api/character';

export const useInfinityScrollCharacters = (
    elementToObserveRef,
    charactersRef
) => {
    const [isShowing] = useScreenHook(elementToObserveRef, '0px');
    const [state, loading] = useDataProvider(API_URL);
    const {
        statusData,
        data,
    } = state;
    const {results, info} = data ? data : {};
    charactersRef.current = mergeData(charactersRef.current,results);
    useEffect(() => {
        if(isShowing && statusData !== LOADING) {
            if(info.next) loading(info.next);
        };
    },[isShowing]);
    return [state];
};