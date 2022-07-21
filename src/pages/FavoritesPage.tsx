import React from 'react';
import { useAppSelector } from '../hooks/redux';

export function FavouritesPage() {
    const { favourites } = useAppSelector((state) => state.github);

    if (favourites.length === 0)
        return <p className="text-center">No items.</p>;

    return (
        <div className="flex justify-center pt-10 mx-auto max-h-[500px] max-w-[800px]">
            <ul className="list-none overflow-y-scroll">
                {favourites.map((f) => (
                    <li key={f}>
                        <a href={f} target="_blank">
                            {f}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
