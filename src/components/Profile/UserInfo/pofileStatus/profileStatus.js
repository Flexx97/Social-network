import React from 'react';
import style from '../userinfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    unActiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (<>
            {this.state.editMode === false ?
                <div onDoubleClick={this.activeEditMode} className={style.status}>
                    {this.state.status || '--------'}
                </div>
                : <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.unActiveEditMode}
                         value={this.state.status}/>
            }
        </>)

    }

}

export default ProfileStatus;