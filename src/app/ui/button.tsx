

export default function Button(){
    return(
        <button
        className={
          'flex h-10 items-center rounded-lg bg-blue-500 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 w-40 justify-center' 
          
        }
      >
        Login
      </button>
    )
}