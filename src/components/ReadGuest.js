import React, {Component} from 'react';
import GuestWriting from './GuestWriting';
import Pagenation from './Pagenation'
import _ from 'lodash';

class ReadGuest extends Component {
    constructor(props){
        super(props);
        this.lsize = null
        this.state = {
            now_page:1,
            page_size:10
        }
        this.handlePageChange = this.handlePageChange.bind(this)
    }
    shouldComponentUpdate(newProps, newState){//rendering 직전에 호출
        //newProps는 원소 추가된 데이터, this Props는 현재 값
        if(newProps.g_content === this.props.g_content
            && newState.now_page === this.state.now_page){
          return false;
        }
        return true;//업데이트된게 없음 true면 있음
    }
    componentDidUpdate(prevProps, prevState){//rendering한 직후에 호출
        // console.log(prevState, this.state)
        // console.log(prevProps,this.props)
        if(this.lsize===0){
            this.setState({//state값이 바뀌면 렌더링됨
                now_page:this.state.now_page-1//페이지를 직전페이지로 바꿔줌
            })
        }
    }

    handlePageChange(page){
        this.setState({ now_page: page }); // 페이지 클릭 시 현재 페이지로 변경
    }

    pageSlice(gContent, now_page, page_size) {//페이지별 보여줄 아이템 배열
        const startIndex = (now_page - 1) * page_size; // 자를 배열의 시작점
      
        return _(gContent)
          .slice(startIndex) // 시작점부터 배열을 자름
          .take(page_size) // pagesize만큼의 배열을 취함
          .value(); // lodash wrapper 객체를 regular 배열로 변환
      }

    render(){
        var gContent = this.props.g_content
        var sgContent = this.pageSlice(gContent, this.state.now_page, this.state.page_size)
        const list = sgContent.map(//data를 가져와서 map을 통하여 JSX로 변환해줌
            data => (
            <GuestWriting 
                key={data.num}
                g_data={data}
                onDelete={this.props.onDelete}
                />)
        );
        this.lsize = list.length
        return(
            <div style={{overflowWrap:"anywhere"}}>
                {list}
                <Pagenation
                    page_size={this.state.page_size}
                    g_count={gContent.length}
                    handlePageChange={this.handlePageChange}></Pagenation>
            </div>
        );
    }
}

export default ReadGuest;