import React from 'react'
import { connect } from 'react-redux';
import { changeActive } from '../categories';
import { loadProducts } from '../thunk';
import { useDispatch,useSelector } from 'react-redux';
import { getRemoteData } from '../thunk';
import { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});


function Categories(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.categoriesList);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  


useEffect(()=>{
    // props.changeActive("electronics");
    dispatch(getRemoteData()).then(()=>{
        dispatch(changeActive("electronics"));
    });
},[])

    return (
        <>

        <Paper  className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="primary"
                centered
                >
                {state.categoriesList.map((element)=>{
                    return <Tab key={element.name} label={element.name} onClick={() => { dispatch(changeActive(element.name)) }} />
                })}
            </Tabs>
        </Paper>
                <div style={{display:"flex", justifyContent:'center',marginTop:'30px'}}>
                <h1 style={{marginRight:'5px', color:'rgb(0, 112, 153)'}} >{state.activeCategory.name} </h1>
                <h4 style={{color:'rgb(148, 184, 184)'}}> {state.activeCategory.description} </h4>
                </div>
        </>
    );
}

export default Categories;