import { PencilLine } from 'phosphor-react'

export default function SidebarFooter() {
    return (
        <footer className='border-t-[1px] border-gray-500 mt-6 pt-6 px-8 pb-8 '>
            <a
                className='bg-transparent text-primary-light border-solid border-[1px] border-primary-light rounded-lg h-[50px] px-6 font-bold flex items-center justify-center no-underline gap-1 hover:bg-primary-light hover:text-white transition-colors duration-200'
                href="#"
            >
                <PencilLine size={20} />
                Editar seu Perfil
            </a>
        </footer>
    )
}
