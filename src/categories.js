const initialState ={
    categoriesList:[
      {name:'Electronics',description:': Summer limited-time sales'},
      {name:'food',description:': fresh farm deliveries to your doorsteps'}
    ],
    activeCategory:{name:'Electronics',description:'New arrivals'},
}

export default function categoriesReducer(state=initialState,action){
    const {payload,type} = action;
    switch(type){
        case 'CHANGE_ACTIVE':
            let changeActiveCategory={};
            state.categoriesList.forEach(item=>{
                if(item.name === payload){
                    changeActiveCategory=item;
                }
            });
            return {
                categoriesList: state.categoriesList,
                activeCategory:changeActiveCategory
            };
        default:
            return state;
    }
}

export function changeActive(name){
    return {
        type:'CHANGE_ACTIVE',
        payload:name
    }
}