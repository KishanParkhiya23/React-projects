export default function TabButton({children, setClass, ...props}){
    return (
        <li>
            <button className={setClass ? 'active' : ''} {...props}>{children}</button>
        </li>
    )
}