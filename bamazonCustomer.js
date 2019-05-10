//const { prompt } = require('inquirer')
//const { creatConnection } = require('mysql2')

const db = createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Superdonut8',
    database: 'bamazon',
})

//Prompt the user
function promptUserPurchase() {

	// Prompt the user to select an item
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many?',
			filter: Number
		}
	]).then(function(input) {

		let item = input.item_id;
		let quantity = input.quantity;
		let selection = 'SELECT * FROM products WHERE ?';

		db.query(selection, {item_id: item}, function(err, data) {
			if (err) throw err;
			// Check valid id
			if (data.length === 0) {
				console.log('Invalid Item ID');
				displayInventory();

			} else {
				let productData = data[0];
				// Check quantity
				if (quantity <= productData.stock_quantity) {
					console.log('Order Placed!');
					let updateselection = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;					
					// Update the inventory
					db.query(updateselection, function(err, data) {
						if (err) throw err;

						console.log('Order placed! Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping!');
						console.log("------------------------------------------------------------------\n");
						// console.log(productData.stock_quantity)
						// End database connection
						process.exit();
					})
				} else {
					displayInventory()
					console.log('Insufficient quantity');
					console.log('Please modify your order');
					console.log("-------------------------------------------------------------------\n");
				}
			}
		})
	})
}

// Display inventory
function displayInventory() {
	// Construct the db query string
	selection = 'SELECT * FROM products';
	db.query(selection, function(err, data) {
		if (err) throw err;

		console.log('Inventory: ');
		console.log('..................');

		
		for (let i = 0; i < data.length; i++) {
			let strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Department: ' + data[i].department_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	console.log("--------------------------------------------------------------");

	  	//Prompt the user
	  	promptUserPurchase();
	})
}

displayInventory();