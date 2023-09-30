
exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Can contain any information"})
    
};


exports.read = async (req, res) => { 
    res.status(200).json({status:"success", data: "Can read any information"})
};


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success", data: "Can delete any information"})
};


exports.update = async (req, res) => { 
    res.status(200).json({status:"success", data: "Can update any information"})
};