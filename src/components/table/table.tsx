import { ComponentProps } from "react";

interface Table extends ComponentProps<'table'>{

}

export function Table(props:Table){
  return (
    <div className="border border-white/10 rounded-lg">
      <table {...props} className="w-full" />
    </div>
  )
}