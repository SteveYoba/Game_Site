import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css'
import Polevvoda from './poleVvoda/polevvoda'


const Dialogs = (props) => {
    
    let dialogsElement = props.state.dialogs.map ( d => <DialogItem Name = {d.name} id = {d.id}/>)
    let messagesElement = props.state.messages.map ( m => <Message message = {m.message}/>)

      return <div className={classes.dialogs}>
                <div className = {classes.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className = {classes.messager}>
                    {messagesElement}
                </div>
                <Polevvoda store = {props.store}></Polevvoda>
            </div>
}

export default Dialogs