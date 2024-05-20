import Image from "next/image";
import FormCadastro from '@/app/ui/formCadastro'
export default function Home() {


  return (
    <main className="flex items-center justify-between h-screen w-screen">
      <div >
        <Image src="/arteLogin.jpg"
          width={500}
          height={500}
          alt="Imagem da tela de login"
        />
      </div>
      <div className="flex-1 items-center justify-center shadow-xl h-screen">
        
        <FormCadastro/>
       
      </div>
    </main>
   
  );
}
