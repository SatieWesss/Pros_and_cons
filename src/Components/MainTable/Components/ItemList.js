import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'

const ItemList= ({id,index,text,onItemChange,type}) => {
    const [activeField,setActiveField ] = useState('');

    return (
        <ListItem onClick={() => setActiveField(id)}>
            <Typography variant="subtitle1">
                {`${index + 1}.`}
            </Typography>
            {  
                activeField !== id
                ?
                    <Typography
                        variant="subtitle2"
                    >
                        {text}
                    </Typography> 
                :
                    <TextField
                        defaultValue={text}
                        multiline
                        rowsMax={4}
                        fullWidth
                        autoFocus
                        onChange={(e) => onItemChange(e,index,type)}
                        onBlur={() => setActiveField('')}
                    />
            }
        </ListItem>
    )
};

export default ItemList;