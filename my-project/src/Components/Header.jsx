import React from 'react'

export const Header = () => {
  return (
    <header className="bg-black text-white py-4">{/*Parte superior de Unity assets store*/}
        <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">{/*LOGO DE UNITY*/}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAflJREFUSEu1lU2Ij1EUxn8PSmk2NmrYEg0yCzvFRpRhTEqTsphmYSjJYkw+MorFTFlIYhQrNhYy+ZrdLAaTspFiQ1ZjMyslFrJ4dHT/vK73He9L/7u83Xt+5zznS7T5qM32+W+A7RXALmAHsEnS+qLTjQG2lwLbksGdwIZMhW5Jr1p3jQC2TwOjQECqzoiki40BttcCb9LH8PAJ8BTYDJwq0KYlba8FsB3ajqTHL4BpYFbS57izvRJ4BywDwusTwDdguaQv8aZSItt7gbvAEuAGMCTJRV1s3wH6gQfAPuBTgu2W9LgSYHs/EJ8XhXFJh3LBbW8BngFfgTWS5mzfB3qBK5KOlQJsDwI3U3RVxhcDr4F1wDlJ55Nkh4EJ4K2kyNnvEtk+AlxL3pYaT4aGk+ZzyfuIInKyCvgATEoKyX4BbB8HLjXs7B5JU1lengN9kuZzwElgrCFgj6RHGWA2Ev4HIIVYlOgWMJBXTnoXCbwM1Jeo5UWW5FKI7WKSRyVdSOAh4DrwXtLqumVaBVmoTK9KOtqk0aogt4GDwD3gAPAxNVqvpIcLAlLIfxsVnVHzQAcwDkSh1BsVJZ3bBcSQC/1fAjOFYRdTtnXqD7sSyBngbFvGdaHKYhdsBWLZxBbbmDny7wunrAmzlRnGQ8qfp9FGa9jlP563HfAdr0PXGXEV3iYAAAAASUVORK5CYII="/>
                <h1 className="text-lg ml-2">Unity Asset Store</h1>
            </div>

            
            <form>
                <div class="flex">
                    <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-zinc-800 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">All categories <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3D</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2D</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Animations</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Characters</a>
                            </li>
                        </ul>
                    </div>
                    <div class="relative w-full">
                        <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 bg-zinc-500" placeholder="Search" required></input>
                        <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    </div>
                </div>
            </form>


            <nav>{/*Menú de opciones principal*/}
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-blue-300">Inicio</a></li>
                    <li><a href="#" className="hover:text-blue-300">Categorías</a></li>
                    <li><a href="#" className="hover:text-blue-300">Explorar</a></li>
                    <li><a href="#" className="hover:text-blue-300">Carrito</a></li>
                    <li><a href="#" className="hover:text-blue-300">Mi Cuenta</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
