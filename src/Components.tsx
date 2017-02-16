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
                <hr />
                <TodoFormComponent />
            </div>
        )
    }
}

//---------------------------
// TODOの入力フォーム
//---------------------------
class TodoFormComponent extends React.Component<{}, {}> {
    private handleSubmit(e: React.SyntheticEvent<HTMLLinkElement>) {
        console.log("TodoFormComponent.handleSubmit")
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' ref='text' />
                <input type='submit' value='追加' />
            </form>
        )
    }
}