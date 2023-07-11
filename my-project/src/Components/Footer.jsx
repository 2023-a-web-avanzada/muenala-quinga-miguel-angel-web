import React, { useEffect } from 'react';
import 'boxicons'

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

export const Footer = () => {
  useEffect(() => {
    // Lógica adicional usando useEffect si es necesario
    return () => {
      // Limpieza del efecto si es necesario
    };
  }, []);

  return (
    <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
            <div className="text-white flex items-center px-6">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA1dJREFUWEftl1uoVVUUhr8/81YK4ZMXDJKCMlKf9MlbaSChVFJeisDbg6Iv4u3BSPQl0Z40tPKGiJVQGvaWJCrUgxClhJJGQpI9dEPwTfhjyFwyz9p77bXP2fvEARtw4Ow15xrzW2P+Y8wxxQAzDTAeHlwg288Ac9LfCEkvNNudfouQ7dHAiwkgFh+bARgYJemfMlTXgGyPAJ7PohARaWVLJX3cL0C2PwFeAx7qRZIckbSs60C2lwDHK0D+BC4Ac4FHS3N+lzSmq0C2RwI/AaGXsF+B8wnivKQrthcBEcFmNkXSD/lArzRkex6wOXMwBPgROAt8I+lG7tz2I8B1oIjEB8CbWbQ2SdrVJyDbLwEngcHJwW1gpqTvq3RjeyewKY3/ATwFHAZeTs++Lqd/WxGy/QpwAni4FzATgKvZB6yQdMj2KuDD5Ocu8JikO8VH1QLZXgwcAwa1CxPzbJ8BiuJ3UdLU9HwccDOL6nxJX7YFZPst4AjcP2JqtyktGiUgInrvJxDivVQsajv+fy793itpXS1QCm2IsIji31H4WmkmwZSFvE/SmpLY382S47qk0NY9a7plttcCezInATNdUmRUS7OdLxZHwxPlI8L2DOBccnRS0quVQLbXA++VVj0F9KgXFVShsy2Z+FdKOlieazvm/ZWePy3pVlMg2xuAHnWhLiItxu8Ludkc26GxM5KKjGvcMttbgR0dQOSvXgSmSQpRN1gC+krSR/lgg4Yqtuw08F0boOEvtiwqeNgqSQf6vGXFi01E3Va6x/u2twHvJF/tiPpzSQsrRZ1BRUXN074tKNtDgWvA+ORrv6TVeZRKmfizpCdrgdLX9rUwLgC+SIs0K4yRsZPS+PuSosw0irpCfAPn6Mi2rxuH63JJhzs+XDOovrQf24G3k49oP6IDONpx+5FBlRu06I0upy7xW0m/lMQ7PLUgjxcCB94AotMM2yhpd/5ObfvRTFcZYLmFjbaiaGEvxNlnO86pzyr8TM67gJjTEVDKxNeBTysWjDoUTf6sLCrF1N8kRW/UwzoGSlBxvwqw3lyDDkla0S9ACSouirOzi+LEVtsNLJbUENmuRKiifsXVKO5jxX3+v71K10QjzrhnM7hhkgK2wfotQnWAVeP/A9VF7l9j7Vc08qeKDQAAAABJRU5ErkJggg=="/>
                <h1 className="text-lg ml-2 font-bold text-2xl">Unity </h1>
                <h1 className="text-lg ml-2 font-medium text-2xl">Asset Store</h1>
            </div>
                
            <div className="flex justify-between  py-8 px-8">{/* justify-between items-center */}
                
                <div className=" pr-12">
                    <h4 className="text-white font-bold mb-3">Language</h4>
                    <ul className='text-gray-400'>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">English</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">简体中文</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">한국어</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">日本語</a>
                        </li>
                    </ul>
                </div>
                <div className=" pr-12">
                    <h4 className="text-white font-bold mb-3">Sell Assets on Unity</h4>
                    <ul className='text-gray-400'>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Sell Assets</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Submission Guidelines</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Asset Store Tool</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Publisher Login</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className=" pr-12">
                    <h4 className="text-white font-bold mb-3">Discover</h4>
                    <ul className='text-gray-400'>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Most Popular Assets</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Top Free Assets</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Top Paid Assets</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Asset Store Blog</a>
                        </li>
                    </ul>
                </div>
                <div className=" pr-12">
                    <h4 className="text-white font-bold mb-3">Affiliate Program</h4>
                    <ul className='text-gray-400'>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Membership</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Link Maker</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Affiliate Id</a>
                        </li>
                    </ul>
                </div>

                <div className=" pr-3">
                    <h4 className="text-white  font-bold mb-3">Get Asset Store news</h4>
                    <div class="flex justify-between">
                        <input type="search" id="search-dropdown" class="h-10 w-2/3  text-sm text-gray-400 bg-black rounded-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 " placeholder="e-mail" required></input>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white w-1/3 rounded-md">Sign up</button>
                    </div>

                </div>

                
            </div>

            <div className='flex   py-8 px-8'>
                <div className=" pr-12">
                    <h4 className="text-white  font-bold mb-3">Help</h4>
                    <ul className='text-gray-400'>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">FAQ</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Customer Service</a>
                        </li>
                    </ul>
                </div>
                <div className=" pr-12">
                    <h4 className="text-white font-bold mb-3">Feedback</h4>
                    <ul className='text-gray-400'>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Leave Feedback</a>
                        </li>
                    </ul>
                </div>
                <div className=" pr-12">
                    <h4 className="text-white font-bold mb-3">Partners Program</h4>
                    <ul className='text-gray-400'>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Partners</a>
                        </li>
                    </ul>
                </div>
                <div className=" pr-12">
                    <h4 className="text-white font-bold mb-3">Download</h4>
                    <ul className='text-gray-400'>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Get Unity</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Download Archive</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Beta Program</a>
                        </li>
                    </ul>
                </div>

                <div className="text-white">
                    <h4 className=" font-bold mb-3 flex justify-center">Síguenos</h4>
                    <nav>{/*Menú de redes sociales justify-between items-center*/}
                        <ul className="flex space-x-4">
                            <li><ImageWithText imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaxJREFUSEvtlT9LHFEUxc/dWdiV93InxIAISooIIUWK3SZlOpuARb6AhWChfgnR1iaQKhD8CvkK6ZJAxDT5U1gskkIF2Tcz64o7e2TEnexOmJ2B1SKwrxs45/4e59zHCO75yD3PxxRQmPBIRFEUzSOOdwgsCbkAkaeFEwAS+AHgVIBf8LxtY8yfgS8FdJ171iO/isiDEkNzJSTb1VqtWa/XjxJRCoic2wewOsnwIe8Ho7o2Cmi3v0GkcScA8ovx/ZcjgNC5MwFmcwAE+RrAW4gsFV6CbBnff5KNKAZQyTH3japHsnrh3BaBHYjYPBDJc+v7j1IASdMJgnDMzWhUUzide9wBdgGsD/c48JMMrO/rMKDaCYKrMYDYqFbTAQUAAF2jOpONiEWA24g2+sC2iDzMjQg4sapz2S0KIWJyTEk/b0DulSmZwE+r+jwLaEFksXBDSggIfLKqr7IRfQSwUsJfRvLeqCYL8PclX4bhi16//xnATTkTHc9rGmMORgDJRxRFDcTxJsjjG4DIMoDkddf/AZJJZ98JpNsnwG9WKu+stYcD/fSHU1jV/x/RNYtPoBlKjgeOAAAAAElFTkSuQmCC" text="Youtube" /></li>
                            <li><ImageWithText imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiFJREFUSEvdlb1rFFEUxc+ZcYmZefO20UJQ/AARQUXESktFUAQ/kKAELLQQSa8oin9AbCwiNhKENDYpBCFFGhGboKBoYWVwQRTEYvbtm1ndnbkymF3W3dnZD0iTKd+97/zeefe+O8Q6f1xnfWwwgIj4JG3RtYmItsY8AHCWwG6INEjOTQbB3TiOtyFJzk0qNUdSMp32FYmIa435VHKcqQmlPvaD1MJwmeSJnrhIBeQOkle8IHjeircBcRzvShuNVQF+OsAFT+s33SLW2iNIknd9HYq8FfIVHGdBKfW+28HmyBgDYNOawFO47n3f97+3BOMwnE7JhQKAFXJGaf2sx0G2YKvV7NTHOgUEeA3ghUuuSJoeFvJRQY3mfa2vdcY7a6CiKNonSbJEYMs474PArKf1rVxAFEXbpdn8KsAvAlvHAYCc8YPgcT8HTlStfgG5cyzxf8XbP6H151xAthgZc1FEshZrFXp4lsiqXy7v6d7QMyoiY6ZSkXsEDg6vnr0o3vSD4MlAgA3DMyBfjiQuUvG03kvyz0DAWrtmfXx1SEiTIse9cnklLz93moqIY609gCS5Q/JyAUgEuK60nu+X0wPIBl69VjuapultkKcLxOskp70gWCxy2gbUa7WTSZo+BHCocwjmbhZZYql0w/O8yqBr/M9BNoojYy4BOA/gFIAJAL8h8gPkN4gsi+suKqU+DBLOnUXDbholb4P9MkexPmzuX/nBzxkEGm7YAAAAAElFTkSuQmCC" text="twitter" /></li>
                            <li><ImageWithText imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAS1JREFUSEvtlL8uBFEUh7+TJZa7c6dA4xHoFAqNxgNIxL4BWaVGpVHodSRanW1Eq1BoeQASJQmauTMjkZg9MmsKkTU7xk6yxZ7qFr/z++69549QcUjF/gwX4D0MFz5UD4AlYAbVR+DU+P7ebz9R+AVxHM+RJA/AxA+ztrF24/+AIDhCpNXD6MxY2xwE4AaRxdRI4cp43qqIJP2apPAXRc49C8x2DUW2jecd9zPvSouIUk3k3KvAdKbfMtaeFMnNBbyFYVM7nfns1rvAZGZ6gepteq7Vatf1RuOyVA1i59rAet5NRXVnyvcPKwMAa8ba83KAINhXkZWsWMvAeNZFd8BTeh5T3az7/n0pwPekyLkXSaf3KwZT5BHgr4M2qkH+Zqm8TYsstl6awtt0aAGfualzGRFe6HwAAAAASUVORK5CYII=" text="Facebook" /></li>
                            <li><ImageWithText imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAvVJREFUSEvFlUtoFEEQhv/q2biT6e3uS45qBB+oiKhERIJ6UBEEEY1Ejd59HARFIyjeRDGKBk8K3iQ+8EkEL3oLhiCKBHwSFBE8iKd5rYmZ2ZJeN2E3zsYgBBvmMlTXV/XXownTfGia/eP/AIaHh+emIyNHmGgNAUuAuoEwA6+Juc8Bul1jhiYq8kcGcRjuB/NlADkwf2FggID3mVISrQDzMhDNAjAK4KDU+lq1bQ0gjuMWpOkAA29zM2Zsc13341RqNBKGS5JSqRdEs+E4K6WUr8bu1QKC4D6AzaKhYWFjY+Pnvzln5kIcBFdJiH7YL01fAHgotW7LBvi+dfpWGrO52jkziziON4o0XQwgLTnOOynl05EwXJD+lq9fat0a+74FNElj5mQCIt8PCOiRxhwYMygWi7M4SW4DWF0DBfpELrdbjI56ea2/EVEQWwWYN0ljZD2JSgRc8LTutAY28mIYPgMwRzAfdYV4UhTC4STZCKIuAoY8pdYSEVv7yPdvE9EOqbVTD2ANz0qtT1iDYhi2M7O91O4pdac6g2IY7mTmWwC2Sq17K4CbRLRTai3qAgjo8rQ+XgYEQRcDxzylFBFFNRIFQVMR+A7m09KYUxVADxF1SK3Hm2diFzETdReUOlwBnGOg01PKWI0zAcAZqfXJMiAIrhOwd3IAcKmg9ZGKRG3MfNfq6il1r0aiKOrgUqlngkQ2g12T1qA6g6oiNwvmY5Ui5zhJNoDoPIAPUql1E4psa+LWm4MIRD1S631VbTqTk8QWszWrTT3P+zr237YpM68vGGPqAeyyGsoatB9huJWBLQB+AnjsKfVoLPJxgO+/BKClMfPrDZrVcLtoaFg0lVVRnVEURUupVBpk5hsFY/ZkZxDHy5GmL8E86OTzba7rfvrbPip3j3Wepg9A1AzHWSWltJmUz2Tr2g7Lc/4tiR3rBEK8IeY8M88DUa7sgNkDUQuABESHpFJXqoPKfNH+6cHJ5y9mrff/82RORfep2kx7Br8A+Ph4KJqbqrYAAAAASUVORK5CYII=" text="Instagram" /></li>
                            <li><ImageWithText imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAnRJREFUSEvdlT1oFFEUhc+ZTYK7M/PGgAqKBBKJkMLCysImKIhKxEY7K//QQjvRQrBRVLAT/EshgpUgiBCIqNjYCBZ2KooGCQaDQubN7rjZuHtk1kmYnY1CTNLkdfPuz3fPvfcxxDIfLnN+rGCApOBnubxH0qAc55HneaPZdlbCcC+AITrOi6LnjZKM5mt3W4skleIougdgP4DOJEjANwDvcgkGCKxL76qSHrrGHCE5nfVrA8TWXhFw9r+GT553ff/SXwHVarWvXqsllTYrX/CRYnR09Luu+3U2tkVBJQxvgjyx4MSZAAJXS8acawNI6qxYO0ly9WIAAMZLvt9DUkmeOQVxFB2U9CCfXMBbAv0AOnK2GQEfCQy0xTjOLs/znrYAKtbeBnC8xVkacoNgRFJ3bO0bkD1Nu/S5ZMxWkmHF2n0AHmfjBFzzjDmTB7wEsH3OUSqXjAlINpK7irXDAI6m9mHXmGYxkgpxFCVvoJiBjLjGDLUCwrAM0s1WUvL9bpJTyV05DJ+R3JkqeOIGwe4mIIrWxtJkTvmYGwS9eQXNobRIlZ47jnOnIW0jcCqzvjUB1x3ydUM6RmBHLm7KC4LuPKAOwFnkBv0RCPzwjFmTByRPvCszg1jAL5LmX1BJlsmGkaWM34RrzIb8DC6CTB5IIa3ifYE8WW80NhI4BKAPwPo0yQSATwLuFxxnvC7dIrA5tSXre8Ez5nILIPmYjqKBGekGgcEU8t31/V6S5flUSPIq1n4h2ew3pNECcHpVEHyY9Z/3h1OtVjfVa7XDAF65xrTseB4UR9EBNRpbnK6uu8VicSxvX8F/tKVY17YhL1XSbJ7f0B/3GZghVioAAAAASUVORK5CYII=" text="Discord" /></li>
                        </ul>
                    </nav>
                    
                </div>
            </div>

            <hr className="border-gray-700 my-4" />
            <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Unity Assets Store. Todos los derechos reservados.
            </p>
        </div>
    </footer>
  );
};

