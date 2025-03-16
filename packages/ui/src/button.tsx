export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}
import { aaa } from '@xw/utils'

export function Button({ children, ...other }: ButtonProps): JSX.Element {
    console.log(33)
    aaa()
    return (
        <button type="button" {...other}>
            {children}1120
        </button>
    )
}

Button.displayName = 'Button'
