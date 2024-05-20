import Button from './button'

export default function Cadastro(){
    return(
       <div className='flex flex-col items-center justify-center space-y-6 h-screen' >
        <h1 className='text-gradient from-blue-500 to-indigo-500 text-3xl font-bold'>KM Prático</h1>
        <div>
            <label className="pl-2 pb-1 block text-xs font-medium text-gray-900 max-w-md" >E-mail</label>
            <input type="text" placeholder='E-mail do usuario'  className="peer block w-96 rounded-md
            border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 " />
        </div>
        
        <div>
            <label className="pl-2 pb-1 block text-xs font-medium text-gray-900 max-w-md" >Senha</label>
            <input type="text" placeholder='Senha Cadastrada'  className="peer block w-96 rounded-md
            border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 " />
        </div>
        <Button />

        <p className='text-red-700'>Criae um conta</p>
       </div>
      
    )
}