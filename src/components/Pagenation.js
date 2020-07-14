import React, {Component} from 'react';
import _ from 'lodash';

class Pagenation extends Component {
    render(){
        var {g_count,page_size,handlePageChange} = this.props
        const pageAmount = Math.ceil(g_count / page_size);// 필요한 페이지수 계산
        const pages = _.range(1, pageAmount + 1);//마지막 페이지를 위해 +1
        return(
            <ul style={{ display:"flex" }}>
                {pages.map(page=>(
                    <li key={page} style={{ cursor: "pointer", display:"flex", marginRight:"10px" }}>
                        {/* eslint-disable-next-line */}
                        <a onClick={function(e){
                            e.preventDefault()
                            handlePageChange(page)
                            }}>{page}</a>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Pagenation;