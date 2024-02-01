import { servicesArray } from "./Constants";

export const handleSearchByText = (searhText) => {

    let arr = [];

    for (let i = 0; i < servicesArray.length; i++) {
        const item = servicesArray[i];
        if(item.title.includes(searhText) || item.desc.includes(searhText)){
            if(!arr.find(ii => ii === item)) arr.push(item);
        }
    }

    return arr;
    
};

export const handleSearchByCatgories = (catagories) => {

    if(catagories.length <= 0) return servicesArray;

    let arr = [];

    for (let i = 0; i < servicesArray.length; i++) {
        const item = servicesArray[i];

        for (let j = 0; j < catagories.length; j++) {
            if(item.catagory[0] === catagories[j] || item.catagory[1] === catagories[j]){
                if(!arr.find(ii => ii === item)) arr.push(item);
            }   
        }
    }

    return arr;
    
};

export const getRecomendedServices = (catagory) => {

    let recomendedArray = [];

    console.log('catagory: ', catagory);

    for (let i = 0; i < servicesArray.length; i++) {
        const item = servicesArray[i];
        
        for (let j = 0; j < item.catagory.length; j++) {
            for (let k = 0; k < catagory.length; k++) {
                if(item.catagory[j] === catagory[k]){
                    if(!recomendedArray.find(myItem => myItem === item )){
                        recomendedArray.push(item);
                    }
                }
            }
            
        }
    };

    recomendedArray = shuffle(recomendedArray);

    recomendedArray = recomendedArray.slice(0, 6);

    return recomendedArray;

};

export const getHomePageServices = () => {
    return servicesArray.slice(0, 6);
};

export const getServiceDetails = (title) => {

    console.log("title: ", title);

    if(!title || title.length <= 0) return null;

    for (let i = 0; i < servicesArray.length; i++) {
        if(servicesArray[i].title.toLowerCase() === title.replaceAll('-', ' ')){
            console.log("item found");
            return servicesArray[i];
        };
    }

};

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};