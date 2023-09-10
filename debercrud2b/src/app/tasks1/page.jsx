import Navbar from "../../components/Navbar"


async function HoemPage(){
  return(
    <div>
      <div className = 'grid grid-cols-3 gap-2'>
        <div class = "bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
            <h3 className='text-2xl font-bold'>Fabia</h3>
            <p className='text-slate-300'>Un coche pequeño, ideal para la ciudad</p>
            <p className='text-slate-400 my-2'>
              <span className='mr-1'>
              15.100 $
              </span>
            </p>
        </div>

        <div class = "bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
            <h3 className='text-2xl font-bold'>Enyaq Coupé</h3>
            <p className='text-slate-300'>Nuestro 100% eléctrico por excelencia</p>
            <p className='text-slate-400 my-2'>
              <span className='mr-1'>
              46.500 $
              </span>
            </p>
        </div>
        
        <div class = "bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
            <h3 className='text-2xl font-bold'>Fabia Monte Carlo</h3>
            <p className='text-slate-300'>Un legado deportivo</p>
            <p className='text-slate-400 my-2'>
              <span className='mr-1'>
              46.500 $
              </span>
            </p>
        </div>
        
        <div class = "bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
            <h3 className='text-2xl font-bold'>Octavia RS</h3>
            <p className='text-slate-300'>La experiencia diaria de divertirse al volante</p>
            <p className='text-slate-400 my-2'>
              <span className='mr-1'>
              46.500 $
              </span>
            </p>
        </div>

        
        <div class = "bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
            <h3 className='text-2xl font-bold'>Enyaq Sportline</h3>
            <p className='text-slate-300'>Un SUV eléctrico con carácter deportivo</p>
            <p className='text-slate-400 my-2'>
              <span className='mr-1'>
              10.000 $
              </span>
            </p>
        </div>
      </div>
    </div>

  )
}

export default HoemPage