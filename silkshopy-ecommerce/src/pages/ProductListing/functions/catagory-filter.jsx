const catagoryFilter = (productsData, laptopOnly, phoneOnly, headPhoneOnly, gamingOnly) => {

    let filteredData = [];
    console.log(filteredData);
    
    if(laptopOnly === false && phoneOnly === false && headPhoneOnly === false && gamingOnly === false)
        return productsData;

    if(laptopOnly){
        let newData = productsData.filter(item =>  item.categoryName === "laptop")
        filteredData.push(...newData);
    }

    if(phoneOnly){
        let newData = productsData.filter(item =>  item.categoryName === "phone")
        filteredData.push(...newData);
    }

    if(headPhoneOnly){
        let newData = productsData.filter(item =>  item.categoryName === "headphone")
        filteredData.push(...newData);
    }

    if(gamingOnly){
        let newData = productsData.filter(item =>  item.categoryName === "gaming")
        filteredData.push(...newData);
    }

    return filteredData;
   
}

export { catagoryFilter };