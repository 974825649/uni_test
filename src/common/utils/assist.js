function findComponentUpward (context, componentName) {
    let parent = context.$parent;
    let name = parent.$option.name;
    while(parent && (!name || componentName.indexOf(name) < 0)){
        parent = parent.$parent;
        if(parent) name = parent.$option.name;
    }
    return parent
}

export default{
    findComponentUpward
}