import React from 'react';
import { List, Button,Icon } from 'antd';

const CharecterList = (props) => {
    return (
        !!props.data.length ?
        <List
            size="small"
            header={<div>Charecters within the entered text</div>}
            bordered
            dataSource={props.data}
            renderItem={(item, index) => (
                <List.Item
                    actions={[<Button shape="circle" onClick={() => props.onDelete(index)} ><Icon type="delete" theme="twoTone" /></Button>]}
                    key={index} >
                    {item} is entered at {index} Position
              </List.Item>
            )}
        />:
        null
    )
}

export default CharecterList;