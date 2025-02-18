const model=require("../model/model");

// const Content = require('./models/Content'); // Import the Mongoose model

exports.add = async (req, res) => {
  try {
    // Extract data from the request body
    const { link, heading, contentType } = req.body;

    // Validate required fields
    if (!link || !heading || !contentType) {
      return res.status(400).json({
        success: false,
        message: 'Link, heading, and contentType are required.',
      });
    }

    // Validate contentType enum
    if (!['study', 'not study'].includes(contentType)) {
      return res.status(400).json({
        success: false,
        message: 'contentType must be either "study" or "not study".',
      });
    }

    // Create a new document using the Mongoose model
    const newContent = new model({
      link,
      heading,
      contentType,
    });

    // Save the document to the database
    await newContent.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: 'Content added successfully!',
      data: newContent,
    });
  } catch (e) {
    // Handle errors
    console.error('Error adding content:', e);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: e.message,
    });
  }
};

// const Content = require('./models/Content'); // Import the Mongoose model

exports.get = async (req, res) => {
  // try {
  //   // Fetch all documents with all fields
  //   const contents = await model.find({});

  //   // Send success response with all fields
  //   res.status(200).json({
  //     success: true,
  //     message: 'Contents fetched successfully!',
  //     data: contents,
  //   });
  // } catch (e) {
  //   // Handle errors
  //   console.error('Error fetching contents:', e);
  //   res.status(500).json({
  //     success: false,
  //     message: 'Internal server error',
  //     error: e.message,
  //   });
  // }

  res.send('<>hyyy</>')
};





exports.del = async (req, res) => {
  try {
    // Extract the _id from request parameters
    const { _id } = req.params;

    // Validate _id
    if (!_id) {
      return res.status(400).json({
        success: false,
        message: 'ID is required.',
      });
    }

    // Find and delete the document by _id
    const deletedContent = await model.findByIdAndDelete(_id);

    // Check if the document was found and deleted
    if (!deletedContent) {
      return res.status(404).json({
        success: false,
        message: 'Content not found.',
      });
    }

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Content deleted successfully!',
      data: deletedContent,
    });
  } catch (e) {
    // Handle errors
    console.error('Error deleting content:', e);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: e.message,
    });
  }
};