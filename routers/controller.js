const User = require('../models/user')
const Product = require('../models/products')
const controller = {};
 
controller.signUp=  async (req, res, next) => {
       let { firstName, lastName, emailId} = req.body
       User.create({
           firstName,
           lastName,
           emailId
       }).then((user) => {
           return res.status(201).json({
               "message": "User created successfully",
                user
           })
       }).catch(err => {
        console.log(err);
        return res.status(400).json({err})
    })
    },

controller.updateUser =  async (req, res, next) => {
        let { firstName, lastName, emailId} = req.body
            let id = req.params.id

            User.findOne({ where: {id:id} }).then( user => {
            if (user){
                user.update({firstName, lastName, emailId})
                .then(() => {
                    return res.status(200).json({'message': 'User updated successfully'})});
            }else{
                return res.status(206).json({
                    "message": "User not found"
                })
            }
        }).catch(error => {
            return res.status(400).json({
                "error": error
            })
        })
    },


controller.getAllUsers =  async (req, res, next) => {
        
    const query = {
        attributes: ['id', 'firstName', 'lastName', 'emailId'],
        limit: 5,
        order: [['id', 'DESC']]
    }
        User.findAll(query).then(users => {
            return res.status(200).json({
                users
            })
        }).catch(error => {
            return res.status(400).json(error);
        })
    },

controller.getUser =  async (req, res) => {
        const { id } = req.params.id
        User.find(id)
        .then((user) => {
            return res.status(200).json({user})
        }).catch(error => {
            return res.status(400).json(error)
        })
    },

controller.deleteUser =  async (req, res) => {
    const { id } = req.params
    User.destroy({
        where: {id: id}
    }).then(() =>{
        return res.status(200).json({
            "message": "User Deleted successfully"
        })
    }).catch(err =>{
        return res.status(400).json({error})
    })

};

controller.addProduct =  async (req, res) => {
    const { sProductName, iPrice, sCategory, iUserId } = req.body;
    Product.create({ sProductName, iPrice, sCategory }).then((product) => {
        return res.status(201).json({
            "message": "Product created successfully",
            product
        }).catch(err => {
            console.log(err);
            return res.status(400).json(err);
        })
    })
},

controller.getProduct =  async (req, res) => {
    const { id } = req.params
    await Product.findOne({ where: { id }, include: [{ model: User}]})
    .then((product) => {
        return res.status(200).json({product})
    }).catch(error => {
        return res.status(400).json(error)
    })
},

module.exports = controller
