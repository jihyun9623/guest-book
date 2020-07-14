import React, {Component} from 'react';
import ReadGuest from "./components/ReadGuest"
import WriteGuest from "./components/WriteGuest"

class App extends Component {
  constructor(props){
    super(props);
    this.now_num=11;
    this.state = {
      mode:'read',
      contents : [
        { title:'공지22', content:'공지입니다.', id:'관리자', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:21 },
        { title:'공지사항', content:'공지입니다.', id:'관리자', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:20 },
        { title:'리액트19', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:19 },
        { title:'리액트18', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:18 },
        { title:'리액트17', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:17 },
        { title:'리액트16', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:16 },
        { title:'리액트15', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:15 },
        { title:'리액트14', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:14 },
        { title:'리액트13', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:13 },
        { title:'리액트12', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:12 },
        { title:'공지사항', content:'공지입니다.', id:'관리자', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:11 },
        { title:'리액트10', content:'리액트는 정말 재밌어!', id:'10', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:10 },
        { title:'리액트9', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:9 },
        { title:'리액트8', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:8 },
        { title:'리액트7', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:7 },
        { title:'리액트6', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:6 },
        { title:'리액트5', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:5 },
        { title:'리액트4', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:4 },
        { title:'리액트3', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:3 },
        { title:'리액트2', content:'리액트는 정말 재밌어!', id:'나다', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:2 },
        { title:'공지사항', content:'공지입니다.', id:'관리자', write_date:'2020. 7. 8. 오전 9:49:23', pw:'1', num:1 },
      ]
    }
    this.modeHandler = this.modeHandler.bind(this)
  }

  modeHandler(){
    var nowMode = null;
    if(this.state.mode === 'read'){
      nowMode=<ReadGuest g_content={this.state.contents}
              onDelete={function(pw,key){
                var _contents = Array.from(this.state.contents);
                var i = 0;
                var c = this.state.contents
                while(i<c.length){
                  if(c[i].num===key){
                    if(c[i].pw===pw){
                      if(window.confirm(c[i].title+"- 게시글을 정말로 삭제하시겠습니까?")){
                        alert(c[i].title+'- 게시글이 삭제되었습니다.')
                        _contents.splice(i,1);
                        break;
                      }
                    }else{
                      alert('비밀번호가 틀렸습니다.')
                    }
                  }
                  i++
                }
                this.setState({
                  contents:_contents
                });
              }.bind(this)}></ReadGuest>
    }else{
      nowMode=<WriteGuest onSubmit={function(g_data){
                  this.now_num = this.now_num+1
                  var _contents = [{ 
                      title:g_data.title,
                      content:g_data.content,
                      id:g_data.id,
                      write_date:g_data.write_date,
                      pw:g_data.pw,
                      num:this.now_num
                    }, ...this.state.contents]
                  this.setState({
                    mode:'read',
                    contents:_contents,
                    tf:true,
                  })
                }.bind(this)}></WriteGuest>
    }
    return nowMode
  }

  gEmpty(){
    if(this.state.contents.length===0){
      return <p>작성된 방명록이 없습니다.</p>
    }
  }
  
  render(){
    return (
      <div className="App" style={{marginLeft:'20px', marginRight:'20px'}}>
        <h1>방명록</h1>
        <p>
          <button onClick={function(e){
                  e.preventDefault();
                  if(this.state.mode==='read'){
                    this.setState({
                      mode : "write"
                    });
                  }else{
                    this.setState({
                      mode : "read"
                    });
                  }
                }.bind(this)}>{this.state.mode==='read'?'작성하기':'뒤로가기'}</button>
        </p>
        {this.gEmpty()}
        {this.modeHandler()}
      </div>
    );
  }
}

export default App;
