import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeActive } from '../categories';
import { getRemoteData } from '../thunk';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Categories() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.categoriesList);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    dispatch(changeActive(state.categoriesList[newValue].name));
  };

  useEffect(() => {
    dispatch(getRemoteData());
  }, [dispatch]);

  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={state.categoriesList.findIndex(cat => cat.name === state.activeCategory.name)}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          centered
        >
          {state.categoriesList.map((element) => (
            <Tab key={element.name} label={element.name} />
          ))}
        </Tabs>
      </Paper>
      <div>
        <h2>{state.activeCategory.name}</h2>
        <p>{state.activeCategory.description}</p>
      </div>
    </>
  );
}

export default Categories;
