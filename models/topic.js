'use strict'

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');

var Schema = mongoose.Schema;

//Un Schema simplemente es el esquema del modelo
//Modelo Schema
//La explicacion de las referencias esta en la seccion 44, detalle del tema
var CommentSchema = Schema({
    content: String,
    date: { type: Date, default: Date.now },
    user: { type: Schema.ObjectId, ref: 'User' }
});

var Comment = mongoose.model('Comment', CommentSchema);

//Modelo de topic
var TopicSchema = Schema({
    title: String,
    content: String,
    code: String,
    lang: String,
    date: {type: Date, default: Date.now},
    user: { type: Schema.ObjectId, ref: 'User' },
    comments: [CommentSchema]
});

//Cargar paginación
TopicSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Topic', TopicSchema);