import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { v4 as uuidv4 } from 'uuid';
import ItemList from './Components/ItemList';
import './main-table.css'

const MainTable = () => {
    const [listData,setListData] = useState({
        prosList: [
            {
                id:uuidv4(),
                text:`it's tasty`
            },
        ],
        consList: [
            {
                id:uuidv4(),
                text:`too expensive`
            },
        ]
    })

    const onItemChange = (event,index,type) => {
        let newValue = event.currentTarget.value;

        const list = listData[type];

        let newList = [...list];
        newList[index] = { ...list[index], text:newValue};

        //if the field is the last one, add one more field
        if(index === (list.length - 1)){
            const newItem = {
                id: uuidv4(),
                text:''
            };
            newList.push(newItem);
        };
        //if the field is empty, delete it from the list
        if(!newValue){
            newList.splice(index,1);
        };
        //state update
        setListData({...listData, [type]:newList});
    };

    return (
        <div className="table-container">
            <div className="table-header">
                <Typography variant="h4"gutterBottom>
                    Should I eat at McDonalds?
                </Typography>
            </div>
            <div className="pros-and-cons">
                <div>
                    <Typography variant="h6" gutterBottom>
                        PROS 
                    </Typography>
                </div>
                <div>
                    <Typography variant="h6" gutterBottom>
                        CONS 
                    </Typography>  
                </div>
            </div>
            <div className="table-body">

                <div className="pros-column">
                    <List component="nav" aria-label="secondary mailbox folders">
                        {
                            listData.prosList.map((pros,index) => {
                                return (
                                    <ItemList 
                                        key={pros.id}        
                                        id={pros.id}
                                        index={index}
                                        text={pros.text}
                                        onItemChange={onItemChange}
                                        type="prosList"
                                    />
                                )
                            })
                        }
                        
                    </List>
                </div>
                <div className="cons-column">
                    <List component="nav" aria-label="secondary mailbox folders">
                        {
                            listData.consList.map((cons,index) => {
                                return (
                                    <ItemList 
                                        key={cons.id}        
                                        id={cons.id}
                                        index={index}
                                        text={cons.text}
                                        onItemChange={onItemChange}
                                        type="consList"
                                    />
                                )
                            })
                        }
                    </List>
                </div>
            </div>
        </div>
    )
};

export default MainTable;