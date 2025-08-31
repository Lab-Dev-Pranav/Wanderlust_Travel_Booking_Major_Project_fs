
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountingSchema = new Schema({
        booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        baseAmount: { type: Number, required: true },
        taxAmount: { type: Number, required: true },
        platformAmount: { type: Number, required: true },
        totalAmount: { type: Number, required: true },
        
        createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Accounting', accountingSchema);