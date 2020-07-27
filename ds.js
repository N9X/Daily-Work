function mySet(){
    var collection=[];
    this.has=function(element){
        return(collection.indexOf(element)!==-1);
    };
    this.values=function(){
        return collection;
    };

};
this.add = function(element){
    if(!this.has(element)){
        collection.push(element);
        return true;
    }
    return false;
};
this. remove = function(element){
    if(this.has(element)){
        index=collection.indexOf(element);
        collection.splice(index,1);
        return true;
    }
    return false;
}
this.size=function(){
    return collection.length;
};

this.union=function(otherSet){
    var unionSet = new mySet();
    var firstSet= this.values();
    var secondSet= otherSet.values();
    firstSet.forEach(function(e) {
        unionSet.add(e);
        
    });
    secondSet.forEach(function(e) {
        unionSet.add(e);
        
    });
    return unionSet;

}
this.intersectionSet = function(otherSet){
    var intersectionSet =new mySet();
    var firstSet=this.values();
    firstSet.forEach(function(e) {
        if(otherSet.has(e)){
            intersectionSet.add(e)
        }
        
    });
}