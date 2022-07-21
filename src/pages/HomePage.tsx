import React, { useEffect, useState } from 'react';
import {
    useSearchUsersQuery,
    useLazyGetUsersReposQuery,
} from '../store/github/github.api';
import { useDebaunce } from '../hooks/debouns';
import { isJsxOpeningElement } from 'typescript';
import {RepoCard} from '../components/RepoCard';

const HomePage = () => {
    const [search, setSearch] = useState('');
    const debaunced = useDebaunce(search);
    const { isLoading, isError, data } = useSearchUsersQuery(debaunced, {
        skip: search.length < 3,
        refetchOnFocus: true,
    });
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        setDropdown(debaunced.length > 3 && data?.length! > 0);
    }, [debaunced, data]);

    const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
        useLazyGetUsersReposQuery();

    function clickHandler(username: string) {
        fetchRepos(username);
        setDropdown(false);
    }

    return (
        <div className="text-center pt-2" onClick={() => setDropdown(false)}>
            <div className="relative  mt-3">
                <input
                    type="text"
                    className="border-2 py-1 mb-2 text-center max-w-[100%] px-10 rounded-lg outline-0 text-gray-500 focus:border-gray-500 border-slate-600 focus:outline-none"
                    placeholder="Search users in GitHub"
                    onChange={(e) => setSearch(e.target.value)}

                />

                {dropdown && (
                    <ul className="shadow-md p-4 max-w-[500px] max-h-[500px] mx-auto overflow-y-scroll">
                        {isError && (
                            <div className="text-2xl text-center mt-4 text-red-600">
                                Nothing found
                            </div>
                        )}
                        {isLoading && (
                            <div className="text-2xl text-center mt-4 text-blue-400">
                                Loading...
                            </div>
                        )}
                        {data?.map((user) => (
                            <li
                                onClick={() => clickHandler(user.login)}
                                className="text-white pl-2 py-2 hover:pl-4 transition-all cursor-pointer"
                                key={user.id}
                            >
                                {user.login}
                            </li>
                        ))}
                    </ul>
                )}
                {dropdown === false && (
                    <div className="container max-w-[700px] mx-auto max-h-[500px] overflow-y-auto">
                        {areReposLoading && (
                            <div className="text-2xl text-center mt-4 text-blue-400">
                                Repos are loading...
                            </div>
                        )}
                        {repos?.map((repo) => (
                            <RepoCard repo={repo} key={repo.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
