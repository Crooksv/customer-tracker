//Coding Challenge 03a
//Vincent Crooks

let customers = [ 
    { name: "Vinny Crooks", email: "crooksv@usf.edu",purchases: ["Tires", "oil change"] },
    { name: "Jane Doe", email: "janethedoe@yahoo.com", purchases: ["Brakes", "Wipers"]},
    {name: "Chloe Day", email: "Chloeday@gmail.com", purchases: ["Shocks", "Struts"]}
];

customers.push({name:"Anthony Locke", email: "antlocke@usf.edu", purchases: ["Cola", "Oil"]});
customers.shift();
customers[0].email = "vinnyc@gmail.com";
customers[1].purchases.push("Oil");

customers.forEach(customer => {console.log( `Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`); } );

