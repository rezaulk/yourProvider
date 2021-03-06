var db = require('./db');
module.exports = {
	getAll: function(callback){
		var sql = "SELECT * FROM package";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getAllUser: function(callback){
		var sql = "SELECT * FROM users WHERE usertype ='user'";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getAllAdmin: function(callback){
		var sql = "SELECT * FROM users where usertype='admin'";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getAllPackages: function(callback){
		var sql = "SELECT * FROM package";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

    getAllPayment: function(callback){
		var sql = "SELECT * FROM payment JOIN connection ON payment.connectionid = connection.connectionid JOIN users on connection.userid = users.userid";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getConncetionId: function(id,callback){
		var sql = "SELECT * FROM connection where connectionid=?";
		db.executeQuery(sql, [id], function(result){
			callback(result);
		});
	},

	getPackageCount:function(packageid,callback){
		var sql = "SELECT * FROM connection where packageid=?";
		db.executeQuery(sql, [packageid], function(result){
			callback(result);
		});
	},

	getUserName: function(id,callback){
		var sql = "SELECT * FROM users where userid=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},

	getUserNamebyuname: function(username,callback){
		var sql = "SELECT * FROM users where username=?";
		db.executeQuery(sql, [username], function(result){
			callback(result[0]);
		});
	},

	getPackageName: function(id,callback){
		var sql = "SELECT * FROM package where packageid=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},


	get: function(id, callback){
		var sql = "SELECT * FROM package WHERE packageid=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},

	getPName: function(packagename, callback){
		var sql = "SELECT * FROM categories WHERE packagename=?";
		db.executeQuery(sql, [packagename], function(result){
			callback(result[0]);
		});
	},

	insert: function(package, callback){
		var sql = "INSERT INTO package VALUES (?,?, ?,null, ?)";
		db.executeQuery(sql, [package.packagename, package.price,package.speed,package.description], function(result){
			callback(result);
		});
	},

	deletepackage: function(package, callback){
		console.log(package);
		var sql = "DELETE FROM package WHERE packageid=?";
		var param=[package];
		db.executeQuery(sql,param, function(result){
			console.log(result)
			callback(result);
	});
	},




	insertpackage: function(category, callback){
		var sql = "INSERT INTO package VALUES (null, ?, ?,?)";
		db.executeQuery(sql, [package.packagename, package.price,package.speed], function(result){
			callback(result);
		});
	},
	update: function(id, name, description, callback){
		var sql = "UPDATE categories SET name=?, description=? WHERE id=?";
		db.executeQuery(sql, [name, description, id], function(result){
			callback(result);
		})
	}
};
