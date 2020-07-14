import React, {Component} from 'react';

class GuestWriting extends Component {
    render(){
        var {title,content,id,write_date,num} = this.props.g_data
        return(
            <form onSubmit={function(e){
                e.preventDefault();
                if(e.target.dpw.value !=="")
                    this.props.onDelete(e.target.dpw.value,num);
                else
                    alert('삭제 비밀번호를 입력해주세요!')
              }.bind(this)}>
                <div><b>제목 : {title} | 닉네임 : {id} | 작성일시 : {write_date}</b></div>
                <div style={{whiteSpace:'pre-wrap'}}>{content}</div>
                <div>
                    <input name="dpw" type="password" placeholder="삭제 비밀번호 입력"></input>
                    <input type="submit" value="삭제"></input>
                </div>
                <hr/>
            </form>
        );
    }
}

export default GuestWriting;