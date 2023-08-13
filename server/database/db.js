import mongoose from 'mongoose';

const Connection = async (username, password) => {
    
    const URL = `mongodb+srv://suyash:CCZtWJAZ26P1FbZt@cluster0.4snxf6l.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error in connecting to database: ', error.message);
    }

};

export default Connection;