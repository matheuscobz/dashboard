import { ComponentProps } from "react"

//ComponentProps<'a'> faz com que o componente 'NavLink' receba todas as propriedades da tag 'a' no HTML.
interface NavLink extends ComponentProps<'a'>{
  children: string
    
}

export function NavLink(props:NavLink){
  return (
    <a {...props}  className="font-medium text-sm">
      {props.children}
    </a>
  )
} 