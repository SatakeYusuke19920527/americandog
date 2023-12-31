import { ReactElement } from 'react'

export default function Hand() {
  return (
      <>
      <div className="hand">
        {/* <h1 className="handle">手持ち</h1> */}
        <img className="bed" src="/bed.png"></img>
      </div>
      </>
    )
}
  
  type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Handle = ({ children }: LayoutProps) => (
  <>
    <Hand />
    {children}
  </>
)