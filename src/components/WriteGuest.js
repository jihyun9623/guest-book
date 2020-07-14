import React, {Component} from 'react';

class WriteGuest extends Component {
    render(){
        return(
            <div>
                <form onSubmit={function(e){
                    e.preventDefault();
                    var date = new Date();
                    var ymdhms = date.toLocaleString();
                    var g_data = {
                        title:e.target.title.value,
                        content:e.target.content.value,
                        id:e.target.id.value,
                        write_date:ymdhms,
                        pw:e.target.pw.value,
                    }
                    if(g_data.title===""){
                        alert('제목을 입력해주세요!')
                    }else if(g_data.content===""){
                        alert('내용을 입력해주세요!')
                    }else if(g_data.pw===""){
                        alert('비밀번호를 입력해주세요!')
                    }
                    else{
                        if(g_data.id===""){
                            // alert('닉네임을 입력해주세요!')
                            g_data.id='익명의 방문자'
                        }
                        this.props.onSubmit(g_data);
                        alert('등록되었습니다.');
                    }
                }.bind(this)}>
                    <p>
                        제목 : <input type="text" name="title" placeholder="제목"></input>
                        닉네임 : <input type="text" name="id" placeholder="닉네임"></input>
                    </p>
                    <p>비밀번호 : <input type="password" name="pw" placeholder="비밀번호"></input></p>
                    <p><textarea style={{width:'450px',height:'150px'}}
                    name="content" placeholder="내용을 입력하세요"></textarea></p>
                    <p>
                        <input type="submit" value="등록"></input>
                    </p>
                </form>
            </div>
        );
    }
}

export default WriteGuest;