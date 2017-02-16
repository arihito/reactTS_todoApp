import * as React from "react"

//---------------------------
// TODO 1アイテム
//---------------------------
class TodoComponent extends React.Component<{}, {}> {
    render() {
        return (
            <li>
                {this.props.children}
            </li>
        )
    }
}

//---------------------------
// TODOリスト
//---------------------------
class TodoListComponent extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <ul>
                    <TodoComponent>TODOアイテム1</TodoComponent>
                    <TodoComponent>TODOアイテム2</TodoComponent>
                    <TodoComponent>TODOアイテム3</TodoComponent>
                </ul>
            </div>
        )
    }
}

//---------------------------
// TODOアプリ全体
//---------------------------
export class TodoApp extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <TodoListComponent/>
            </div>
        )
    }
}