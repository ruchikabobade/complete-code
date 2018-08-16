import axios from "axios";

export function loadCustomer(){
    return(dispatch)=>{
        return axios.get("http://customer-service-madhu.cfapps.io/customers").then((response)=>{
            console.log("in dispatch");
            console.log("load customer" + response.data);
            dispatch(displayCustomer(response.data));
        })
    }
}

export function displayCustomer(customers){
    return{
        type:"DISPLAY_CUSTOMER",
        customers:customers
    }
}
export function loadOrders(customerId){
    return(dispatch)=>{
        return axios.get("http://order-service-madhu.cfapps.io/orders/"+ customerId).then((response)=>{
            console.log("in dispatch");
            console.log("load order" + response.data);
            dispatch(displayOrder(response.data));
        })
    }
}

export function displayOrder(orders){
    return{
        type:"DISPLAY_ORDER",
        orders:orders
    }
}
export function saveCustomer(id, name, addressLine1, addressLine2, age, postCode){
    const customer = {
    id: id,
    name : name,
    addressLine1 :addressLine1,
    addressLine2 :addressLine2,
    age : age,
    postCode : postCode
    }

    return(dispatch)=>{
        return axios.post("http://customer-service-madhu.cfapps.io/customers", customer).then((response) => {
            console.log("Post success!");
            dispatch(loadCustomer());
        })
    }
}

export function addCustomer(){
    return{
        type:"ADD_CUSTOMER"
    }
}

export function deleteCustomer(id){
    return(dispatch)=>{axios.delete("http://customer-service-madhu.cfapps.io/customers"+"/"+id).then((response) => {
        console.log("Delete success!");
            dispatch(loadCustomer());
    })
}
}

export function removeCustomer(){
    return{
        type:"DELETE_CUSTOMER"
    }
}

export function addOrder(customerId, orderName){
    const order={
        customerId : customerId,
        orderName : orderName
    }
    return(dispatch)=>{
        return axios.post("http://order-service-madhu.cfapps.io/orders", order).then((response) => {
            console.log("Post success!");
        })
    }
}