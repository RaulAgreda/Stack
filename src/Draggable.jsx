const DRAGMODE = {
    XY: 0,
    X: 1,
    Y: 2
}

export function DragDropContext ({children, updateChildrenHandler, dragOption = DRAGMODE.XY}) {
    const [children, setChildren] = useState(children);

    return <div className="drag-drop-context">
        {children}
    </div>
}

export function DragChild ({children}) {
    return <div className="drag-child">
        {children}
    </div>
}