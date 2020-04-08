const Color = require("./../model/colorModel");
const path =require('path')

exports.getColor = async function(req, res) {
  try {
    //REad all the Colors
    const color= await Color.findById(req.params.id)
    res.status(200).render('color',{
      Colors: color
    })

    // res.status(200).json({
    //   status: " Sccuess",
    //   data: {
    //     color
    //   }
    // });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e
    });
  }
  const colors = await Color.find();
};


exports.getAllColors = async function(req, res) {
  try {
    var color= await Color.find()
    //console.log("testing file rending")
    res.status(200).render('index',{
      Colorz: color
    })

  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........"
    });
  }
  const colors = await Color.find();
};

exports.addColor = async function(req, res) {
  try {
    console.log(Color)
    const newTour = await Color.create(req.body);
    console.log(newTour)

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour
      }
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e
    });
  }
};
