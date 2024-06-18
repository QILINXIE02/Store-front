const initialState = {
    categoriesList: [
        { name: 'Electronics', description: 'Summer limited-time sales' },
        { name: 'Food', description: 'Fresh farm deliveries to your doorsteps' }
    ],
    activeCategory: { name: 'Electronics', description: 'New arrivals' }
};

export default function categoriesReducer(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case 'CHANGE_ACTIVE':
            const changeActiveCategory = state.categoriesList.find(item => item.name === payload);
            return {...state, activeCategory: changeActiveCategory || state.activeCategory
            };
        default:
            return state;
    }
}

export function changeActive(name) {
    return {
        type: 'CHANGE_ACTIVE',
        payload: name
    };
}
