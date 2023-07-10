import React from 'react'
import 'boxicons'
import { Body } from './Body';


const ImageWithText = ({ imageSrc, text }) => {
    return (
      <div className="group relative">
        <img src={imageSrc} alt="Imagen" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>{text}</p>
        </div>
      </div>
    );
};
  
{/*export default ImageWithText;*/}
{/*import ImageWithText from './ImageWithText';*/}

export const Header = () => {
  return (
    <header className="bg-black text-white py-4">{/*Parte superior de Unity assets store*/}
        <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">{/*LOGO DE UNITY*/}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA1dJREFUWEftl1uoVVUUhr8/81YK4ZMXDJKCMlKf9MlbaSChVFJeisDbg6Iv4u3BSPQl0Z40tPKGiJVQGvaWJCrUgxClhJJGQpI9dEPwTfhjyFwyz9p77bXP2fvEARtw4Ow15xrzW2P+Y8wxxQAzDTAeHlwg288Ac9LfCEkvNNudfouQ7dHAiwkgFh+bARgYJemfMlTXgGyPAJ7PohARaWVLJX3cL0C2PwFeAx7qRZIckbSs60C2lwDHK0D+BC4Ac4FHS3N+lzSmq0C2RwI/AaGXsF+B8wnivKQrthcBEcFmNkXSD/lArzRkex6wOXMwBPgROAt8I+lG7tz2I8B1oIjEB8CbWbQ2SdrVJyDbLwEngcHJwW1gpqTvq3RjeyewKY3/ATwFHAZeTs++Lqd/WxGy/QpwAni4FzATgKvZB6yQdMj2KuDD5Ocu8JikO8VH1QLZXgwcAwa1CxPzbJ8BiuJ3UdLU9HwccDOL6nxJX7YFZPst4AjcP2JqtyktGiUgInrvJxDivVQsajv+fy793itpXS1QCm2IsIji31H4WmkmwZSFvE/SmpLY382S47qk0NY9a7plttcCezInATNdUmRUS7OdLxZHwxPlI8L2DOBccnRS0quVQLbXA++VVj0F9KgXFVShsy2Z+FdKOlieazvm/ZWePy3pVlMg2xuAHnWhLiItxu8Ludkc26GxM5KKjGvcMttbgR0dQOSvXgSmSQpRN1gC+krSR/lgg4Yqtuw08F0boOEvtiwqeNgqSQf6vGXFi01E3Va6x/u2twHvJF/tiPpzSQsrRZ1BRUXN074tKNtDgWvA+ORrv6TVeZRKmfizpCdrgdLX9rUwLgC+SIs0K4yRsZPS+PuSosw0irpCfAPn6Mi2rxuH63JJhzs+XDOovrQf24G3k49oP6IDONpx+5FBlRu06I0upy7xW0m/lMQ7PLUgjxcCB94AotMM2yhpd/5ObfvRTFcZYLmFjbaiaGEvxNlnO86pzyr8TM67gJjTEVDKxNeBTysWjDoUTf6sLCrF1N8kRW/UwzoGSlBxvwqw3lyDDkla0S9ACSouirOzi+LEVtsNLJbUENmuRKiifsXVKO5jxX3+v71K10QjzrhnM7hhkgK2wfotQnWAVeP/A9VF7l9j7Vc08qeKDQAAAABJRU5ErkJggg=="/>
                <h1 className="text-lg ml-2 font-bold text-2xl">Unity </h1>
                <h1 className="text-lg ml-2 font-medium text-2xl">Asset Store</h1>
            </div>

            
            <form>
                <div class="flex"> 
                    {/* */}<button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-400 bg-zinc-800 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">All categories <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <select name="cars" class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <option href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3D</option>
                            </li>
                            <li>
                                <option href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2D</option>
                            </li>
                            <li>
                                <option href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Animation</option>
                            </li>
                            <li>
                                <option href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Characters</option>
                            </li>
                        </select>
                    </div>
                    <div class="relative w-96">
                        <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-400 bg-gray-500 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 bg-zinc-500" placeholder="Search for assets" required></input>
                        <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-gray-600 rounded-r-lg border border-gray-600 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    </div>
                </div>
            </form>


            <nav>{/*Menú de opciones principal*/}
                <ul className="flex space-x-4">
                    <li><ImageWithText imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAexJREFUSEvtlM+LTmEUxz+fkWQhFpKUBSsWlFjYoDRRlCgLC5EfNQusKc2GIWI5i0l+bPwByEJZqCklJGVhLzWMpGTnx9F5Pe903zv3vq/Nu5uzuc8993mezznfc86VIZtDvp8FwECFB0oUEWuBM8BeYB2wHPgE3AIm1S/9KH0BEbEHeAwsbrnkB3BUfdgGaQVExBbgObAUeAuMAy/V2YjYDZwDDgJ/gFH1WROkERAR6X8FbAXuA8fVvKjHIiKhl4AZYIP6vb5nHiAi1gNXgCPAe2CT+rtNgoh4Uuozrk70BUTEMeB2RfNT6t3uoYiIsh5RO+uIGAWeAm/UzLjH5jKIiG1FlpRiCphQM/U5awGsAL6VTa+By+qj7qEqIDvhAHBRvdokSROgZJESjlTOHFIf5HsV8BlYBaxWcz3P2gAFshG4CewDptVddUB2wLI6ICJSrrGWIt9TT1ZqlEP5AfiqrqwDpoEdwAX1euVQDll+216DvAB2qj8bADPqmjog9e9OZLbplPqxpJ/SvSsSpmu2tG8+OxYRKdENYD9wRz3dAyibrgHnq5GqnTpFRGaQmaRl5JlB+usFzqA2q53Oahq0w8BZ4F+RCqBcdgJYomZdupH/AhaVVs0AxqpNMvBv2lLc/3YvAAZKNXSJ/gIW1L4ZkNpycAAAAABJRU5ErkJggg==" text="My Assets" /></li>
                    <li><ImageWithText imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAodJREFUSEvFlc1rE1EUxc+J5U14M6DFikVtBcF2USjShR9UQ5Fitwp1IYgfm6or/xVXfuBKu1GooAt3itbWVhBBFwWLIIp10Q8oSOclGc0cmZqWJE2aGCnOdt6c3z3n3neH2OKHW6yP/wPIZ7PnEcdnBBwBIEqTIB96vv84cZx3bhhxPCyyHwAJvAE55ln7oDKRMgeSduWdGyUwVC06AZMEDIDDNaJ9aqy9THJx7f06QNK2yLkJAMckLZC8YqydAvArci4j6S7JtuRDSYskR4y1rwC0RNlsBnF8G+ROSROe7w+QjJOz64AoDK8KuAVp2aRSvbR2rrRKObcviuNnib5JpQZp7feK951RHH8AuYPSRRME98sA+TB8B6CP0iUTBPeama4oDEcE3JE0ng6CgUrAz8SuITtp7bdmALlcrouFwqyk+XQQtNcCdFTG0ygsl8t1s1D4KGAu7fsdlYBpAEcpXTBBMNqoaOm5KAyvCbgJ4Inn+6fLADnnrlO6IWnJS6UOVTaxHlDO7Y3ieAbkdpBnPWvHygCSTORc4qIP0icDnGAQzNcTXh3blZXdETAB8qCk5+kgGNxwD4oH2yNgHGRXo5Bi5S8ScUizxvczJBeqAtaqyZNTBA4I+OyRmVpxJeJ56TWB/UXx4ySXSl1XXXZFy4mTbgFfPbK/ysUqFZ8xf25vmXhZDyqzltQWhWGy5DZAyioH3htrT5JcrtavTdd1EfISZM+aE5At+TgeX40FeGusHST5o9Yw1P0fSGqNwjCB9Ar4AsAQ2ANg2lh7iuTKZpNWF1DcngkkGcOeotiUsXaonvimPajSk9Z8GD5K4jDWniOZbeSONOSgEaGme/Av4n8VUbOg39DfOSj0R928AAAAAElFTkSuQmCC" text="Saved Assets" /></li>
                    <li><ImageWithText imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXVJREFUSEvN1DEvREEQB/D5n9x7z+52Eq4T9fkAKpVGoVNcoxbREIn4CgrRKEhUGhQ6hUahEj2FWkM0it3N7RF/eYLccd7t3SFeO7Pze7OTWcgvf/jl+vJ3QHCOb904kLuJMUs/0d1HB03Aa91SqTRVHhw87Rf5ckXB2lUB1kXkONV65scBkkMN729FZCABRqHUTT9I2yEHa/cEmOu5MHmYGlPLz7cFGt5PkDzvA7hKjRn/FsgDwdpLAao9IeRaakw+x+/3oOHcPEW2ewCeE6UqAO4LAZKq4X2epLpBKHKSaT39fqZwk+vObUFksRtAgFqq1GEUEEKoytPTZTRAPiRaDwN4jALypLq1ZwAmY5B8ZpnWC825HR+74H1NyP0YAMBEotRFVwDJcvD+GiJjHZCjVOvZzzkdO4j586KcKKDu/bKQKwJsZEptNhcsihXuQUsRa28BjJC8y4ypxMbiAed2QNYIHGRaz7cABbFooJ85RM3gXwMvYHmUGQrPt20AAAAASUVORK5CYII=" text="Cart" /></li>
                    <li><ImageWithText imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAq1JREFUSEu1lT1oFEEUx///XW9vb+eIhR8oaEoVSSMEFGIrCKKICGJjmYCxMBATDWgS8TtCVERFCytbU2gjCBGJIH6AnYWWIhhBMd4Mt3u5fbKb3bA5L3cXkkw1M/vm/f7vzds3xCoPrrJ/tAwItN4VAlchkreAPqdY/NSKuKaAcrm8ndXqFQBHMg4FIk8ccpBKfW8EWhQgxrQHIhcBnABAiPwCeRuADWAAgAvABznuFAqXSOp6oP8AIrLRN+YCgR4Aa9JDBHpznnefpEiptMknhwl0A7BE5KdFDuc87yHJahY0DxCRtsCYswD6EnWR3VMBOgm0J4feETjpKPUxWpfL5W2sVi8DOBp/F/kCyxrMe95ERtjc1Nf6LYDdc3by2iL7HaXei0g+MOYMgCEAheTgY0fkHIvFH9E6MGZPKDJGYG98HnjhKrU/ms9H4GstKVWANxZw2lHqw/ye1psDkXGQxxK1M2JZo/lC4U5F646QvEugK7XPKxX7rgvI5HBCbHvAdd2v6V7FmK4wDB+A7EjUfiOwJYH+Abk2mrcKiGyrAjzKe94wyekkhSow5hWAzoyYUcfzbgXG/F4qIPVhAIwlSk+BXJetllRxmuqlRJD1Mz8XYMq2rPNhGE5mFa8IwLLtfTnXfZlUX1wcKxpB6ixyXC6VJm3bHs0VCtGdROW+ANisiuqmJwvIGsQVJjK12CU/B3CgrseazVqA7/s7MTsb/dGHE9NneaUOLfgP4nC1PkiRGyB3NAKlADFma6YhWhD5LOSAq1QkNh71mp1dMaYnFBkhuaEeyPG89RWth4Tsje5XRKYtcqRhs6t1lGl+/QByC76LzIBsi9s1cNPxvOsk/9YT0/TBidMQhtdAHs9EvPwHp1ZNoHWnAPfivIp0r9iT2UpVNbJpmqLlAv4Blhk4KPdWxgwAAAAASUVORK5CYII=" text="Aplications" /></li>
                    <li><ImageWithText imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA5hJREFUSEu1VU1oXUUYPWfufTMXjNKFqK1Wa9zURkistf7EjSguDAQFFdRNSqGiFuxGFyltqf9IQV0UhLZKEYqoCNa/hZKNNlisxp+2Qaj2h7Y0KIhi8c289+bIvb778t7LS+omd3dnzsw53/l+hljkj4t8PxYkkGTg/Ugk1wq4kdKaXJDIQwSmjPQ1nPuMZJxP6LwEkq5phLCPwO0LRSlgMrH2EZIne+F6EtRDWE/pdQAXCThIcq8hjyJNjxSX1Os3RGmVpDECNwM4L/Kp1No93SRzCOohrKP0JoAAYLux9uX5LMgtjCGMA9gKoCJyLLV2bztJB4Gkq2MIhwH0GWPuYKUyWXguXdXwfjfJ24p/4KvE2sdIni7+a7XhGOOXAP421q4q1/O9FoEkNkKYJHArgOcS53JV+eXLovc/gLy0I3zpN+PcEMmz+XrD+xcAjEuaSLPsrhI7SxDC2igdBPCTsXY1yXpht/fvEngQ0m7j3DYASfR+G8j1At5LnXuoKSSNIRwCMGjI1bR2qiOCRrW6CeSrIjek1u4qFTS8/wPAEmPt8pYlUn8M4RdIM0mWXdHChvAEpJ0gNybW7uwgKJU2vT/QOlStzoC8zFjbT/J4U21PAtVqd8YYJwDsS5x7tDuCUyCXG2v7SJ4vCdos2mWcezbPWwxhO4B1AN5JnHu4xEq6PIZwDtKJJMuu7STw/i8AFxtrl5I813ZoafT+O5AtK4o96axxLs/VTBt2WQzhDIA/E+eWdBNMA1hppBFm2aftFSPpkhjCM5DysAXybWPtK+2RFpzV6mgkPwTwY+LcYDfBWwDGAGxOnHuxTRVRrw9HaQjSf6VK/m7IKaTpJEm1FURu3VZIbyRZ9nhnH1Sr90byE0jHjXMDJP+R9wNR2g+yv6MHZtmPGXKUzk1L6oveHy3yaMw9rFQ+7260pFnHQ3m5mkplS/T+WOG9dAbkFwBONO9eAelukFc2c3Fd9H4HyCcFfJNYe0sZWeeomG22fBy8T+ABAd+mzhVjuisveTXlzTRYYgFEQ95Ea78vsXOGXcP7zQCeLwFGGmWWfdTLInl/fwQ+aO1JTydZtqMd23NcN7zP631LEzgNaY8xZgKVyq8ADGq1FTHG3KK8F65v4sYT517qFjL/gxPCmkaMr5Ec7png5qKkA4kxm2htPofmfBd8k+X9fVEaEbCS5EDus6QjBH42wH5m2ccLCbggwUKH/8/eohP8C/7wviiuBIDXAAAAAElFTkSuQmCC" text="User" /></li>
                </ul>
            </nav>
        </div>
        <div>
            <nav className="w-full sm:w-auto sm:mt-0 pt-7 px-12 flex space-x-96">
                <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">3D</a></li>
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">2D</a></li>
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">Add-Oons</a></li>
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">Audio</a></li>
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">AI</a></li>
                    
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">Descentralization </a></li>
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">Essentials</a></li>
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">Templates</a></li>
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">tools</a></li>
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">FVX</a></li>
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium text-red-600">Sale</a></li>
                </ul>
                <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <li><a href="#" className="hover:text-blue-500 text-sm font-medium">Sell Assets</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
