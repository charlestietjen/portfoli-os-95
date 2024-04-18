import { Window as React95Window, WindowHeader, WindowContent } from 'react95';
import { JsxElement } from 'typescript';

const Window = ({ children, title = 'Gob95' }: { children: any, title?: string }) => {
    return (
        <React95Window>
            <WindowHeader>{title}</WindowHeader>
            <WindowContent>
                {children}
            </WindowContent>
        </React95Window>
    )
}

export default Window